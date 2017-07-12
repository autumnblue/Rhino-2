import { combineReducers } from 'redux';
import { map } from 'lodash';

import * as c from './constants';

const initialState = {
  data: {},
  ids: [],
  validationErrors: {},
};

function data(state = initialState.data) {
  return state;
}

function ids(state = initialState.ids, action) {
  switch (action.type) {
    case c.LOAD_SERVICES_SUCCESS:
      return map(action.response.data.services, 'id');
    default:
      return state;
  }
}


export default combineReducers({
  data,
  ids,
});
