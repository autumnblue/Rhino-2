import apiCrud from '../helpers/apiCrud';

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
