import { all, fork, call, takeLatest, select, put, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { formValueSelector } from 'redux-form';
import { pickBy, pick, isEmpty, omit } from 'lodash';
import { push } from 'react-router-redux';
import qs from 'qs';

import { simpleObjectDiff } from 'src/helpers';
import { loadSingleServiceGroup } from 'src/redux/serviceGroups/actions'

import * as c from './constants';
import { createAdjustment, editAdjustment, deleteAdjustment } from './actions';
import { getSpecifiedAdjustment } from './selectors';

function* deleteAdjustmentTrigger() {
  while (true) {
    const { id } = yield take(c.DELETE_ADJUSTMENT_TRIGGER);

    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure want to delete the adjustment')) {
      yield put(deleteAdjustment(id));
    }
  }
}

function* editAdjustmentFieldChange() {
  while (true) {
    const { id, data, resolve } = yield take(c.EDIT_ADJUSTMENT_FIELD_CHANGE);

    const adjustment = yield select(
      getSpecifiedAdjustment,
      id,
    );

    const diff = simpleObjectDiff(adjustment, omit(data, []));

    if (!isEmpty(diff)) {
      const apiAction = yield put.sync(editAdjustment(id, {
        commit: true,
        ...diff,
      }));

      resolve(apiAction);

      if(diff.custom_sort_priority) {
        // reload list
        yield put(loadSingleServiceGroup(adjustment.service_group_id));
      }
    }
  }
}

function* deleteAdjustmentSuccess() {
  while(true) {
    const { id } = yield take(c.DELETE_ADJUSTMENT_SUCCESS);
    const { service_group } = yield select(getSpecifiedAdjustment, id);

    yield put(loadSingleServiceGroup(service_group));
  }
}

export default function* createSaga() {
  yield all([
    fork(deleteAdjustmentTrigger),
    fork(editAdjustmentFieldChange),
    fork(deleteAdjustmentSuccess),
  ]);
}
