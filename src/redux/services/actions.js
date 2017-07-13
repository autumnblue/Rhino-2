import * as c from './constants';

const endpoint = 'services/';

// API actions
export const loadServices = ({
} = {}) => ({
  types: [c.LOAD_SERVICES, c.LOAD_SERVICES_SUCCESS, c.LOAD_SERVICES_FAIL],
  api: ({ get }) => get(endpoint, {
    params: {
      per_page: 1000,
      sort: ['default_sort_priority'],
      include: ['feature_image']
    },
  }),
});

export const loadService = id => ({
  types: [c.LOAD_SINGLE_SERVICE, c.LOAD_SINGLE_SERVICE_SUCCESS, c.LOAD_SINGLE_SERVICE_FAIL],
  api: ({ get }) => get(endpoint + id, {
    params: {
    },
  }),
});

export const deleteServiceTrigger = id => ({
  type: c.DELETE_SERVICE_TRIGGER,
  id,
});

export const deleteService = id => ({
  types: [c.DELETE_SERVICE, c.DELETE_SERVICE_SUCCESS, c.DELETE_SERVICE_FAIL],
  api: ({ del }) => del(endpoint + id),
});

export const editServiceFormChange = id => ({
  type: c.EDIT_SERVICE_FORM_CHANGE,
  id,
});


// // UI Actions
// export const newClientFormChange = () => ({
//   type: c.NEW_CLIENT_FORM_CHANGE,q3
// });
//
// export const editClientFormChange = id => ({
//   type: c.EDIT_CLIENT_FORM_CHANGE,
//   id,
// });
//
// export const deleteClientTrigger = id => ({
//   type: c.DELETE_CLIENT_TRIGGER,
//   id,
// });
//
// export const listFiltersChange = () => ({
//   type: c.LIST_FILTERS_CHANGE,
// });
//
// export const pageChange = page => ({
//   type: c.PAGE_CHANGE,
//   page,
// });
//
// // API actions
// export const loadClients = ({
//   filter = {},
//   per_page = 10,
//   sort = ['id'],
//   page = 1,
// } = {}) => ({
//   types: [c.LOAD_CLIENTS, c.LOAD_CLIENTS_SUCCESS, c.LOAD_CLIENTS_FAIL],
//   api: ({ get }) => get(endpoint, {
//     params: {
//       filter,
//       sort,
//       per_page,
//       page,
//       include: ['departments', 'umbrella'],
//     },
//   }),
// });
//
// export const loadSingleClient = id => ({
//   types: [c.LOAD_SINGLE_CLIENT, c.LOAD_SINGLE_CLIENT_SUCCESS, c.LOAD_SINGLE_CLIENT_FAIL],
//   api: ({ get }) => get(endpoint + id, {
//     params: {
//       include: ['departments', 'umbrella'],
//     },
//   }),
// });
//
// export const createClient = data => ({
//   types: [c.CREATE_CLIENT, c.CREATE_CLIENT_SUCCESS, c.CREATE_CLIENT_FAIL],
//   api: ({ post }) => post(endpoint, {
//     data,
//   }),
// });
//
// export const editClient = (id, data) => ({
//   types: [c.EDIT_CLIENT, c.EDIT_CLIENT_SUCCESS, c.EDIT_CLIENT_FAIL],
//   api: ({ patch }) => patch(endpoint + id, {
//     data,
//   }),
// });
//
// export const deleteClient = id => ({
//   types: [c.DELETE_CLIENT, c.DELETE_CLIENT_SUCCESS, c.DELETE_CLIENT_FAIL],
//   api: ({ del }) => del(endpoint + id),
// });
