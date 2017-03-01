import Constants from '../constants';
import { handleInternalErrors } from '../utils/handleInternalErrors';

export default function errorMiddleware(errorHandler) {
  return function middlewareStore(store) {
    return function middlewareNext(next) {
      return function middlewareAction(action) {
        try {
          return next(action);
        } catch (error) {
          errorHandler(error, store);
          store.dispatch({
            type: Constants.UNKNOWN_ERROR,
            error: 'An unknown error occurred. Please try again later.',
          });
          return error;
        }
      };
    };
  };
}
