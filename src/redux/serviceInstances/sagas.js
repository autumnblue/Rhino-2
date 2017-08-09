import { all, fork, call, takeLatest, select, put, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { formValueSelector } from 'redux-form';
import { pickBy, pick, isEmpty } from 'lodash';
import { push } from 'react-router-redux';
import qs from 'qs';

import simpleObjectDiff from 'src/helpers/simpleObjectDiff';

import * as c from './constants';
import { createServiceInstance, editServiceInstance, deleteServiceInstance } from './actions';
import { getSpecifiedServiceInstance } from './selectors';

function* deleteServiceInstanceTrigger() {
  while (true) {
    const { id } = yield take(c.DELETE_SERVICE_INSTANCE_TRIGGER);

    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure want to delete the service group')) {
      yield put(deleteServiceInstance(id));
    }
  }
}

function* editServiceInstanceFieldChange() {
  while (true) {
    const { id, path } = yield take(c.EDIT_SERVICE_INSTANCE_FIELD_CHANGE);
    const data = yield select(
      formValueSelector('editServiceOrderForm'),
      path,
    );

    const serviceInstance = yield select(
      getSpecifiedServiceInstance,
      id,
    );

    const diff = simpleObjectDiff(data, serviceInstance);

    if (!isEmpty(diff)) {
      yield put(editServiceInstance(id, {
        commit: true,
        ...diff,
      }));
    }
    /*const { values } = state.form.editServiceOrderForm;

    yield put(createServiceOrder({
      commit: true,
      ...values,
    }));*/
  }
}


export default function* createSaga() {
  yield all([
    fork(deleteServiceInstanceTrigger),
    fork(editServiceInstanceFieldChange),
  ]);
}
