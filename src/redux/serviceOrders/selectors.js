import { createSelector } from 'reselect';

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
  service_instances: serviceGroup.service_instances.map(id => serviceInsancesData[id])
})

export const getCurrentServiceOrder = createSelector(
  [getCurrentServiceOrderId, getServiceOrdersData, getServiceGroupsData, getServiceInstancesData],
  (id, data, serviceGroupsData, serviceInsancesData) => ({
    ...data[id],
    primary_service_group: fillServiceInstances(
      serviceGroupsData[data[id].primary_service_group],
      serviceInsancesData
    ),
    service_groups: data[id].service_groups.map(sgId => fillServiceInstances(
      serviceGroupsData[sgId],
      serviceInsancesData
    ))
  }),
);
