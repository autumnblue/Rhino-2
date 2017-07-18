import { fork, all, take, select, put } from 'redux-saga/effects';
import cookie from 'react-cookie';
import { formValueSelector } from 'redux-form';
import { push } from 'react-router-redux';

import * as c from './constants';
import { login } from './actions';

function* submitLoginForm() {
  while (true) {
    yield take(c.SUBMIT_LOGIN_FORM);
    const { username, password } = yield select(
      formValueSelector('loginForm'),
      'username',
      'password',
    );

    yield put(login({ username, password }));
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
