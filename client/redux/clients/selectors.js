import { createSelector } from 'reselect';

const getClientsIds = state => state.clients.ids;
const getClientsData = state => state.clients.data;

export const getClients = createSelector(
    [getClientsIds, getClientsData],
    (ids, data) => ids.map(id => data[id])
);
