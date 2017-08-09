import * as c from './constants';

const endpoint = 'service-groups/';

// UI actions
export const deleteServiceGroupTrigger = id => ({
  type: c.DELETE_SERVICE_GROUP_TRIGGER,
  id,
});

export const editServiceGroupFieldChange = (id, path) => ({
  type: c.EDIT_SERVICE_GROUP_FIELD_CHANGE,
  id,
  path,
});

// API actions
export const loadServiceGroups = ({
  include = [],
  filter = {},
} = {}) => ({
  types: [c.LOAD_SERVICE_GROUPS, c.LOAD_SERVICE_GROUPS_SUCCESS, c.LOAD_SERVICE_GROUPS_FAIL],
  api: ({ get }) => get(endpoint, {
    params: {
      include,
      filter,
      per_page: 1000,
    },
  }),
});

export const createServiceGroup = data => ({
  types: [c.CREATE_SERVICE_GROUP, c.CREATE_SERVICE_GROUP_SUCCESS, c.CREATE_SERVICE_GROUP_FAIL],
  api: ({ post }) => post(endpoint, { data }),
});

export const editServiceGroup = (id, data) => ({
  types: [c.EDIT_SERVICE_GROUP, c.EDIT_SERVICE_GROUP_SUCCESS, c.EDIT_SERVICE_GROUP_FAIL],
  api: ({ patch }) => patch(endpoint + id, { data }),
  id,
});

export const deleteServiceGroup = id => ({
  types: [c.DELETE_SERVICE_GROUP, c.DELETE_SERVICE_GROUP_SUCCESS, c.DELETE_SERVICE_GROUP_FAIL],
  api: ({ del }) => del(endpoint + id),
});
