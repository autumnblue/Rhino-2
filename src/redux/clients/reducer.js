import { combineReducers } from 'redux';
import { map } from 'lodash';

import * as c from './constants';

const initialState = {
  data: {},
  ids: [],
  id: null,
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

export default combineReducers({
  data,
  ids,
  id,
});
