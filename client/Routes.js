import Route from 'react-router/es/Route';
import Redirect from 'react-router/es/Redirect';
import Router from 'react-router/es/Router';
import IndexRoute from 'react-router/es/IndexRoute';
import applyRouterMiddleware from 'react-router/es/applyRouterMiddleware';
import { ReduxAsyncConnect } from 'redux-connect';
import { useScroll } from 'react-router-scroll';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import MainLayout from './containers/MainLayout';

function reduxAsyncConnect(props) {
    return (
        <ReduxAsyncConnect
            {...props}
            filter={item => !item.deferred}
            render={applyRouterMiddleware(useScroll())}
        />
    );
}

export default ({ history }) => (
  <Router
    render={reduxAsyncConnect}
    history={history}
  >
  <Route path="/" component={MainLayout}>
      <IndexRoute component={App} />

      <Route path="login"  component={LoginPage}>
      </Route>
  </Route>
  </Router>

)
