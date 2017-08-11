import { all, fork, call, takeLatest, select, put, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { formValueSelector } from 'redux-form';
import { pickBy, pick, isEmpty, omit } from 'lodash';
import { push } from 'react-router-redux';
import qs from 'qs';

import { simpleObjectDiff } from 'src/helpers';
import { loadSingleServiceOrder } from 'src/redux/serviceOrders/actions';

import * as c from './constants';
import { createServiceGroup, editServiceGroup, deleteServiceGroup } from './actions';
import { getSpecifiedServiceGroup } from './selectors';

function* deleteServiceGroupTrigger() {
  while (true) {
    const { id } = yield take(c.DELETE_SERVICE_GROUP_TRIGGER);

    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure want to delete the service group')) {
      yield put(deleteServiceGroup(id));
    }
  }
}

function* editServiceGroupFieldChange() {
  while (true) {
    const { id, path } = yield take(c.EDIT_SERVICE_GROUP_FIELD_CHANGE);
    const data = yield select(
      formValueSelector('editServiceOrderForm'),
      path,
    );

    const serviceGroup = yield select(
      getSpecifiedServiceGroup,
      id,
    );

    const diff = simpleObjectDiff(serviceGroup, omit(data, ['service_instances']));

    if (!isEmpty(diff)) {
      yield put(editServiceGroup(id, {
        commit: true,
        ...diff,
      }));
    }
  }
}

function* deleteServiceGroupSuccess() {
  while(true) {
    const { id } = yield take(c.DELETE_SERVICE_GROUP_SUCCESS);
    const { service_order_id } = yield select(getSpecifiedServiceGroup, id);

    yield put(loadSingleServiceOrder(service_order_id));
  }
}

function* createServiceGroupSuccess() {
  while(true) {
    const { response } = yield take(c.CREATE_SERVICE_GROUP_SUCCESS);
    const { id } = response.data.service_group;
    const { service_order_id } = yield select(getSpecifiedServiceGroup, id);

    yield put(loadSingleServiceOrder(service_order_id));
  }
}

export default function* createSaga() {
  yield all([
    fork(deleteServiceGroupTrigger),
    fork(editServiceGroupFieldChange),
    fork(deleteServiceGroupSuccess),
    fork(createServiceGroupSuccess)
  ]);
}
