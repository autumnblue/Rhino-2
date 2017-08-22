import { fork, all, take, select, put } from 'redux-saga/effects';
import cookie from 'react-cookie';
import { formValueSelector } from 'redux-form';
import { push } from 'react-router-redux';

import * as c from './constants';
import { login } from './actions';

function* listParamsChange() {
  // will cancel current running handleInput task
  yield takeLatest([
    c.LIST_FILTERS_CHANGE,
    c.PAGE_CHANGE,
  ], function* handle() {
    yield call(delay, 500);
    const params = yield select(
      formValueSelector('userListFilterForm'),
      'contains',
      'per_page',
      'sort',
    );
    const { users } = yield select();
    const { page } = users;

    if (page > 1) {
      params.page = page;
    }

    const query = qs.stringify(pickBy(params));

    yield put(push(`/clients/?${query}`));
  });
}

function* submitLoginForm() {
  while (true) {
    yield take(c.SUBMIT_LOGIN_FORM);
    const { email, password } = yield select(
      formValueSelector('loginForm'),
      'email',
      'password',
    );

    yield put(login({ email, password }));
  }
}

function setToken(response) {
  const { token } = response.data;

  cookie.save('token', token, { path: '/' });
}

function* loginSuccess() {
  while (true) {
    const { response } = yield take(c.LOGIN_SUCCESS);
    const { routing } = yield select();
    const { redirect } = routing.locationBeforeTransitions.query;

    yield setToken(response);
    yield put(push(redirect || '/'));
  }
}

function* tokenSuccess() {
  while (true) {
    const { response } = yield take(c.REFRESH_TOKEN_SUCCESS);

    yield setToken(response);
  }
}

function* logout() {
  while (true) {
    yield take(c.LOGOUT);

    yield cookie.remove('token', { path: '/' });
  }
}

export default function* createSaga() {
  yield all([
    fork(loginSuccess),
    fork(submitLoginForm),
    fork(tokenSuccess),
    fork(logout),
  ]);
}
