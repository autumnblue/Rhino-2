import { combineReducers } from 'redux';
import { map, mapValues, keyBy } from 'lodash';

import * as c from './constants';

const initialState = {
  data: {},
  ids: [],
  id: null,
  choices: null,
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

function id(state = initialState.id, action) {
  switch (action.type) {
    case c.LOAD_SINGLE_SERVICE_SUCCESS:
      return action.response.data.service.id;
    default:
      return state;
  }
}

function choices(state = initialState.choices, action) {
  switch (action.type) {
    case c.LOAD_SERVICE_CHOICES_SUCCESS:
      return mapValues(action.response.data, value => mapValues(keyBy(value, '0'), '1'));
    default:
      return state;
  }
}

function validationErrors(state = initialState.validationErrors, action) {
  switch (action.type) {
    case c.EDIT_SERVICE_FAIL:
    case c.CREATE_SERVICE_FAIL: {
      const { status, data: resp } = action.response;
      return status === 400 ? resp || {} : state;
    }
    case c.EDIT_SERVICE_SUCCESS:
    case c.CREATE_SERVICE_SUCCESS:
      return {};
    default:
      return state;
  }
}

export default combineReducers({
  data,
  ids,
  id,
  choices,
  validationErrors,
});
