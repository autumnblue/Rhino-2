import cookie from 'react-cookie';
import { replace } from 'react-router-redux';
import Constants from '../constants';

const Actions = {
  response: (response) =>
    ((dispatch) => {
      if (response.status == 403) {
        cookie.remove('token', {path: '/'});
        return dispatch(replace('/'));
      }

      let message = '';
      if (_.isString(response.body)) {
        message = response.body;
      } else if (_.isObject(response.body)) {
        message =  _.map(response.body, (item, key) => (
          key + ' : ' + _.toString(item) + ' '
        ));
      } else {
        message = 'Unknown response';
      }

      dispatch({
        type: Constants.ERROR_RESPONSE,
        message: message
      });
    }),

  dismiss: () =>
    ((dispatch) => {
      dispatch({type: Constants.ERROR_DISMISS});
    }),
};

export default Actions;
