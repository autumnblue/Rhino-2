import _ from 'lodash';
import Constants from '../constants';
import { loadingStatus } from '../constants/loadingStatus';

export const initialState = {
  error: null,
  clients: [],
  clientsStatus: loadingStatus.UNINITIALIZED,
  loadingMore: false,
  hasMore: true,
  page: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case Constants.FETCH_CLIENTS: {
      return {
        ...state,
        error: null,
        clients: state.clients.concat(action.clients),
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

    default:
      return state;
  }
}
