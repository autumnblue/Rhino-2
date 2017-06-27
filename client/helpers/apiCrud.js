import { omit } from 'lodash';
import cookie from 'react-cookie';

function serializeParams() {
  return '';
}

async function fetchResource(method, url, options = {}) {
  const { params, data, useToken = true } = options;
  const token = cookie.load('token');

  const reqOptions = {
    method,
    ...omit(['params', 'data']),
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    }
  };

  if(useToken) {
    reqOptions.headers.Authorization = `JWT ${token}`;
  }

  if(data) {
    reqOptions.body = JSON.stringify(data);
  }

  const resp = await fetch(process.env.API_URL + url + serializeParams(params), reqOptions);

  return {
    data: await resp.json(),
    status: resp.status
  }
}

export default {
  get: (url, options) => fetchResource('get', url, options),
  post: (url, options) => fetchResource('post', url, options),
  del: (url, options) => fetchResource('delete', url, options),
  put: (url, options) => fetchResource('put', url, options)
}
