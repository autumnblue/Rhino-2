import { createSelector } from 'reselect';

const getClientsIds = state => state.clients.ids;
const getCurrentClientId = state => state.clients.id;
const getClientsData = state => state.clients.data;

export const getClients = createSelector(
  [getClientsIds, getClientsData],
  (ids, data) => ids.map(id => data[id]),
);

export const getPotentialParents = createSelector(
  [getClients],
  clients => clients.filter(({ umbrella }) => !umbrella),
);

export const getCurrentClient = createSelector(
  [getCurrentClientId, getClientsData],
  (id, data) => data[id],
);
