import * as c from './constants';

export const loadIssuers = () => ({
  types: [c.LOAD_ISSUERS, c.LOAD_ISSUERS_SUCCESS, c.LOAD_ISSUERS_FAIL],
  api: ({ get }) => get('issuers/', {
    params: {
      per_page: 100,
    },
  }),
});
