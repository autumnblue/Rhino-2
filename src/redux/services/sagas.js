import { all, fork, take, select, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { isEmpty, pick } from 'lodash';

import simpleObjectDiff from 'src/helpers/simpleObjectDiff';
import { getService } from './selectors';
import { editService, createService } from './actions';
import * as c from './constants';


function* editServiceFormChange() {
  while (true) {
    const { id } = yield take(c.EDIT_SERVICE_FORM_CHANGE);
    const state = yield select();
    const { values, registeredFields } = state.form.editServiceForm;
    const service = yield select(getService);

    const keys = Object.keys(registeredFields);
    const diff = simpleObjectDiff(pick(values, keys), service);

    if (!isEmpty(diff)) {
      yield put(editService(id, {
        commit: true,
        ...diff,
      }));
    }
  }
}

function* newServiceFormChange() {
  while (true) {
    yield take(c.NEW_SERVICE_FORM_CHANGE);
    const state = yield select();
    const { values } = state.form.newServiceForm;

    yield put(createService({
      commit: true,
      // tools: [],
      ...values,
    }));
  }
}

function* createServiceSuccess() {
  while (true) {
    const { response } = yield take(c.CREATE_SERVICE_SUCCESS);
    const { id } = response.data.tool;

    yield put(push(`/services/${id}`));
  }
}

export default function* createSaga() {
  yield all([
    fork(editServiceFormChange),
    fork(newServiceFormChange),
    fork(createServiceSuccess),
  ]);
}

