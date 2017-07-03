import { combineReducers } from 'redux';
import { map } from 'lodash';

import * as c from './constants';

const initialState = {
  data: {},
  ids: [],
  id: null,
  validationErrors: {},
};

function data(state = initialState.data) {
  return state;
}

function ids(state = initialState.ids, action) {
  switch (action.type) {
    case c.LOAD_CLIENTS_SUCCESS:
      return map(action.response.data.clients, 'id');
    default:
      return state;
  }
}

function id(state = initialState.id, action) {
  switch (action.type) {
    case c.LOAD_SINGLE_CLIENT_SUCCESS:
      return action.response.data.client.id;
    default:
      return state;
  }
}

function validationErrors(state = initialState.validationErrors, action) {
  switch (action.type) {
    case c.EDIT_CLIENT_FAIL:
    case c.CREATE_CLIENT_FAIL:
      const { status, data } = action.response;
      return status === 400 ? data || {} : state;
    case c.EDIT_CLIENT_SUCCESS:
    case c.CREATE_CLIENT_SUCCESS:
      return {};
    default:
      return state;
  }
}

export default combineReducers({
  data,
  ids,
  id,
  validationErrors,
});
