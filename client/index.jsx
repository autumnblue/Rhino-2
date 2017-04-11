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
ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  target
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger
  if (!target || !target.firstChild || !target.firstChild.attributes || !target.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

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
