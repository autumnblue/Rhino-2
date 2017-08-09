import { combineReducers } from 'redux';
import { map } from 'lodash';

import { validationErrorsHelper } from 'src/helpers/reducerHelpers';

import * as c from './constants';

const initialState = {
  data: {},
  validationErrorsPerId: {},
};

function data(state = initialState.data) {
  return state;
}

function validationErrorsPerId(state = initialState.validationErrorsPerId, action) {
  switch (action.type) {
    case c.EDIT_SERVICE_INSTANCE_FAIL:
    case c.CREATE_SERVICE_INSTANCE_FAIL:
      return {
        ...state,
        [action.id]: validationErrorsHelper(state, action)
      }
    case c.EDIT_SERVICE_INSTANCE_SUCCESS:
    case c.CREATE_SERVICE_INSTANCE_SUCCESS:
      return {
        ...state,
        [action.id]: {}
      }
    default:
      return state;
  }
}

export default combineReducers({
  data,
  validationErrorsPerId,
});
