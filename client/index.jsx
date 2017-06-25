/* eslint no-underscore-dangle: 0, react/jsx-filename-extension: 0, no-console: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { useScroll } from 'react-router-scroll';
import configureStore from '../shared/store';
import configRoutes from '../shared/routes';

const initialState = window.__INITIAL_STATE__;

const target = document.getElementById('react-view');
const store = configureStore(browserHistory, initialState);
const history = syncHistoryWithStore(browserHistory, store);

require('../static/styles/app.less');

const component = (
  <Router
    history={history}
    routes={configRoutes(store)}
    render={
      applyRouterMiddleware(
        useScroll((prevRouterProps, { location }) =>
        (prevRouterProps && location.pathname !== prevRouterProps.location.pathname))
      )
    }
  />
);

injectTapEventPlugin();

function render() {
  ReactDOM.render(
    <Provider store={store} key="provider">
      {component}
    </Provider>,
    target
  );
}
render();


if (__DEVTOOLS__ && !window.devToolsExtension) {
  const DevTools = require('../shared/containers/DevTools'); // eslint-disable-line

  injectTapEventPlugin();
  ReactDOM.render(
    <Provider store={store} key="provider">
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>,
    target
  );
}

if (module.hot) {
  module.hot.accept('../shared/routes', () => {
        require('../shared/routes'); // eslint-disable-line global-require
        render();
    });
}
