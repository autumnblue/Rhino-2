import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import error from './error';
// import test from './test';
import sessions from './sessions';
import login from './login';
import assessments from './assessments';
import clients from './clients';
import clientitems from './clientitems';
import services from './services';
import servicesedit from './servicesedit';
import clientedit from './clientedit';

const reducers = combineReducers({
  routing: routerReducer,
  error,
  sessions,
  login,
  assessments,
  clients,
  clientitems,
  services,
  servicesedit,
  clientedit
});


export default reducers;
