import * as c from './constants';

export const loadClients = () => ({
  types: [c.LOAD_CLIENTS, c.LOAD_CLIENTS_SUCCESS, c.LOAD_CLIENTS_FAIL],
  api: ({ get }) => get('clients/', {
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
