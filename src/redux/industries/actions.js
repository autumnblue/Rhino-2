import * as c from './constants';

const endpoint = 'industries/';

// API actions
export const loadIndustries = () => ({
  types: [c.LOAD_INDUSTRIES, c.LOAD_INDUSTRIES_SUCCESS, c.LOAD_INDUSTRIES_FAIL],
  api: ({ get }) => get(endpoint),
});
