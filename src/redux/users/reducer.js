import { combineReducers } from 'redux';
import { map } from 'lodash';

import * as c from './constants';

const initialState = {
  data: {},
  ids: [],
  me: null,
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
    default:
      return state;
  }
}

export default combineReducers({
  data,
  ids,
  me,
});
