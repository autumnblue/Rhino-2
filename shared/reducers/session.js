import Constants from '../constants';

const initialState = {
  error: null,
  currentUser: null,
  email: null,
  password: null,
  token: null,
  code: null,
  message: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.CHECK_USER_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case Constants.SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case Constants.SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case Constants.CURRENT_USER: {
      return {
        ...state,
        currentUser: action.currentUser,
      };
    }
    case Constants.CURRENT_USER_FAILURE: {
      return {
        ...state,
        error: action.error,
      };
    }
    case Constants.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case Constants.RESET_PASSWORD:
    case Constants.UPDATE_PASSWORD:
      return {
        ...state,
        message: action.message,
      };
    case Constants.RESET_PASSWORD_FAILURE:
    case Constants.UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case Constants.SESSION_RESET:
      return initialState;

    default:
      return state;
  }
}
