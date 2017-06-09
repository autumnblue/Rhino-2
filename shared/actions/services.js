import { push, replace } from 'react-router-redux';
import cookie from 'react-cookie';
import { httpDelete, httpGet, httpPatch, httpPost, httpPut } from '../utils';
import { handleInternalErrors, logger } from '../utils/handleInternalErrors';
import Constants from '../constants';
import { loadingStatus } from '../constants/loadingStatus';
import ActionsEdit from './serviceedit';

const Actions = {
  fetchServices: () =>
    ((dispatch) => {
      dispatch({type: Constants.SERVICES_LOADING});

      httpGet('services')
        .then((response) => {
          if (response.body) {
            dispatch({
              type: Constants.SERVICES_LOADED,
              services: response.body.services,
            });
          } else {
            dispatch(Actions.handleError(error.response));
          }
        })
        .catch((error) => {
          dispatch(Actions.handleError(error.response));
        });

    }),

  orderChanged: (id, value) =>
    ((dispatch) => {
      if (value <= 0) return;
      dispatch({
        type: Constants.SERVICES_ORDER_CHANGED,
        id: id,
        value: value
      });
      dispatch(ActionsEdit.saveServiceValue(id, 'default_sort_priority', value));
    }),

  handleError: (response) =>
    ((dispatch) => {
      if (response.status == 403) {
        cookie.remove('token', { path: '/' });
        dispatch(replace('/'));
      } else {
        return response;
      }
    })
};

export default Actions;
