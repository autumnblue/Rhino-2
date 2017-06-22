import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import MainLayout from './components/main';
import App from './containers/App';
import DjavanDashboard from './components/DjavanDashboard/DjavanDashboard';
import Assessments from './components/DjavanDashboard/Assessments';
import ClientAdd from './components/DjavanDashboard/Clients/Add';
import ClientEdit from './components/DjavanDashboard/Clients/Edit';
import ClientList from './components/DjavanDashboard/Clients/Lists';
import Entry from './containers/Entry';
import cookie from 'react-cookie';
import Login from './components/Login';
import Logout from './components/Logout';
import Services from './components/DjavanDashboard/Services';
import ServicesEdit from './components/DjavanDashboard/Services/Edit';
import SuperClientEdit from './components/DjavanDashboard/SuperClients/Edit';

import Actions from './actions/sessions';
import { isClient, checkToken } from './utils';

export default function configRoutes(store) {

  const ensureAuthenticated = (nextState, replace, cb) => {
    const { dispatch } = store;
    const { session } = store.getState();
    const { currentUser } = session;
    const token = cookie.load('token');

    if (isClient()) {
      if (!currentUser && token) {
        checkToken(token);
        dispatch(Actions.currentUser());
      } else if (!token) {
        replace('/login');
      }
    }

    cb();
  };

  const checkAuth = (nextState, replace, cb) => {
    const { dispatch } = store;
    const { sessions } = store.getState();
    const { currentUser } = sessions;

    if (isClient()) {
      if (!currentUser && cookie.load('token')) {
          replace('/dashboard');
      }
    }

    cb();
  };

  return (
    <Route path="/" component={MainLayout}>
      <Route component={Entry} >
        <Route path="login" component={Login} onEnter={checkAuth}/>
      </Route>
      {/*<Route component={App} onEnter={ensureAuthenticated}>*/}
      <Route component={App}>
        <IndexRedirect to="login" />
        <Route path="logout" component={Logout} />
        <Route path="dashboard" component={DjavanDashboard}>
          <IndexRedirect to="clients/list" />
          <Route path="clients/add" component={ClientAdd} />
          <Route path="clients/edit" component={ClientEdit} />
          <Route path="clients/edit/new" component={SuperClientEdit} />
          <Route path="clients/edit/:id" component={SuperClientEdit} />
          <Route path="clients/list" component={ClientList} />
          <Route path="assessments" component={Assessments} />
          <Route path="services" component={Services} />
          <Route path="services/edit/:id" component={ServicesEdit} />
          <Route path="services/add/" component={ServicesEdit} />
        </Route>
      </Route>
    </Route>
  );
}
