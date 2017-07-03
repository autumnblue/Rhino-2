import Route from 'react-router/es/Route';
import Redirect from 'react-router/es/Redirect';
import Router from 'react-router/es/Router';
import IndexRoute from 'react-router/es/Router';
import applyRouterMiddleware from 'react-router/es/applyRouterMiddleware';
import { ReduxAsyncConnect } from 'redux-connect';
import { func } from 'prop-types';

import App from './containers/App';
import LoginPage from './containers/LoginPage';
import MainLayout from './containers/MainLayout';
import ClientListPage from './containers/ClientListPage';
import ClientEditPage from './containers/ClientEditPage';
import NewClientPage from './containers/NewClientPage';

function reduxAsyncConnect(props) {
  return (
    <ReduxAsyncConnect
      {...props}
      filter={item => !item.deferred}
    />
  );
}

const propTypes = {
  // history: func.isRequired,
};

const Routes = ({ history }) => (
  <Router
    render={reduxAsyncConnect}
    history={history}
  >
    <Redirect from="/" to="/clients" />
    <Route component={MainLayout}>
      <Route path="/" component={App}>
        <Route path="clients" component={ClientListPage} />
        <Route path="clients/new" component={NewClientPage} />
        <Route path="clients/:clientId" component={ClientEditPage} />
      </Route>
      <Route path="/login" component={LoginPage} />
    </Route>
  </Router>
);

Routes.propTypes = propTypes;

export default Routes;
