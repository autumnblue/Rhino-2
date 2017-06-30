import { UserAuthWrapper } from 'redux-auth-wrapper';
import { compose } from 'recompose';
import { asyncConnect } from 'redux-connect';
import { push, replace } from 'react-router-redux';
import cookie from 'react-cookie';

import { refreshToken } from 'client/redux/users/actions';

const authHOC = UserAuthWrapper({
  authSelector: state => state.users,
  failureRedirectPath: '/login',
  redirectAction: push,
  wrapperDisplayName: 'UserIsAuthenticated',
  predicate: users => users.me,
});

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const { me } = getState().users;

    if (!me) {
      return dispatch(refreshToken(cookie.load('token')));
    }
  },
}]);

export default compose(
  reduxAsyncConnect,
  authHOC,
);
