import * as c from './constants';

const endpoint = 'tools/';

// API actions
export const loadTools = ({
  filter = {},
} = {}) => ({
  types: [c.LOAD_TOOLS, c.LOAD_TOOLS_SUCCESS, c.LOAD_TOOLS_FAIL],
  api: ({ get }) => get(endpoint, {
    params: {
      filter,
    },
  }),
});
