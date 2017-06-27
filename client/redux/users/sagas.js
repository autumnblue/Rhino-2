import { fork, all, take } from 'redux-saga/effects';
import cookie from 'react-cookie';

import isTokenActual from 'client/helpers/isTokenActual';
import * as c from './constants';
import { load, requestLogin, refreshToken } from './actions';

function* refreshTokenSuccess() {
  while(true) {
    const { response } = yield take(c.REFRESH_TOKEN_SUCCESS);

    console.log(response.status)

    /*const token = cookie.load('token');

    if(token) {
      dispatch(refreshToken(token))
    } else {
      dispatch(requestLogin());
    }


    console.log(token);*/
  }
}

export default function* createSaga() {
  yield all([
    fork(refreshTokenSuccess)
  ])
}
