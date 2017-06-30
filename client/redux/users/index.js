import { combineReducers } from 'redux';

const initialState = {
  data: {},
  me: null,
};

function data(state = initialState.data) {
  return state;
}

function me(state = initialState.me) {
  return state;
}

export default combineReducers({
  data,
  me,
})
