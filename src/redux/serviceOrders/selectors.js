import { createSelector } from 'reselect';
import { sortBy } from 'lodash'

import { getServiceGroupsData } from 'src/redux/serviceGroups/selectors';
import { getServiceInstancesData } from 'src/redux/serviceInstances/selectors'
import { getAdjustmentsData } from 'src/redux/adjustments/selectors'

const getServiceOrdersIds = state => state.serviceOrders.ids;
const getCurrentServiceOrderId = state => state.serviceOrders.id;
export const getServiceOrdersData = state => state.serviceOrders.data;

export const getServiceOrders = createSelector(
    [getServiceOrdersIds, getServiceOrdersData],
    (ids, data) => ids.map(id => data[id]),
);

const fillServiceGroup = (serviceGroup, serviceInsancesData, adjustmentsData) => ({
  ...serviceGroup,
  service_instances: sortBy(
    serviceGroup.service_instance_ids.map(id => serviceInsancesData[id]),
    'custom_sort_priority'
  ),
  adjustments: sortBy(
    serviceGroup.adjustments.map((adjustmentId) => adjustmentsData[adjustmentId]),
    'sort_priority'
  )
})


// Yeah, looks not good :(
export const getCurrentServiceOrder = createSelector(
  [getCurrentServiceOrderId, getServiceOrdersData, getServiceGroupsData, getServiceInstancesData, getAdjustmentsData],
  (id, data, serviceGroupsData, serviceInsancesData, adjustmentsData) => ({
    ...data[id],
    primary_service_group: fillServiceGroup(
      serviceGroupsData[data[id].primary_service_group_id],
      serviceInsancesData,
      adjustmentsData,
    ),
    service_groups: sortBy(
      data[id].service_group_ids.map(
        sgId => fillServiceGroup(
          serviceGroupsData[sgId],
          serviceInsancesData,
          adjustmentsData
        )
      ),
      'sort_priority'
    ),
  }),
);

/*
def calculate_total_due(self):
  total_due = self.pre_adjustment_total

  for each_additive_adjustment in self.adjustments.filter(modifier='+'):
      total_due += each_additive_adjustment.value
  for each_multiplicative_adjustment in self.adjustments.filter(modifier='%'):
      total_due *= (1 + (each_multiplicative_adjustment.value / 100))

  return total_due
*/
const calculateTotalDue = (summary, adjustments) => {
  adjustments.filter(({ modifier }) => (modifier === '+')).forEach(({ value }) => {
    summary += value;
  });

  adjustments.filter(({ modifier }) => (modifier === '%')).forEach(({ value }) => {
    summary *= (1 + (value / 100));
  });

  return summary;
}

const calculateServiceGroup = (
  serviceGroup,
  serviceInstancesDate,
  adjustmentsData
) => {
  const costs = {
    instances: [],
    adjustments: [],
    subtotal: 0,
    total: 0,
    serviceGroup,
  };

  serviceGroup.service_instances.forEach(id => {
    const instance = serviceInstancesDate[id];
    const cost = instance.unit_price * instance.number_of_hours;

    costs.instances.push({ cost, instance });

    costs.subtotal += cost;
  });

  serviceGroup.adjustments.forEach(id => {
    costs.adjustments.push(adjustmentsData[id]);
  });

  costs.total = calculateTotalDue(costs.subtotal, costs.adjustments);

  return costs;
}

export const getSummaryOfCosts = createSelector(
  [getCurrentServiceOrderId, getServiceOrdersData, getServiceGroupsData, getServiceInstancesData, getAdjustmentsData],
  (id, data, serviceGroupsData, serviceInsancesData, adjustmentsData) => {
    const serviceOrder = data[id];
    const costsByGroupId = {};
    const primaryServiceGroupCosts = calculateServiceGroup(
      serviceGroupsData[serviceOrder.primary_service_group_id],
      serviceInsancesData,
      adjustmentsData
    );
    let subtotal = primaryServiceGroupCosts.subtotal;
    let total = primaryServiceGroupCosts.total;
    const serviceGroupsCosts = serviceOrder.service_group_ids.map(serviceGroupId => {
      const costs = calculateServiceGroup(
        serviceGroupsData[serviceGroupId],
        serviceInsancesData,
        adjustmentsData
      );
      costsByGroupId[serviceGroupId] = costs;
      subtotal += costs.subtotal;
      total += costs.total;
      return costs;
    });

    costsByGroupId[serviceOrder.primary_service_group_id] = primaryServiceGroupCosts;

    return {
      primaryServiceGroupCosts,
      serviceGroupsCosts,
      costsByGroupId,
      subtotal,
      total,
      serverSideTotal: serviceOrder.total_due
    };
  }
)
