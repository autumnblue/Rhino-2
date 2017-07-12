import { createSelector } from 'reselect';

// const getClientsIds = state => state.clients.ids;
// const getCurrentClientId = state => state.clients.id;
// const getClientsData = state => state.clients.data;

const getServicesData = state => state.services.data;
const getServicesIds = state => state.services.ids;

export const getServices = createSelector(
  [getServicesIds, getServicesData],
  (ids, data) => ids.map(id => data[id]),
);

// export const getCurrentClient = createSelector(
//   [getCurrentClientId, getClientsData],
//   (id, data) => data[id],
// );
