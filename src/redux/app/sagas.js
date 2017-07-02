import { all, fork, take } from 'redux-saga/effects';
import * as c from './constants';

function* initialize() {
  while (true) {
    yield take(c.INITIALIZE);

    const loader = document.querySelector('.page-loader');

    if (loader) {
      loader.parentNode.removeChild(loader);
    }
  }
}

export default function* createSaga() {
  yield all([
    fork(initialize),
  ]);
}
