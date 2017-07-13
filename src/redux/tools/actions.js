import * as c from './constants';

const endpoint = 'tools/';

// API actions
export const loadTools = () => ({
  types: [c.LOAD_TOOLS, c.LOAD_TOOLS_SUCCESS, c.LOAD_TOOLS_FAIL],
  api: ({ get }) => get(endpoint, {
    params: {
      include: ['services'],
      sort: ['default_sort_priority'],
    },
  }),
});

export const editTool = (id, data) => ({
  types: [c.EDIT_TOOL, c.EDIT_TOOL_SUCCESS, c.EDIT_TOOL_FAIL],
  api: ({ patch }) => patch(endpoint + id, { data }),
});
