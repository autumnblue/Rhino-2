import { all, fork, take, select, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { isEmpty, pick } from 'lodash';

import simpleObjectDiff from 'src/helpers/simpleObjectDiff';

import { getService } from './selectors';
import { editService, createService, deleteService } from './actions';
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
      ...values,
    }));
  }
}

function* createServiceSuccess() {
  while (true) {
    const { response } = yield take(c.CREATE_SERVICE_SUCCESS);
    const { id } = response.data.service;

    yield put(push(`/services/${id}`));
  }
}

function* deleteServiceTrigger() {
  while (true) {
    const { id } = yield take(c.DELETE_SERVICE_TRIGGER);

    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure want to delete the service')) {
      yield put(deleteService(id));
    }
  }
}

function* deleteServiceSuccess() {
  while (true) {
    yield take(c.DELETE_SERVICE_SUCCESS);

    yield put(push('/services'));
  }
}

export default function* createSaga() {
  yield all([
    fork(editServiceFormChange),
    fork(newServiceFormChange),
    fork(createServiceSuccess),
    fork(deleteServiceTrigger),
    fork(deleteServiceSuccess),
  ]);
}
