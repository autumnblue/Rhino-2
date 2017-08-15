import { all, fork, select, put, take } from 'redux-saga/effects';
import { formValueSelector } from 'redux-form';
import { isEmpty, omit } from 'lodash';

import { simpleObjectDiff } from 'src/helpers';
import { loadSingleServiceGroup } from 'src/redux/serviceGroups/actions';

import * as c from './constants';
import { editServiceInstance, deleteServiceInstance } from './actions';
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
    }
  }
}

function* updateAdjustmentSuccess() {
  while (true) {
    const { response, id } = yield take([
      c.CREATE_SERVICE_INSTANCE_SUCCESS,
      c.EDIT_SERVICE_INSTANCE_SUCCESS,
      c.DELETE_SERVICE_INSTANCE_SUCCESS,
    ]);

    const { service_group_id } = yield select(
      getSpecifiedServiceInstance,
      id || response.data.service_instance.id,
    );

    yield put(loadSingleServiceGroup(service_group_id));
  }
}

export default function* createSaga() {
  yield all([
    fork(deleteServiceInstanceTrigger),
    fork(editServiceInstanceFieldChange),
    fork(updateAdjustmentSuccess),
  ]);
}
