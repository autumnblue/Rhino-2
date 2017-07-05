import { routerReducer } from 'react-router-redux';
import reduceReducers from 'reduce-reducers';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import nprogress from 'nprogress';

import * as reducers from '../redux/reducers';

import { COMBINE_RELATIONSHIPS } from '../middlewares/apiMiddleware';
import { combineRelationships } from '../helpers/combineRelationships';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case COMBINE_RELATIONSHIPS:
      return combineRelationships(state, action.response);
    case '@redux-conn/BEGIN_GLOBAL_LOAD':
      nprogress.start();
      return state;
    case '@redux-conn/END_GLOBAL_LOAD':
      nprogress.done();
      return state;
    default:
      return state;
  }
};

export default function createReducer() {
  return reduceReducers(
    rootReducer,
    combineReducers({
      routing: routerReducer,
      form: formReducer,
      reduxAsyncConnect,
      ...reducers,
    }),
  );
}
