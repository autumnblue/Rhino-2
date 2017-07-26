import { createSelector } from 'reselect';

const getServiceOrdersIds = state => state.serviceOrders.ids;
const getCurrentServiceOrderId = state => state.serviceOrders.id;
export const getServiceOrdersData = state => state.serviceOrders.data;

export const getServiceOrders = createSelector(
    [getServiceOrdersIds, getServiceOrdersData],
    (ids, data) => ids.map(id => data[id]),
);

export const getCurrentServiceOrder = createSelector(
  [getCurrentServiceOrderId, getServiceOrdersData],
  (id, data) => data[id],
);
