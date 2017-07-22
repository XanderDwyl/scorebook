import jwtDecode from 'jwt-decode';

const TOKEN_KEY = 'autolikes_jwt_token';

function isTokenValid(token) {
  try {
    jwtDecode(token);
    return true;
  } catch (e) {
    return false;
  }
}

export function getJWTTokenFromLocalStorage() {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    return isTokenValid(token);
  }
  return false;
}

export function getJWTToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setJWTToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function delJWTToken() {
  localStorage.removeItem(TOKEN_KEY);
}
