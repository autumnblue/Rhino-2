import { all, fork, take, select, put } from 'redux-saga/effects';
import { isEmpty, pick } from 'lodash';

import simpleObjectDiff from 'src/helpers/simpleObjectDiff';
import { getService } from './selectors';
import { editService } from './actions';
import * as c from './constants';


function* editServiceFormChange() {
  while (true) {
    const { id } = yield take(c.EDIT_SERVICE_FORM_CHANGE);
    const state = yield select();
    const { values, registeredFields } = state.form.editServiceForm;
    const service = yield select(getService);

    // since we put entire client to reduxForm using initialValues
    // we need to extract only those properties which are rendered on the page
    const keys = Object.keys(registeredFields);
    const diff = simpleObjectDiff(pick(values, keys), service);

    if (!isEmpty(diff)) {
      yield put(editService(id, {
        commit: true,
        ...diff,
      }));
    }
  }
}

export default function* createSaga() {
  yield all([
    fork(editServiceFormChange),
  ]);
}
