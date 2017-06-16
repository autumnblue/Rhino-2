import { push, replace } from 'react-router-redux';
import cookie from 'react-cookie';
import { httpDelete, httpGet, httpPatch, httpPost, httpPut } from '../utils';
import { handleInternalErrors, logger } from '../utils/handleInternalErrors';
import Constants from '../constants';
import { loadingStatus } from '../constants/loadingStatus';
import ActionsError from './error';

const Actions = {
  fetchServices: (filter) =>
    ((dispatch) => {
      dispatch({type: Constants.SERVICES_LOADING});

      httpGet(`services/?sort[]=default_sort_priority&per_page=1000&filter{name.icontains}=${filter}`)
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

  orderChanged: (id, value, filter) =>
    ((dispatch) => {
      if (value <= 0) return;
      dispatch({
        type: Constants.SERVICES_ORDER_CHANGED,
        id: id,
        value: value
      });

      dispatch({type: Constants.SERVICES_LOADING});

      let data = {};
      data['default_sort_priority'] = value;
      data['commit'] = true;
      //patching default_sort_priority and re-fetching services for reorder
      httpPatch(`services/${id}`, data)
        .then((response) => {
          if (response.body) {
            dispatch(Actions.fetchServices(filter));
          } else {
            dispatch(Actions.handleError(error.response));
          }
        })
        .catch((error) => {
          dispatch(Actions.handleError(error.response));
        });
    }),

  filterChanged: (filter) =>
    ((dispatch) => {
      dispatch({
        type: Constants.SERVICES_FILTER_CHANGED,
        filter: filter
      });
      dispatch(Actions.fetchServices(filter));
    }),

  handleError: (response) =>
    ((dispatch) => {
      dispatch({type: Constants.SERVICES_LOADED});
      dispatch(ActionsError.response(response));
    })
};

export default Actions;
