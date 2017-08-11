import { createSelector } from 'reselect';
import { sortBy } from 'lodash'

import { getServiceGroupsData } from 'src/redux/serviceGroups/selectors';
import { getServiceInstancesData } from 'src/redux/serviceInstances/selectors'

const getServiceOrdersIds = state => state.serviceOrders.ids;
const getCurrentServiceOrderId = state => state.serviceOrders.id;
export const getServiceOrdersData = state => state.serviceOrders.data;

export const getServiceOrders = createSelector(
    [getServiceOrdersIds, getServiceOrdersData],
    (ids, data) => ids.map(id => data[id]),
);

const fillServiceInstances = (serviceGroup, serviceInsancesData) => ({
  ...serviceGroup,
  service_instances: sortBy(
    serviceGroup.service_instance_ids.map(id => serviceInsancesData[id]),
    'custom_sort_priority'
  )
})


// Yeah, looks not good :(
export const getCurrentServiceOrder = createSelector(
  [getCurrentServiceOrderId, getServiceOrdersData, getServiceGroupsData, getServiceInstancesData],
  (id, data, serviceGroupsData, serviceInsancesData) => ({
    ...data[id],
    primary_service_group: fillServiceInstances(
      serviceGroupsData[data[id].primary_service_group_id],
      serviceInsancesData
    ),
    service_groups: data[id].service_group_ids
    .map(sgId => fillServiceInstances(
      serviceGroupsData[sgId],
      serviceInsancesData
    ))
  }),
);
