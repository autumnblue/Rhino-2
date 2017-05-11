import _ from 'lodash';
import Constants from '../constants';
import { loadingStatus } from '../constants/loadingStatus';

export const initialState = {
  error: null,

  client: null,
  departments: null,
  umbrella: null,
  clientStatus: loadingStatus.UNINITIALIZED,
  umbdepStatus: loadingStatus.UNINITIALIZED,

  clients: [],
  clientsStatus: loadingStatus.UNINITIALIZED,
  loadingMore: false,
  hasMore: true,
  page: 0,
  possibleUmbrellas: [],
  umbrellasStatus: loadingStatus.UNINITIALIZED,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case Constants.FETCH_CLIENTS: {

      //append index of state client id's
      //check for existance of action client id's if state client exists
      //if existance, replace item in state with action
      //return new state

      //const clientsArray =

      return {
        ...state,
        error: null,
        clients: action.clients,
        loadingMore: action.loadingMore,
        clientsStatus: loadingStatus.LOADED,
        hasMore: action.hasMore,
      };
    }

    case Constants.FETCH_CLIENTS_REQUEST: {
      return {
        ...state,
        clientsStatus: action.clientsStatus,
        loadingMore: action.loadingMore,
        page: action.page,
      };
    }

    case Constants.FETCH_CLIENTS_FAILURE: {
      return {
        ...state,
        error: action.error,
        clientsStatus: loadingStatus.FAILED,
      };
    }



    case Constants.FETCH_CLIENT: {
      // console.log("Client Action");
      // console.log(action.client);
      const indexClient = _.findIndex(state.clients, ['id', action.id]);
      const clientarray = state.clients;
      clientarray[indexClient] = action.client[0];
      // console.log(clientarray);
      return {
        ...state,
        error: null,
        clients: clientarray.map((client) => {return Object.assign({}, client )}),
      // }, clients: action.clients,
        //_.set(state.clients, 'clients[' + action.id + ']', action.client),
        clientStatus: loadingStatus.LOADED,
      };
    }

    case Constants.FETCH_CLIENT_REQUEST: {
      return {
        ...state,
        clientStatus: action.clientStatus,
      };
    }

    case Constants.FETCH_CLIENT_FAILURE: {
      return {
        ...state,
        error: action.error,
        clientStatus: loadingStatus.FAILED,
      };
    }

    case Constants.UPDATE_CLIENTS_LIST: {
      return {
        ...state,
        clients: action.clients,
      };
    }

    case Constants.REFRESH_CLIENTS_LIST: {
      return {
        ...state,
        clientsStatus: loadingStatus.UNINITIALIZED,
        clients: [],
        hasMore: true,
        page: 0,
        loadingMore: false,
      };
    }

    case Constants.FETCH_CLIENT_UMBRELLA: {
      return {
        ...state,
        umbrella: action.client.umbrella,
        departments: action.client.departments,
        umbdepStatus: loadingStatus.LOADED
      }
    }

    case Constants.FETCH_CLIENTS_POSSIBLE_UMBRELLAS: {

      return {
        ...state,
        error: null,
        possibleUmbrellas: state.possibleUmbrellas.concat(action.possibleUmbrellas),
        umbrellasStatus: loadingStatus.LOADED,
      };
    }

    case Constants.FETCH_CLIENTS_POSSIBLE_UMBRELLAS_REQUEST: {
      return {
        ...state,
        umbrellasStatus: action.umbrellasStatus,
      };
    }

    case Constants.FETCH_CLIENTS_POSSIBLE_UMBRELLAS_FAILURE: {
      return {
        ...state,
        error: action.error,
        umbrellasStatus: loadingStatus.FAILED,
      };
    }

    case Constants.UPDATE_POSSIBLE_UMBRELLAS: {
      // console.log("Client Action");
      // console.log(action.department);
      const indexClient = _.findIndex(state.possibleUmbrellas, ['id', action.id]);
      const umbrellaarray = state.possibleUmbrellas;
      umbrellaarray[indexClient] = action.umbrella[0];
      // console.log(departmentarray);
      return {
        ...state,
        error: null,
        possibleUmbrellas: umbrellaarray.map((umbrella) => {return Object.assign({}, umbrella )}),
        // }, clients: action.clients,
        //_.set(state.clients, 'clients[' + action.id + ']', action.client),
        umbrellasStatus: loadingStatus.LOADED,
      };
    }

    case Constants.VIEW_CLIENT: {
      return {
        ...state,
        client: action.client,
        clientStatus: loadingStatus.LOADED,
      };
    }


    case Constants.CLEAR_CLIENT_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
}
