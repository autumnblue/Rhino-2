import Constants from '../constants';

const initialState = {
  passwordHint: null,
  // passwordEqualHint: null,
  emailHint: null,
  isValidEmail: false,
  isValidPassword: false,
  errors: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case Constants.LOGIN_EMAIL_HINT: {
    //   return {
    //     ...state,
    //     emailHint: 'Please enter a valid email address',
    //     isValidEmail: false,
    //   };
    // }
    // case Constants.LOGIN_PASSWORD_HINT: {
    //   return {
    //     ...state,
    //     passwordHint: 'Password should be at least 8 characters long',
    //     isValidPassword: false,
    //   };
    // }
    case Constants.LOGIN_VALID_EMAIL: {
      return {
        ...state,
        emailHint: null,
        isValidEmail: true,
      };
    }
    case Constants.LOGIN_VALID_PASSWORD: {
      return {
        ...state,
        passwordHint: null,
        isValidPassword: true,
      };
    }
    case Constants.LOGIN_EMAIL_PASSWORD_RESET:
      return initialState;
    case Constants.LOGIN_ERRORS: {
      return {
        ...state,
        errors: action.errors,
      };
    }

    default:
      return state;
  }
}
