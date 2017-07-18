import { combineReducers } from 'redux';
import { map } from 'lodash';

import * as c from './constants';

const initialState = {
  data: {},
  ids: [],
};

function data(state = initialState.data) {
  return state;
}

function ids(state = initialState.ids) {
  return state;
}


export default combineReducers({
  data,
  ids,
});
