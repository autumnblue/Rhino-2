import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { sagaMiddleware } from 'redux-saga';
import createSagaMiddleware from 'redux-saga'

import createReducer from './createReducer' // Or wherever you keep your reducers
import createSaga from './createSaga';
import { INIT } from './redux/app/constants';
import apiMiddleware from './middlewares/apiMiddleware';

export default function configureStore(history, initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
        thunkMiddleware,
        apiMiddleware(),

        sagaMiddleware,
        routerMiddleware(history),
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
        window.devToolsExtension && __DEVTOOLS__ ? window.devToolsExtension() : f => f,
    ];

    const store = createStore(
        createReducer(),
        initialState,
        compose(...enhancers)
    );

    if (module.hot) {
        module.hot.accept('./createReducer', () => {
            store.replaceReducer(require('./createReducer')); // eslint-disable-line global-require
        });
    }

    sagaMiddleware.run(createSaga);

    store.dispatch({ type: INIT })

    return store;


  /*const router = routerMiddleware(history)

  return createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    applyMiddleware(router)
  )*/
}
