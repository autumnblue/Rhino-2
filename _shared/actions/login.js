import Constants from '../constants';

const Actions = {
  // emailGiveHint: () => ({ type: Constants.LOGIN_EMAIL_HINT }),
  // passwordGiveHint: () => ({ type: Constants.LOGIN_PASSWORD_HINT }),
  validEmail: () => ({ type: Constants.LOGIN_VALID_EMAIL }),
  validPassword: () => ({ type: Constants.LOGIN_VALID_PASSWORD }),
  // passwordNotEqual: () => ({ type: Constants.LOGIN_PASSWORD_NOT_EQUAL }),
  // passwordEqual: () => ({ type: Constants.LOGIN_EQUAL_PASSWORD }),
  // emailPasswordReset: () => ({ type: Constants.LOGIN_EMAIL_PASSWORD_RESET }),
  errors: (errors) => ({ type: Constants.LOGIN_ERRORS, errors }),
};

export default Actions;
