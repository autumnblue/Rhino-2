import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import error from './error';
// import test from './test';
import session from './session';
import assessments from './assessments';

const reducers = combineReducers({
  routing: routerReducer,
  error,
  session,
  assessments,
});


export default reducers;
