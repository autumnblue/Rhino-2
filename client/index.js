import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Router from 'react-router/es/Router';
import browserHistory from 'react-router/es/browserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './configureStore'; // Configure Redux store
import Routes from './Routes'; // Import routes

const initialState = {};
const store = configureStore(browserHistory, initialState);
const history = syncHistoryWithStore(browserHistory, store);

if (false && process.env.NODE_ENV !== 'production') { // eslint-disable-line no-constant-condition
    const { whyDidYouUpdate } = require('why-did-you-update'); // eslint-disable-line global-require
    whyDidYouUpdate(React);
}



const rootEl = document.getElementById('react-view');


const renderApp = (routes) => (
    <AppContainer>
        <Provider store={store} key="provider">
            {routes}
        </Provider>
    </AppContainer>
);

ReactDOM.render(renderApp(<Routes history={history} />), rootEl);

if (module.hot) {
    module.hot.accept('./Routes', () => {
        const {default: Routes} = require('./Routes'); // eslint-disable-line global-require
        ReactDOM.render(renderApp(<Routes history={history} />), rootEl);
    });
}


/*import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import Routes from './Routes'
import { ConnectedRouter, push } from 'react-router-redux'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const store = configureStore(history);

const rootEl = document.getElementById('react-view');
const renderApp = (children) => (
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically * / }
    <ConnectedRouter history={history}>
      <div>
        {children}
      </div>
    </ConnectedRouter>
  </Provider>
);

/*

userLoginRequest: (data) =>
  ((dispatch) =>
    (httpPost('token/', data)
    .then((response) => {
      if (response.status == 200) {
        cookie.save('token', response.body.token, { path: '/' });
        // dispatch(Actions.setLoginMethod('email'));
        // dispatch(Actions.currentUser());
        // const role = response.data.result.role;
        // if (role === 'DRIVER') {
        //   dispatch(push('/driver'));
        // } else if (role === 'COMPANY_ADMIN') {
        //   dispatch(push('/company'));
        // }
        dispatch(push('/dashboard'));
      } else {
        dispatch({
          type: Constants.LOGIN_FAILURE,
          error: handleInternalErrors(response.data),
        });
      }
    })
    .catch((error) => {
      logger(error);
    })
  )
)

* /
ReactDOM.render(renderApp(<Routes />), rootEl);


if (module.hot) {
    module.hot.accept('./Routes', async () => {
        const { default: Routes } = await import('./Routes');
        ReactDOM.render(renderApp(<Routes />), rootEl);
    });
}
*/
