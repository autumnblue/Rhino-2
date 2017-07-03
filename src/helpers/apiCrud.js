import { omit } from 'lodash';
import cookie from 'react-cookie';

function serializeParams(params) {
  if (!params) {
    return '';
  }

  const query = [];

  for (const [key, value] of Object.entries(params)) {
    if (value && typeof value === 'object') {
      if (value instanceof Array) {
        for (const item of value) {
          query.push(`${key}[]=${item}`);
        }
      } else {
        for (const [objKey, objValue] of Object.entries(value)) {
          query.push(`${key}{${objKey}}=${objValue}`);
        }
      }
    } else {
      query.push(`${key}=${value}`);
    }
  }

  return `?${query.join('&')}`;
}

async function fetchResource(method, url, options = {}) {
  const { params, data, useToken = true } = options;
  const token = cookie.load('token');

  const reqOptions = {
    method,
    ...omit(['params', 'data']),
    headers: {
      ...options.headers,
      'Content-Type': 'application/json'
    },
  };

  if (useToken) {
    reqOptions.headers.Authorization = `JWT ${token}`;
  }

  if (data) {
    reqOptions.body = JSON.stringify(data);
  }

  const resp = await fetch(process.env.API_URL + url + serializeParams(params), reqOptions);

  let respData;

  try {
    // DELETE requests don't send response body
    respData = await resp.json();
  } catch (e) {
    respData = null;
  }

  return {
    data: respData,
    status: resp.status,
  };
}

export default {
  get: (url, options) => fetchResource('GET', url, options),
  post: (url, options) => fetchResource('POST', url, options),
  del: (url, options) => fetchResource('DELETE', url, options),
  put: (url, options) => fetchResource('PUT', url, options),
  patch: (url, options) => fetchResource('PATCH', url, options),
};
