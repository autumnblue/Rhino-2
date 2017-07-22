import { combineReducers } from 'redux';
import { map } from 'lodash';

import * as c from './constants';

const initialState = {
  data: {},
  ids: [],
  me: null,
  validationErrors: {},
};

function data(state = initialState.data) {
  return state;
}

function ids(state = initialState.ids, action) {
  switch (action.type) {
    case c.LOAD_USERS_SUCCESS:
      return map(action.response.data.users, 'id');
    default:
      return state;
  }
}

function me(state = initialState.me, action) {
  switch (action.type) {
    case c.LOGIN_SUCCESS:
    case c.REFRESH_TOKEN_SUCCESS:
      return action.response.data.user.id;
    case c.LOGOUT:
      return null;
    default:
      return state;
  }
}

function validationErrors(state = initialState.validationErrors, action) {
  switch (action.type) {
    case c.LOGIN_FAIL: {
      const { status, data: resp } = action.response;
      return status === 400 ? resp || {} : state;
    }
    case c.LOGIN_SUCCESS:
      return {};
    default:
      return state;
  }
}

export default combineReducers({
  data,
  ids,
  me,
  validationErrors,
});
