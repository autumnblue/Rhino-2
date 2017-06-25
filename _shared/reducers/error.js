import Constants from '../constants';

const initialState = {
  message: null,
  show: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.UNKNOWN_ERROR:
      return {
        ...state,
        message: action.error,
      };

    case Constants.ERROR_RESPONSE:
      return {
        ...state,
        message: action.message,
        show: true
      };

    case Constants.ERROR_DISMISS:
      return {
        ...state,
        message: '',
        show: false
      };

    default:
      return state;
  }
}
