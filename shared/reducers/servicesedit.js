import _ from 'lodash';
import Constants from '../constants';

export const initialState = {
  service: null,
  loading: false,
  dialogLeaveShow: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case Constants.SERVICES_EDIT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case Constants.SERVICES_EDIT_LOADED: {
      return {
        ...state,
        loading: false
      };
    }

    case Constants.SERVICES_EDIT_SET: {
      return {
        ...state,
        service: action.service
      };
    }

    case Constants.SERVICES_EDIT_SET_VALUE: {
      let service = state.service;
      if (service) {
        let changeData = {};
        changeData[action.name] = action.value;
        service = {...service, ...changeData};
        let newState = {
          ...state,
          service: service
        };
        return newState;
      }

      return state;
    }

    case Constants.SERVICES_EDIT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.reason
      };
    }

    case Constants.SERVICES_EDIT_DIALOG_LEAVE_SHOW: {
      return {
        ...state,
        dialogLeaveShow: action.dialogLeaveShow
      }
    }

    default:
      return state;
  }
}
