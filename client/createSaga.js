import { fork, all } from 'redux-saga/effects';
import appSagas from './redux/app/sagas';
import usersSagas from './redux/users/sagas'

export default function* createSaga() {
  yield all([
    fork(appSagas),
    fork(usersSagas),
  ])
}
