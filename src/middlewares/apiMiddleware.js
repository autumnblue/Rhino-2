import apiCrud from '../helpers/apiCrud';
import { noty } from '../redux/app/actions';
import { logout } from '../redux/users/actions';

export const COMBINE_RELATIONSHIPS = 'djavan/COMBINE_RELATIONSHIPS';

function showError(response, next) {
  if (response.data) {
    const { detail, non_field_errors } = response.data;

    if (detail || non_field_errors) {
      next(noty({
        type: 'error',
        text: detail || non_field_errors.join('\n'),
      }));
    }
  }
}

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

      // UNAUTHORIZED
      if (response.status === 401) {
        showError(response, next);
        next({ ...rest, response, type: FAILURE });

        return next(logout());
      }

      if (response.status < 200 || response.status > 299) {
        showError(response, next);

        return next({ ...rest, response, type: FAILURE });
      }

      next({ response: response.data, type: COMBINE_RELATIONSHIPS });

      return next({ ...rest, response, type: SUCCESS });
    } catch (error) {
      next(noty({
        type: 'error',
        text: error.message,
      }));

      console.error(error); // eslint-disable-line no-console

      return next({ ...rest, response: {}, error, type: FAILURE });
    }
  };
}
