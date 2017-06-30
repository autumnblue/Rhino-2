import { combineReducers } from 'redux';

import * as c from './constants';

const initialState = {
  data: {},
  me: null,
};

function data(state = initialState.data) {
  return state;
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
  me,
});
