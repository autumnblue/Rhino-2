import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import browserHistory from 'react-router/es/browserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './global-style';
import configureStore from './configureStore';
import Routes from './Routes';

const initialState = {};
const store = configureStore(browserHistory, initialState);
const history = syncHistoryWithStore(browserHistory, store);

if (true && process.env.NODE_ENV !== 'production') { // eslint-disable-line no-constant-condition
  const { whyDidYouUpdate } = require('why-did-you-update'); // eslint-disable-line global-require
  let createClass = React.createClass;
  Object.defineProperty(React, 'createClass', {
    set: (nextCreateClass) => {
      createClass = nextCreateClass;
    },
  });
  whyDidYouUpdate(React);
}

const rootEl = document.getElementById('react-view');

const renderApp = routes => (
  <AppContainer>
    <Provider store={store} key="provider">
      {routes}
    </Provider>
  </AppContainer>
);

injectTapEventPlugin();
ReactDOM.render(renderApp(<Routes history={history} />), rootEl);

if (module.hot) {
  module.hot.accept('./Routes', () => {
    // eslint-disable-next-line global-require, no-shadow
    const { default: Routes } = require('./Routes');
    injectTapEventPlugin();
    ReactDOM.render(renderApp(<Routes history={history} />), rootEl);
  });
}
