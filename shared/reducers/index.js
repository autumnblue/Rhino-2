import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import error from './error';
// import test from './test';
import session from './session';
import login from './login';
import assessments from './assessments';
import clients from './clients';
import clientitems from './clientitems';

const reducers = combineReducers({
  routing: routerReducer,
  error,
  session,
  login,
  assessments,
  clients,
  clientitems,
});


export default reducers;
