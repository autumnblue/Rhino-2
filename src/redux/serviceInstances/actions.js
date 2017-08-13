import * as c from './constants';

const endpoint = 'service-instances/';

// UI actions
export const deleteServiceInstanceTrigger = id => ({
  type: c.DELETE_SERVICE_INSTANCE_TRIGGER,
  id,
});

export const editServiceInstanceFieldChange = (id, path) => ({
  type: c.EDIT_SERVICE_INSTANCE_FIELD_CHANGE,
  id,
  path,
});

// API actions
export const loadServiceInstances = ({
  include = [],
  filter = {},
} = {}) => ({
  types: [c.LOAD_SERVICE_INSTANCES, c.LOAD_SERVICE_INSTANCES_SUCCESS, c.LOAD_SERVICE_INSTANCES_FAIL],
  api: ({ get }) => get(endpoint, {
    params: {
      include,
      filter,
      per_page: 1000,
    },
  }),
});

export const createServiceInstance = data => ({
  types: [c.CREATE_SERVICE_INSTANCE, c.CREATE_SERVICE_INSTANCE_SUCCESS, c.CREATE_SERVICE_INSTANCE_FAIL],
  api: ({ post }) => post(endpoint, {
    data: {
      ...data,
      commit: true,
    },
    params: {
      include: ['service_group']
    }
  }),
});

export const editServiceInstance = (id, data) => ({
  types: [c.EDIT_SERVICE_INSTANCE, c.EDIT_SERVICE_INSTANCE_SUCCESS, c.EDIT_SERVICE_INSTANCE_FAIL],
  api: ({ patch }) => patch(endpoint + id, {
    data,
    params: {
      include: ['service_group']
    }
  }),
  id,
});

export const deleteServiceInstance = id => ({
  types: [c.DELETE_SERVICE_INSTANCE, c.DELETE_SERVICE_INSTANCE_SUCCESS, c.DELETE_SERVICE_INSTANCE_FAIL],
  api: ({ del }) => del(endpoint + id),
  id,
});
