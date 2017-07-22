import { all, fork, take } from 'redux-saga/effects';
import Noty from 'noty';
import nprogress from 'nprogress';

import * as c from './constants';

function* initialize() {
  while (true) {
    yield take(c.INITIALIZE);

    const loader = window.document.querySelector('.page-loader');

    if (loader) {
      loader.parentNode.removeChild(loader);
    }
  }
}

function* notySaga() {
  while (true) {
    const { options } = yield take(c.NOTY);

    new Noty({
      layout: 'bottomRight',
      timeout: 5000,
      ...options,
    }).show();
  }
}

function* beginGlobalLoad() {
  while (true) {
    yield take('@redux-conn/BEGIN_GLOBAL_LOAD');

    yield nprogress.start();
  }
}

function* endGlobalLoad() {
  while (true) {
    yield take('@redux-conn/END_GLOBAL_LOAD');

    yield nprogress.done();
  }
}

export default function* createSaga() {
  yield all([
    fork(initialize),
    fork(notySaga),
    fork(beginGlobalLoad),
    fork(endGlobalLoad),
  ]);
}
