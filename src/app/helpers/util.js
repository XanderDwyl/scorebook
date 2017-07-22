import 'whatwg-fetch';
import { getJWTTokenFromLocalStorage, getJWTToken } from './auth';
import config from '../constants/config';


const queryParams = params => Object.keys(params)
          .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
          .join('&');

const headers = () => {
  const headConfig = new Headers();
  headConfig.append('Access-Control-Allow-Origin', '*');
  headConfig.append('Accept', 'application/json');
  headConfig.append('Content-Type', 'application/json');

  let token = getJWTTokenFromLocalStorage();
  if (token) {
    token = getJWTToken();
    headConfig.append('Authorization', `Bearer ${token}`);
  }

  return headConfig;
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function fetchFromAPI({ endpoint, params }) {
  let url = [config.apiUrl, endpoint].join('/');
  if (params) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(params);
  }

  return fetch(url, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: headers(),
  })
  .then(checkStatus)
  .then(response => response.json());
}

export function postToAPI({ endpoint, body }) {
  const url = [config.apiUrl, endpoint].join('/');

  const headconfig = {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: headers(),
    body: JSON.stringify(body),
  };

  return fetch(url, headconfig)
  .then(checkStatus)
  .then(response => response.json());
}

export function putToAPI({ endpoint, body }) {
  const url = [config.apiUrl, endpoint].join('/');

  return fetch(url, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: headers(),
    body: JSON.stringify(body),
  });
}

export function deleteFromAPI({ endpoint }) {
  const url = [config.apiUrl, endpoint].join('/');

  return fetch(url, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
    headers: headers(),
  });
}

export function createConstants(...constants) {
  return constants.reduce((accumulator, constant) => {
    accumulator[constant] = constant; // eslint-disable-line no-param-reassign
    return accumulator;
  }, {});
}

export function _bind(strinOrAray, scope) { // eslint-disable-line no-underscore-dangle
  let array = strinOrAray;
  if (!Array.isArray(strinOrAray)) {
    array = strinOrAray.split(' ');
  }

  return array.map(item =>                 // eslint-disable-line no-return-assign
    scope[item] = scope[item].bind(scope), // eslint-disable-line  no-param-reassign
  );
}
