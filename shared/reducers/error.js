import Constants from '../constants';

const initialState = {
  message: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.UNKNOWN_ERROR:
      return {
        ...state,
        message: action.error,
      };

    default:
      return state;
  }
}
