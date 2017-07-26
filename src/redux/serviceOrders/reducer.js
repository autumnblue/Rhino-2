import { combineReducers } from 'redux';
import { map } from 'lodash';

import { validationErrorsHelper, choicesHelper } from 'src/helpers/reducerHelpers';

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
    case c.LOAD_SERVICE_ORDERS_SUCCESS:
      return map(action.response.data.service_orders, 'id');
    default:
      return state;
  }
}

function id(state = initialState.id, action) {
  switch (action.type) {
    case c.LOAD_SINGLE_SERVICE_ORDER_SUCCESS:
      return action.response.data.service_order.id;
    default:
      return state;
  }
}

function validationErrors(state = initialState.validationErrors, action) {
  switch (action.type) {
    case c.EDIT_SERVICE_ORDER_FAIL:
    case c.CREATE_SERVICE_ORDER_FAIL:
      return validationErrorsHelper(state, action);
    case c.EDIT_SERVICE_ORDER_SUCCESS:
    case c.CREATE_SERVICE_ORDER_SUCCESS:
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
