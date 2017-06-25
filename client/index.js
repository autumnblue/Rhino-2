import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'

import Routes from './Routes'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers' // Or wherever you keep your reducers


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

const rootEl = document.getElementById('react-view');
const renderApp = (children) => (
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        {children}
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(renderApp(<Routes />), rootEl);


if (module.hot) {
    module.hot.accept('./Routes', async () => {
        const { default: Routes } = await import('./Routes');
        ReactDOM.render(renderApp(<Routes />), rootEl);
    });
}
