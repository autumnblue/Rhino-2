import _ from 'lodash';
import Constants from '../constants';

export const initialState = {
  client: null,
  parents: null,
  issuers: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.CLIENTS_EDIT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case Constants.CLIENTS_EDIT_LOADED: {
      return {
        ...state,
        loading: false
      };
    }

    case Constants.CLIENTS_EDIT_SET: {
      let newData = {client: action.client};
      if (action.projectManagers) {
        newData.projectManagers = action.projectManagers;
      }
      return {
        ...state,
        ...newData
      };
    }

    case Constants.CLIENTS_EDIT_SET_ISSUERS: {
      return {
        ...state,
        issuers: action.issuers,
      };
    }

    case Constants.CLIENTS_EDIT_SET_PARENTS: {
      return {
        ...state,
        parents: action.parents,
      };
    }

    default:
      return state;
  }
}
