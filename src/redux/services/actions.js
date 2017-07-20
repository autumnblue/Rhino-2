import * as c from './constants';

const endpoint = 'services/';

// API actions
export const loadServices = () => ({
  types: [c.LOAD_SERVICES, c.LOAD_SERVICES_SUCCESS, c.LOAD_SERVICES_FAIL],
  api: ({ get }) => get(endpoint, {
    params: {
      per_page: 1000,
      sort: ['default_sort_priority'],
      include: ['feature_image'],
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

export const createService = data => ({
  types: [c.CREATE_SERVICE, c.CREATE_SERVICE_SUCCESS, c.CREATE_SERVICE_FAIL],
  api: ({ post }) => post(endpoint, { data }),
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

export const editService = (id, data) => ({
  types: [c.EDIT_SERVICE, c.EDIT_SERVICE_SUCCESS, c.EDIT_SERVICE_FAIL],
  api: ({ patch }) => patch(endpoint + id, {
    data,
  }),
});

export const newServiceFormChange = () => ({
  type: c.NEW_SERVICE_FORM_CHANGE,
});
