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
    case c.LOAD_DOCUMENT_TEMPLATES_SUCCESS:
      return map(action.response.data.document_templates, 'id');
    default:
      return state;
  }
}

function id(state = initialState.id, action) {
  switch (action.type) {
    case c.LOAD_SINGLE_DOCUMENT_TEMPLATE_SUCCESS:
      return action.response.data.document_template.id;
    default:
      return state;
  }
}

function choices(state = initialState.choices, action) {
  switch (action.type) {
    case c.LOAD_DOCUMENT_TEMPLATE_CHOICES_SUCCESS:
      return mapValues(keyBy(action.response.data.category, '0'), '1');
    default:
      return state;
  }
}

function validationErrors(state = initialState.validationErrors, action) {
  switch (action.type) {
    case c.EDIT_DOCUMENT_TEMPLATE_FAIL:
    case c.CREATE_DOCUMENT_TEMPLATE_FAIL: {
      const { status, data: resp } = action.response;
      return status === 400 ? resp || {} : state;
    }
    case c.EDIT_DOCUMENT_TEMPLATE_SUCCESS:
    case c.CREATE_DOCUMENT_TEMPLATE_SUCCESS:
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
