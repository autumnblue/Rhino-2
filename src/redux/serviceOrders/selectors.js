import { createSelector } from 'reselect';

import { getServiceGroupsData } from 'src/redux/serviceGroups/selectors'

const getServiceOrdersIds = state => state.serviceOrders.ids;
const getCurrentServiceOrderId = state => state.serviceOrders.id;
export const getServiceOrdersData = state => state.serviceOrders.data;

export const getServiceOrders = createSelector(
    [getServiceOrdersIds, getServiceOrdersData],
    (ids, data) => ids.map(id => data[id]),
);

export const getCurrentServiceOrder = createSelector(
  [getCurrentServiceOrderId, getServiceOrdersData, getServiceGroupsData],
  (id, data, serviceGroupsData) => ({
    ...data[id],
    primary_service_group: serviceGroupsData[data[id].primary_service_group],
    service_groups: data[id].service_groups.map(sgId => serviceGroupsData[sgId])
  }),
);
