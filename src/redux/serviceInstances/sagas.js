import { all, fork, call, takeLatest, select, put, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { formValueSelector } from 'redux-form';
import { pickBy, pick, isEmpty, omit } from 'lodash';
import { push } from 'react-router-redux';
import qs from 'qs';

import { simpleObjectDiff } from 'src/helpers';
import { loadSingleServiceGroup } from 'src/redux/serviceGroups/actions'

import * as c from './constants';
import { createServiceInstance, editServiceInstance, deleteServiceInstance } from './actions';
import { getSpecifiedServiceInstance } from './selectors';

function* deleteServiceInstanceTrigger() {
  while (true) {
    const { id } = yield take(c.DELETE_SERVICE_INSTANCE_TRIGGER);

    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure want to delete the service instance')) {
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

    const diff = simpleObjectDiff(serviceInstance, omit(data, []));

    if (!isEmpty(diff)) {
      yield put.sync(editServiceInstance(id, {
        commit: true,
        ...diff,
      }));

      if(diff.custom_sort_priority) {
        // reload list
        yield put(loadSingleServiceGroup(serviceInstance.service_group_id));
      }
    }
  }
}

function* updateServiceGroup(serviceInstanceId) {
  const { service_group_id } = yield select(getSpecifiedServiceInstance, serviceInstanceId);

  yield put(loadSingleServiceGroup(service_group_id));
}

function* deleteServiceInstanceSuccess() {
  while(true) {
    const { id } = yield take(c.DELETE_SERVICE_INSTANCE_SUCCESS);
    yield* updateServiceGroup(id);
  }
}

function* createServiceInstanceSuccess() {
  while(true) {
    const { response } = yield take(c.CREATE_SERVICE_INSTANCE_SUCCESS);
    const { id } = response.data.service_instance;
    yield* updateServiceGroup(id);
  }
}

export default function* createSaga() {
  yield all([
    fork(deleteServiceInstanceTrigger),
    fork(editServiceInstanceFieldChange),
    fork(deleteServiceInstanceSuccess),
    fork(createServiceInstanceSuccess),
  ]);
}
