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
    service_groups: data[id].service_group_ids
    .map(sgId => fillServiceGroup(
      serviceGroupsData[sgId],
      serviceInsancesData,
      adjustmentsData
    )),
  }),
);
