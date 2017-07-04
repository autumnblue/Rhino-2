import { UserAuthWrapper } from 'redux-auth-wrapper';
import { compose, withPropsOnChange, pure } from 'recompose';
import { asyncConnect } from 'redux-connect';
import { push, replace } from 'react-router-redux';
import cookie from 'react-cookie';
import { connect } from 'react-redux';

import { refreshToken } from 'src/redux/users/actions';
import { initialize } from 'src/redux/app/actions';

import pageMountEnhancer from 'src/enhancers/pageMountEnhancer';

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
    const token = cookie.load('token');

    if (!me && token) {
      return dispatch(refreshToken(token));
    }
  },
}]);

const reduxConnect = connect(
  null,
  {
    onInitialize: initialize,
  },
);

const propsEnhancer = withPropsOnChange(['location'], ({ location }) => ({
  x: console.log(location.pathname.split('/')[1]),
  activeCategory: location.pathname.split('/')[1]
}))

export default compose(
  reduxAsyncConnect,
  authHOC,
  reduxConnect,
  propsEnhancer,
  pageMountEnhancer,
  pure,
);
