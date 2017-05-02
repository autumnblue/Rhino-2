import { push } from 'react-router-redux';
import cookie from 'react-cookie';
import merge from 'lodash/merge';
import _ from 'lodash';
import { httpPost, httpGet } from '../utils';
import { handleInternalErrors, logger } from '../utils/handleInternalErrors';
import Constants from '../constants';

const Actions = {
  setPassword: (password) => ({ type: Constants.SET_PASSWORD, password }),
  setToken: (token, provider) => ({ type: Constants.SET_SOCIAL_TOKEN, token, provider }),
  setCode: (code, provider) => ({ type: Constants.SET_LINKEDIN_CODE, code, provider }),
  resetSession: () => ({ type: Constants.SESSION_RESET }),
  setLoginMethod: (method) => ({ type: Constants.LOGIN_METHOD, method }),
  setErrorMessage: (errors) =>
    ((dispatch) =>
      _.map(errors, (error, key) => dispatch({ type: Constants.APP_ERROR_MESSAGE, error, key }))
    ),

  userLoginRequest: (data) =>
    ((dispatch) =>
      (httpPost('token/', data)
      .then((response) => {
        if (!response.data.success) {
          dispatch({
            type: Constants.LOGIN_FAILURE,
            error: handleInternalErrors(response.data),
          });
        } else {
          cookie.save('token', response.data.result.token, { path: '/' });
          dispatch(Actions.setLoginMethod('email'));
          dispatch(Actions.currentUser());
          const role = response.data.result.role;
          if (role === 'DRIVER') {
            dispatch(push('/driver'));
          } else if (role === 'COMPANY_ADMIN') {
            dispatch(push('/company'));
          }
        }
      })
      .catch((error) => {
        logger(error);
      })
    )
  ),

  // updatePassword: (data) =>
  //   ((dispatch) =>
  //     (httpPost('/user/update_password', data)
  //     .then((response) => {
  //       if (!response.data.success) {
  //         dispatch({
  //           type: Constants.UPDATE_PASSWORD_FAILURE,
  //           error: handleInternalErrors(response.data),
  //         });
  //       } else {
  //         dispatch({
  //           type: Constants.UPDATE_PASSWORD,
  //           message: 'Password updated successfully',
  //         });
  //         setTimeout(() => {
  //           dispatch(push('/login'));
  //         }, 4000);
  //       }
  //     })
  //     .catch((error) =>
  //       dispatch({
  //         type: Constants.UPDATE_PASSWORD_FAILURE,
  //         error: error.data.message,
  //       })
  //     )
  //   )
  // ),

  // currentUser: () =>
  //   ((dispatch) =>
  //     (httpGet('/user')
  //     .catch((error) =>
  //       logger(error)
  //     )
  //     .then((response) => {
  //       if (!response.data.success) {
  //         dispatch({
  //           type: Constants.CURRENT_USER_FAILURE,
  //           error: handleInternalErrors(response.data),
  //         });
  //       } else {
  //         cookie.save('role', response.data.result.role, { path: '/' });
  //         dispatch({
  //           type: Constants.CURRENT_USER,
  //           currentUser: response.data.result.profile,
  //         });
  //       }
  //     })
  //   )
  // ),

  // updateUserProfile: (data) =>
  //   ((dispatch) =>
  //     (httpPost('/user', data)
  //       .catch((error) =>
  //         logger(error)
  //       )
  //       .then((response) => {
  //         if (!response.data.success) {
  //           logger(response);
  //         } else {
  //           dispatch({
  //             type: Constants.CLEAR_USER_FIELD_TO_BE_UPDATED,
  //           });
  //           dispatch(Actions.currentUser());
  //         }
  //       })
  //     )
  // ),


};

export default Actions;
