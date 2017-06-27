/* export const jobsLoad = (car, workflow = [], paid = [], page = 1) => ({
    types: [c.JOBS_LOAD, c.JOBS_LOAD_SUCCESS, c.JOBS_LOAD_FAIL],
    api: ({ get }) => get('/jobs', {
        params: {
          sort: [],
          filter: {
            'name.contains': 'foo'
          }
        }
    }),
}); */



import { push } from 'react-router-redux';
import apiCrud from '../helpers/apiCrud';

export const COMBINE_RELATIONSHIPS = 'djavan/COMBINE_RELATIONSHIPS';

export default function apiMiddleware() {
    return ({ dispatch, getState }) => next => async (action) => {
        const { api, types, ...rest } = action;

        if (!api) {
            return next(action);
        }

        const [REQUEST, SUCCESS, FAILURE] = types;

        next({ ...rest, type: REQUEST });

        try {
          const response = await api(apiCrud);

          if(response.status !== 400) {
            return next({ ...rest, response, type: FAILURE });
          }

          next({ response: response.data, type: COMBINE_RELATIONSHIPS });

          return next({ ...rest, response, type: SUCCESS });
        } catch(error) {
          return next({ ...rest, error, type: FAILURE });
        }






        /*const actionPromise = promise(api);
        actionPromise.then(
            (result) => {
                if ((result || {}).status === 'error') {
                    return next({ ...rest, error: result, type: FAILURE });
                }

                if (!result.included) {
                    return next({ ...rest, result, type: SUCCESS });
                }

                const { data, normalizedResult } = receiveApiResponse(result, rest, `${REQUEST}_COMBINE_RELATIONSHIPS`, next);

                return next({ ...rest, data, result: normalizedResult, type: SUCCESS });
            },
            (err) => {
                const { error, statusCode } = err;
                // eslint-disable-next-line no-console
                console.error('PROMISE ACTION ERROR:', err);

                // TODO Move to middleware separate
                if (statusCode === 401) {
                    _unauthorizedToLogin(dispatch);
                } else
                if (statusCode === 404) {
                    _redirectToNotFoundPage(dispatch);
                }
                if (typeof action.catch === 'function') {
                    action.catch(dispatch, error);
                }

                return next({ ...rest, error, type: FAILURE });
            }
        )
        .then(
            (successAction) => {
                if (typeof successAction.success === 'function' && !successAction.error) {
                    return successAction.success(dispatch, successAction.result || {});
                }

                return successAction;
            },
            (error) => {
                // eslint-disable-next-line no-console
                console.error('PROMISE ACTION ERROR:', error);
                if (typeof action.catch === 'function') {
                    return action.catch(dispatch, error);
                }

                return error;
            }
        )
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('MIDDLEWARE ERROR:', error);
            next({ ...rest, error, type: FAILURE });
        });

        return actionPromise;*/
    };
}
