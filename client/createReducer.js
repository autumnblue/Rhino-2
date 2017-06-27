import { routerReducer } from 'react-router-redux';
import reduceReducers from 'reduce-reducers';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import users from './redux/users';
import { COMBINE_RELATIONSHIPS } from 'middlewares/apiMiddleware';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case COMBINE_RELATIONSHIPS:
      return combineRelationships(state, action.response);
  }
}

export default function createReducer() {
  return reduceReducers(
    rootReducer,
    combineReducers({
        routing: routerReducer,
        reduxAsyncConnect,
        users,
        form: formReducer,
    })
  )
}
