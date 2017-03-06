import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import MainLayout from './components/main';
import App from './containers/App';
import DjavanDashboard from './components/DjavanDashboard/DjavanDashboard';
import Assessments from './components/DjavanDashboard/Assessments';
import Clients from './components/DjavanDashboard/Clients';
// import Entry from './containers/Entry';
// import cookie from 'react-cookie';

// import Login from './components/LoginSignUp/Login';
// import LoginSignUp from './components/LoginSignUp/Index/';
// import LoginSignUpEmail from './components/LoginSignUp/LoginSignUpEmail';
// import SignUpContinue from './components/LoginSignUp/SignUpContinue';
// import SignUp from './components/LoginSignUp/SignUp';
// import ForgotPassword from './components/LoginSignUp/ForgotPassword';
// import UpdatePassword from './components/LoginSignUp/UpdatePassword';

// import Dashboard from './components/Dashboard/Dashboard';

// import Actions from './actions/sessions';
// import { isClient, checkToken } from './utils';

export default function configRoutes(store) {
  // const ensureAuthenticated = (nextState, replace, cb) => {
  //   const { dispatch } = store;
  //   const { session } = store.getState();
  //   const { currentUser } = session;
  //   const token = cookie.load('token');
  //
  //   if (isClient()) {
  //     if (!currentUser && token) {
  //       checkToken(token);
  //       dispatch(Actions.currentUser());
  //     } else if (!token) {
  //       replace('/login');
  //     }
  //   }
  //
  //   cb();
  // };

//   const checkAuth = (nextState, replace, cb) => {
//     const { dispatch } = store;
//     const { session } = store.getState();
//     const { currentUser } = session;
// //    const xxxx = cookie.load('xxx');
//
//     if (isClient()) {
//       if (!currentUser && cookie.load('token')) {
//         if (role === '111111') {
//           replace('/11111');
//         } else if (role === '22222222') {
//           replace('/2222222222');
//         }
//       }
//     }
//
//     cb();
//   };

  return (
    <Route path="/" component={MainLayout}>
      {/*<Route component={Entry}>*/}
        {/*<Route path="login" component={Login} onEnter={checkAuth} />*/}
        {/*<Route path="forgot-password" component={ForgotPassword} onEnter={checkAuth} />*/}
        {/*<Route path="reset-password" component={UpdatePassword} onEnter={checkAuth} />*/}
      {/*</Route>*/}
      {/*<Route component={App} onEnter={ensureAuthenticated}>*/}
      <Route component={App} >
      {/*<IndexRedirect to="login" />*/}
        <Route path="dashboard" component={DjavanDashboard}>
          <IndexRedirect to="clients" />
          <Route path="clients" component={Clients} />
          <Route path="assessments" component={Assessments} />
          {/*<Route path="details/:id" component={Details} />*/}
        </Route>
      </Route>
    </Route>
  );
}
