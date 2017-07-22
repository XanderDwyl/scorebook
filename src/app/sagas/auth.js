import { toastr } from 'react-redux-toastr';
import { call, put, take } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { duckRequest, duckSuccess, duckFailed } from '../ducks';

import * as userAPI from '../helpers/API/user';

function loginAPI(params) {
  return userAPI.login(params);
}

export function* login(params) {
  try {
    const res = yield call(loginAPI, params);
    const resData = {
      ...res.data,
      ...params,    // redirect_url, locale, email, profile_img,
    };

    if (res.data) {
      yield put(duckSuccess('LOGIN_SUCCESS', resData));
    } else {
      toastr.error('Login Failed!', res.message);

      yield put(duckFailed('LOGIN_FAILED', res.message));
    }
  } catch (err) {
    toastr.error('API Login Failed!', 'Internal error');

    yield put(duckFailed('LOGIN_FAILED', err));
  }
}
export function* loginRequest() {
  while (true) {
    const action = yield take('LOGIN_REQUEST');

    yield call(login, action.payload);
  }
}
export function* redirectAfterLoggedIn() {
  while (true) {
    const action = yield take('LOGIN_SUCCESS');
    const { locale, redirect_url, isLogin, isSignUp,
      profile_img, email_verified, email } = action.payload;

    /* eslint-disable camelcase */
    const profile = { email, email_verified, profile_img };
    let url = redirect_url || `/dashboard/?locale=${locale}`;
    if (!locale) {
      url = redirect_url || '/dashboard';
    }

    yield put(duckSuccess('SET_USER_PROFILE', profile));
    yield put(duckRequest('FETCH_ACCOUNT_REQUEST'));

    if (!isLogin) {
      toastr.success('Welcome!', 'Successfully logged in.');
    }

    if (isSignUp || !isLogin) { yield put(push(url)); }
  }
}

// logout action
export function* logout(payload) {
  try {
    yield put(duckSuccess('LOGOUT_SUCCESS', payload));
  } catch (e) {
    toastr.error('Logout Failed', e.message);
  }
}
export function* logoutRequest() {
  while (true) {
    const action = yield take('LOGOUT_REQUEST');

    yield call(logout, action.payload);
  }
}
export function* notifyAfterLogout() {
  while (true) {
    const action = yield take('LOGOUT_SUCCESS');

    if (action.payload && action.payload.notify) {
      toastr.success('LOGOUT', 'Successfully logged out!');
    }

    yield put(duckSuccess('CLEAR_ACCOUNT_STATE', action.payload));
  }
}
