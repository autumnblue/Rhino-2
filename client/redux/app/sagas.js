import { fork, all, take, put } from 'redux-saga/effects';
import cookie from 'react-cookie';

import isTokenActual from 'client/helpers/isTokenActual';
import * as c from './constants';
import { load } from './actions';

/*function* init() {
  while(true) {
    yield take(c.INIT);

    const token = cookie.load('token');
    console.log(token)
    if(token) {
      yield put(refreshToken(token));
    } else {
      yield put(requestLogin());
    }
  }
}*/

export default function* createSaga() {
  yield all([
    // (init)
  ])
}
