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
    case c.LOAD_ISSUERS_SUCCESS:
      return map(action.response.data.issuers, 'id');
    default:
      return state;
  }
}

function id(state = initialState.id, action) {
  switch (action.type) {
    case c.LOAD_SINGLE_ISSUER_SUCCESS:
      return action.response.data.issuer.id;
    default:
      return state;
  }
}

function validationErrors(state = initialState.validationErrors, action) {
  switch (action.type) {
    case c.EDIT_ISSUER_FAIL:
    case c.CREATE_ISSUER_FAIL:
      return validationErrorsHelper(state, action);
    case c.EDIT_ISSUER_SUCCESS:
    case c.CREATE_ISSUER_SUCCESS:
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
