import _ from 'lodash';
import Constants from '../constants';
import { loadingStatus } from '../constants/loadingStatus';

export const initialState = {
  error: null,
  clientItem: [],
  clientItemStatus: loadingStatus.UNINITIALIZED,
  showMore: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //
    // case Constants.TOGGLE_EDIT_VIEW: {
    //   console.log(state);
    //   return {
    //     ...state,
    //     showMore: !state.showMore,
    //   };
    // }
    //
    case Constants.FETCH_CLIENTITEM_REQUEST: {
      return {
        ...state,
        clientItemStatus: action.clientItemStatus,
        loading: action.loading,
      };
    }

    case Constants.FETCH_CLIENTITEM_FAILURE: {
      return {
        ...state,
        error: action.error,
        clientItemStatus: loadingStatus.FAILED,
      };
    }
    //
    // case Constants.UPDATE_CLIENTS_LIST: {
    //   return {
    //     ...state,
    //     clients: action.clients,
    //   };
    // }
    //
    // case Constants.REFRESH_CLIENTS_LIST: {
    //   return {
    //     ...state,
    //     clientsStatus: loadingStatus.UNINITIALIZED,
    //     clients: [],
    //     hasMore: true,
    //     page: 0,
    //     loadingMore: false,
    //   };
    // }

    default:
      return state;
  }
}
