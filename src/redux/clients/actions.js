import * as c from './constants';

const endpoint = 'clients/';

export const newClientFormChange = () => ({
  type: c.NEW_CLIENT_FORM_CHANGE
})

export const loadClients = () => ({
  types: [c.LOAD_CLIENTS, c.LOAD_CLIENTS_SUCCESS, c.LOAD_CLIENTS_FAIL],
  api: ({ get }) => get(endpoint, {
    params: {
      include: ['departments', 'umbrella'],
      page: 1,
      per_page: 10,
      sort: ['id'],
      filter: {
        'name.icontains': '',
      },
    },
  }),
});

export const loadSingleClient = (id) => ({
  types: [c.LOAD_SINGLE_CLIENT, c.LOAD_SINGLE_CLIENT_SUCCESS, c.LOAD_SINGLE_CLIENT_FAIL],
  api: ({ get }) => get(`${endpoint}${id}`, {
    params: {
      include: ['departments', 'umbrella'],
    },
  }),
})

export const createClient = (data) => ({
  types: [c.CREATE_CLIENT, c.CREATE_CLIENT_SUCCESS, c.CREATE_CLIENT_FAIL],
  api: ({ post }) => post(endpoint, {
    data
  }),
})
