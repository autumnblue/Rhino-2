import { all, fork, call, takeLatest, select, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { formValueSelector } from 'redux-form';
import { pickBy } from 'lodash';
import { push } from 'react-router-redux';
import qs from 'qs';

import * as c from './constants';

function* listParamsChange() {
  // will cancel current running handleInput task
  yield takeLatest(c.LIST_FILTERS_CHANGE, function* handle() {
    yield call(delay, 500);
    const contains = yield select(
      formValueSelector('toolListFilterForm'),
      'contains',
    );

    const query = qs.stringify(pickBy({ contains }));

    yield put(push(`/tools/?${query}`));
  });
}

export default function* createSaga() {
  yield all([
    fork(listParamsChange),
  ]);
}
