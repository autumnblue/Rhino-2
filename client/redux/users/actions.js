import * as c from './constants';

const endpoint = 'user';

export const setToken = token => ({
  type: c.SET_TOKEN,
  token,
});

export const refreshToken = (token) => ({
  types: [c.REFRESH_TOKEN, c.REFRESH_TOKEN_SUCCESS, c.REFRESH_TOKEN_FAIL],
  api: ({ post }) => post('token/refresh/', {
    data: { token },
    useToken: false,
  })
});
