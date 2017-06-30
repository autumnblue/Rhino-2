import Route from 'react-router/es/Route';
import Redirect from 'react-router/es/Redirect';
import Router from 'react-router/es/Router';
import applyRouterMiddleware from 'react-router/es/applyRouterMiddleware';
import { ReduxAsyncConnect } from 'redux-connect';
import { useScroll } from 'react-router-scroll';
import { func } from 'prop-types';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import MainLayout from './containers/MainLayout';
import ClientListPage from './containers/ClientListPage';
import ClientEditPage from './containers/ClientEditPage'

function reduxAsyncConnect(props) {
  return (
    <ReduxAsyncConnect
      {...props}
      filter={item => !item.deferred}
      render={applyRouterMiddleware(useScroll())}
    />
  );
}

const propTypes = {
  //history: func.isRequired,
};

const Routes = ({ history }) => (
  <Router
    render={reduxAsyncConnect}
    history={history}
  >
    <Redirect from="/" to="/clients/list" />
    <Route path="/" component={MainLayout}>
      <Route component={App}>
        <Route path="/clients/list" component={ClientListPage} />
        <Route path="/clients/edit/:clientId" component={ClientEditPage} />
      </Route>
      <Route path="login" component={LoginPage} />
    </Route>
  </Router>
);

Routes.propTypes = propTypes;

export default Routes;
