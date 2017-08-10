import { all, fork, call, takeLatest, select, put, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { formValueSelector } from 'redux-form';
import { pickBy, pick, isEmpty } from 'lodash';
import { push } from 'react-router-redux';
import qs from 'qs';

import simpleObjectDiff from 'src/helpers/simpleObjectDiff';

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

    const diff = simpleObjectDiff(data, serviceGroup);

    if (!isEmpty(diff)) {
      yield put(editServiceGroup(id, {
        commit: true,
        ...diff,
      }));
    }
  }
}

function* serviceGroupListChange() {
  while(true) {
    const { id } = yield take(c.DELETE_SERVICE_GROUP_SUCCESS);
    const { service_order } = yield select(getSpecifiedServiceGroup, id);

  }
}

export default function* createSaga() {
  yield all([
    fork(deleteServiceGroupTrigger),
    fork(editServiceGroupFieldChange),
    fork(serviceGroupListChange),
  ]);
}
