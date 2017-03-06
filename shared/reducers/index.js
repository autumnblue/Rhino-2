import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import error from './error';
// import test from './test';
import session from './session';
import assessments from './assessments';
import clients from './clients';

const reducers = combineReducers({
  routing: routerReducer,
  error,
  // session,
  assessments,
  clients,
});


export default reducers;
