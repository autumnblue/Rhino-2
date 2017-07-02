import { all, fork, take, select, put } from 'redux-saga/effects';
import { isEmpty } from 'lodash';
import { formValueSelector } from 'redux-form';
import { push } from 'react-router-redux'
import { createClient, deleteClient } from './actions';

import * as c from './constants';

function* newClientFormChange() {
  while (true) {
    yield take(c.NEW_CLIENT_FORM_CHANGE);
    const state = yield select();
    const { values, syncErrors } = state.form.newClientForm;

    if(isEmpty(state.form.newClientForm.syncErrors)) {
      yield put(createClient({
        commit: true,
        ...values,
      }));
    }
  }
}

function* createClientSuccess() {
  while (true) {
    const { response } = yield take(c.CREATE_CLIENT_SUCCESS);
    const { id } = response.data.client;

    yield put(push(`/clients/${id}`));
  }
}

function* deleteClientTrigger() {
  while (true) {
    const { id } = yield take(c.DELETE_CLIENT_TRIGGER);

    if(confirm('Are you sure want to delete the client')) {
      yield put(deleteClient(id));
    }

  }
}

function* deleteClientSuccess() {
  while (true) {
    const { id } = yield take(c.DELETE_CLIENT_SUCCESS);

    yield put(push(`/clients`));
  }
}



export default function* createSaga() {
  yield all([
    fork(newClientFormChange),
    fork(createClientSuccess),
    fork(deleteClientTrigger),
    fork(deleteClientSuccess)
  ]);
}
