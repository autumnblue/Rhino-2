import {request, plugins} from 'popsicle';
import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';

const BASE_URL = process.env.API_URL || 'http://api.djavan.local/v1/';

function buildHeaders() {
  const token = cookie.load('token');
  return {
    //token,
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'application/json',
    // 'client-version': 'WEB',
  };
}

//see https://www.npmjs.com/package/popsicle
function prefix (url) {
    return function (self, next) {
        self.url = url + self.url;
        return next();
    }
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function httpPost(url, data) {
  return request({
    method: 'post',
    headers: buildHeaders(),
    url: url,
    body: data,
  })
  .use(prefix(BASE_URL))
  .use(plugins.parse('json'))
  .then(checkStatus);
}

export function httpGet(url) {
  return request({
    method: 'get',
    headers: buildHeaders(),
    url: url,
  })
  .use(prefix(BASE_URL))
  .use(plugins.parse('json'))
  .then(checkStatus);
}

export function httpPut(url, data) {
  return request({
    method: 'put',
    headers: buildHeaders(),
    url: url,
    body: data,
  })
  .use(prefix(BASE_URL))
  .use(plugins.parse('json'))
  .then(checkStatus);
}

export function httpDelete(url, data = {}) {
  return request({
    method: 'delete',
    headers: buildHeaders(),
    url,
    data,
  })
  .use(prefix(BASE_URL))
  .use(plugins.parse('json'))
  .then(checkStatus);
}

export function isClient() {
  return typeof window !== 'undefined' && window.document;
}

function refreshToken() {
  httpGet('user/refresh_token')
  .use(plugins.parse('json'))
  .then((response) => {
    cookie.save('token', response.body.result, { path: '/' });
  })
  .catch((err) => {
    console.log(err);
  });
}

export function checkToken(token) {
  const decoded = jwtDecode(token);
  const tokenExpiresTimestamp = decoded.exp * 1000;
  const currentTimestamp = new Date().getTime();
  const difference = tokenExpiresTimestamp - currentTimestamp;
  if (difference <= 1800) {
    refreshToken();
  }
}
