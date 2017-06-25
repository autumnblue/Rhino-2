import { push, replace } from 'react-router-redux';
import cookie from 'react-cookie';
import _ from 'lodash';
import { httpDelete, httpGet, httpPatch, httpPost, httpPut } from '../utils';
import Constants from '../constants';
import ActionsError from './error';

const Actions = {
  fetchService: (id) =>
    ((dispatch) => {
      if (!id) {
        dispatch({
          type: Constants.SERVICES_EDIT_SET,
          service: {tools: null},
        });
        dispatch({type: Constants.SERVICES_EDIT_LOADED});

        return;
      }

      dispatch({type: Constants.SERVICES_EDIT_LOADING});

      httpGet(`services/${id}`)
        .then((response) => {
          if (response.body) {
            dispatch({
              type: Constants.SERVICES_EDIT_LOADED,
            });
            dispatch({
              type: Constants.SERVICES_EDIT_SET,
              service: response.body.service,
            });
          } else {
            dispatch(Actions.handleError(response));
          }
        })
        .catch((error) => {
          dispatch(Actions.handleError(error.response));
        });

    }),

  createService: (service) =>
    ((dispatch) => {
      dispatch({type: Constants.SERVICES_EDIT_LOADING});
        service.commit = true;

        httpPost('services', service)
          .then((response) => {
            if (response.body.service.id) {
              dispatch({type: Constants.SERVICES_EDIT_LOADED});
              dispatch({
                type: Constants.SERVICES_EDIT_SET_VALUE,
                name: 'id',
                value: response.body.service.id
              });
              dispatch({
                type: Constants.SERVICES_EDIT_SET_VALUE,
                name: 'default_sort_priority',
                value: response.body.service.default_sort_priority
              });
            } else {
              dispatch(Actions.handleError(response));
            }
          })
          .catch((error) => {
            dispatch(Actions.handleError(error.response));
          });
    }),



  setService: (service) =>
    ((dispatch) => {
      dispatch({type: Constants.SERVICES_EDIT_SET, service: service});
    }),

  saveServiceValue: (id, name, value) =>
    ((dispatch) => {
      dispatch({type: Constants.SERVICES_EDIT_LOADING});

      let data = {};
      data[name] = value;
      data['commit'] = true;
      httpPatch(`services/${id}`, data)
        .then((response) => {
          if (response.body) {
            dispatch({type: Constants.SERVICES_EDIT_LOADED});
            dispatch({
              type: Constants.SERVICES_EDIT_SET_VALUE,
              name: name,
              value: response.body.service[name]
            });
          } else {
            dispatch(Actions.handleError(error.response));
          }
        })
        .catch((error) => {
          dispatch(Actions.handleError(error.response));
        });


    }),

  uploadAsset: (file, service) =>
    ((dispatch) => {
      dispatch({type: Constants.SERVICES_EDIT_LOADING});

      const uploadAsset = (file) => {
        return httpPost('assets', {
          file: file,
          commit: true
        }, {
          'Content-Type': 'multipart/form-data'
        }).then(function (res) {
          dispatch(Actions.saveServiceValue(service.id, 'feature_image', res.body.asset.id));
          dispatch({
            type: Constants.SERVICES_EDIT_SET_VALUE,
            name: 'feature_image',
            value: res.body.asset
          });
        }).catch((error) => {
          dispatch(Actions.handleError(error.response));
        });
      }

      if (service.feature_image) {
        //if there was image, deleting previous asset before load new
        httpDelete(`assets/${service.feature_image.id}`)
          .then((res) => {
            uploadAsset(file);
          }).catch((error) => {
            dispatch(Actions.handleError(error.response));
          });
      } else {
        uploadAsset(file);
      }


    }),

  deleteService: (service) =>
    ((dispatch) => {
      dispatch({type: Constants.SERVICES_EDIT_LOADING});

      const deleteService = () => {
        return httpDelete(`services/${service.id}`, {commit: true})
          .then((res) => {
            dispatch(push('/dashboard/services/'));
          })
      }
      let promise;
      if (service.feature_image) {
        promise = httpDelete(`assets/${service.feature_image.id}`)
        .then((res) => {
          return deleteService();
        });
      } else {
        promise = deleteService();
      }

      promise
        .catch((error) => {
          dispatch(Actions.handleError(error.response));
        });
    }),

  dialogLeaveOpen: () =>
    ((dispatch) => {
      dispatch({type: Constants.SERVICES_EDIT_DIALOG_LEAVE_SHOW, dialogLeaveShow: true});
    }),

  dialogLeaveClose: () =>
    ((dispatch) => {
      dispatch({type: Constants.SERVICES_EDIT_DIALOG_LEAVE_SHOW, dialogLeaveShow: false});
    }),

  handleError: (response) =>
    ((dispatch) => {
      dispatch({type: Constants.SERVICES_EDIT_LOADED});
      dispatch(ActionsError.response(response));
    }),
};

export default Actions;
