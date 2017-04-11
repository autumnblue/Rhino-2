/* eslint import/no-extraneous-dependencies: 0, global-require: 0, no-underscore-dangle: 0 */

import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import isEqual from 'is-equal';
import watch from 'redux-watch';
import promiseMiddleware from './lib/promiseMiddleware';
import errorMiddleware from './lib/errorMiddleware';
import rootReducer from './reducers';
import { logger as errorHandler } from './utils/handleInternalErrors';
import AssessmentActions from './actions/assessments';

// const logger = process.env.NODE_ENV === 'development' && Extensions.logger();

const logger = true;

function createStoreWithReducer(history, data, reducer) {
  const reduxRouterMiddleware = routerMiddleware(history);

  const middleware = [
    errorMiddleware(errorHandler),
    thunk,
    promiseMiddleware,
    reduxRouterMiddleware,
  ];

  let finalCreateStore;
  if (process.env.NODE_ENV === 'development' && __CLIENT__ && __DEVTOOLS__) {
    const { persistState } = require('redux-devtools');
    const DevTools = require('../shared/containers/DevTools');

    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.default.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  const store = finalCreateStore(reducer, data);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept(rootReducer, () => {
      store.replaceReducer(rootReducer);
    });
  }

  store.subscribe(() => {
    // console.log("TEST" + ++count);
    console.log(store.getState());
    //store.dispatch(AssessmentActions.mockAssessments(1, true));
  });

  return store;
}

export default function configureStore(history, data) {
  return createStoreWithReducer(history, data, rootReducer);
}
