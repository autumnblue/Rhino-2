import apiCrud from '../helpers/apiCrud';
import { logout } from '../redux/users/actions';

export const COMBINE_RELATIONSHIPS = 'djavan/COMBINE_RELATIONSHIPS';

export default function apiMiddleware() {
  return () => next => async (action) => {
    const { api, types, ...rest } = action;

    if (!api) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;

    next({ ...rest, type: REQUEST });

    try {
      const response = await api(apiCrud);

      // FORBIDDEN of UNAUTHORIZED
      if (response.status === 403 || response.status === 401) {
        next({ ...rest, response, type: FAILURE });
        return next(logout());
      }

      if (response.status < 200 || response.status > 299) {
        return next({ ...rest, response, type: FAILURE });
      }

      next({ response: response.data, type: COMBINE_RELATIONSHIPS });

      return next({ ...rest, response, type: SUCCESS });
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
      return next({ ...rest, error, type: FAILURE });
    }
  };
}
