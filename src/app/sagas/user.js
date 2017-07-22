import { call, put, take } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';

import { setJWTToken } from '../helpers/auth';
import * as userAPI from '../helpers/API/user';

import { duckRequest, duckSuccess, duckFailed } from '../ducks';

function resetPasswordAPI(params) {
  return userAPI.resetPassword(params);
}

function forgotPasswordAPI(params) {
  return userAPI.forgotPassword(params);
}

function updatePasswordAPI(params) {
  return userAPI.updatePassword(params);
}
function updateEmailAPI(params) {
  return userAPI.updateEmail(params);
}
function signupAPI(params) {
  return userAPI.signup(params);
}
function verifyAPI(params) {
  return userAPI.verifyEmail(params);
}
function resendVerificationLinkAPI() {
  return userAPI.resendVerificationLink();
}


// reset password yield call
export function* resetPassword(params) {
  try {
    const res = yield call(resetPasswordAPI, params);

    if (res.status === 'ok') {
      yield put(duckSuccess('RESET_PASSWORD_SUCCESS', params));
    } else {
      toastr.error('Reset Password Failed', res.message);
      yield put(duckFailed('RESET_PASSWORD_FAILED', res.message));
    }
  } catch (err) {
    const { message } = err;

    toastr.error('API Reset Password Failed', message);
    yield put(duckFailed('RESET_PASSWORD_FAILED', err));
  }
}
export function* resetPasswordRequest() {
  while (true) {
    const action = yield take('RESET_PASSWORD_REQUEST');

    yield call(resetPassword, action.payload);
  }
}

export function* redirectAfterResetPassword() {
  while (true) {
    yield take('RESET_PASSWORD_SUCCESS');

    toastr.success('Reset Password Successful', 'You can now login');

    yield put(push('/login'));
  }
}

// forgot password yield call
export function* forgotPassword(params) {
  try {
    const res = yield call(forgotPasswordAPI, params);

    if (res.status === 'ok') {
      yield put(duckSuccess('FORGOT_PASSWORD_SUCCESS', { ...res, params }));
    } else {
      toastr.error('Password Recovery', res.message);
      yield put(duckFailed('FORGOT_PASSWORD_FAILED', res.message));
    }
  } catch (err) {
    const { message } = err;

    toastr.error('API Forgot Password Failed', message);
    yield put(duckFailed('FORGOT_PASSWORD_FAILED', err));
  }
}
export function* forgotPasswordRequest() {
  while (true) {
    const action = yield take('FORGOT_PASSWORD_REQUEST');

    yield call(forgotPassword, action.payload);
  }
}
export function* redirectAfterForgotPasswordSuccess() {
  while (true) {
    const response = yield take('FORGOT_PASSWORD_SUCCESS');

    toastr.success('Password Recovery', response.payload.message);

    yield put(push('/'));
  }
}

// update password yield call
export function* updatePassword(params) {
  try {
    const res = yield call(updatePasswordAPI, params);

    if (res.status === 'ok') {
      yield put(duckSuccess(params));
      yield put(duckSuccess('UPDATE_PASSWORD_SUCCESS', params));
    } else {
      yield put(duckFailed('UPDATE_PASSWORD_FAILED', res.message));
    }
  } catch (err) {
    yield put(duckFailed('UPDATE_PASSWORD_FAILED', err.message));
  }
}

export function* updatePasswordRequest() {
  while (true) {
    const action = yield take('UPDATE_PASSWORD_REQUEST');

    yield call(updatePassword, action.payload);
  }
}

export function* redirectAfterUpdatePassword() {
  while (true) {
    yield take('UPDATE_PASSWORD_SUCCESS');
    toastr.success('Update Successful', 'Your password has been changed.');

    yield put(push('/profile_settings'));
  }
}

export function* notifyAfterUpdatePasswordFailed() {
  while (true) {
    const action = yield take('UPDATE_PASSWORD_FAILED');
    const { error } = action.payload;

    toastr.error('Update Failed', error);
  }
}

// update email yield call
export function* updateEmail(params) {
  try {
    const res = yield call(updateEmailAPI, params);

    const fields = {
      ...res,
      ...params,
    };

    if (res.status === 'ok') {
      toastr.success('Update Successful', 'Email has been changed. Please check your mailbox and verify email address to turn on account.');
      yield put(duckSuccess('UPDATE_EMAIL_SUCCESS', fields));
    } else if (res.message.includes('others might use it')) {
      toastr.warning('Update Warning', 'Email address has been used in another account');
      yield put(duckFailed('UPDATE_EMAIL_FAILED', params));
    } else if (res.message.includes('resend verification email')) {
      toastr.warning('Update Successful', res.message);
      yield put(duckSuccess('UPDATE_EMAIL_SUCCESS', fields));
    } else {
      toastr.error('Update Failed', res.message);
      yield put(duckFailed('UPDATE_EMAIL_FAILED', res.message));
    }
  } catch (err) {
    const { message } = err;

    toastr.error('API Registration Failed', message);
    yield put(duckFailed('UPDATE_EMAIL_FAILED', err));
  }
}
export function* updateEmailRequest() {
  while (true) {
    const action = yield take('UPDATE_EMAIL_REQUEST');

    yield call(updateEmail, action.payload);
  }
}
export function* redirectAfterUpdateEmail() {
  while (true) {
    yield take('UPDATE_EMAIL_SUCCESS');

    yield put(duckRequest('LOGOUT_REQUEST'));
  }
}

// signup yield call
export function* signup(params) {
  try {
    const res = yield call(signupAPI, params);

    if (res.data) {
      jwtDecode(res.data.token);

      yield put(duckSuccess('CREATE_USER_SUCCESS', res.data));
    } else {
      yield put(duckFailed('CREATE_USER_FAILED', res));
    }
  } catch (err) {
    const { message } = err;

    toastr.error('API Registration Failed', message);
    yield put(duckFailed('CREATE_USER_FAILED', err));
  }
}
export function* signupRequest() {
  while (true) {
    const action = yield take('CREATE_USER_REQUEST');

    yield call(signup, action.payload);
  }
}
export function* redirectAfterSignup() {
  while (true) {
    const action = yield take('CREATE_USER_SUCCESS');
    const params = {
      ...action.payload,
      isLogin: true,
      isSignUp: true,
    };

    toastr.success('Welcome', 'You can now use AutoLikes');
    yield put(duckSuccess('LOGIN_SUCCESS', params));
  }
}
export function* notifyWhenSignupFailed() {
  while (true) {
    const action = yield take('CREATE_USER_FAILED');
    const { message } = action.payload.error;

    toastr.error('Registration Failed', message);
  }
}

// verify email
export function* verifyEmail(params) {
  try {
    const response = yield call(verifyAPI, params);
    const { status } = response;

    if (status === 'ok') {
      yield put(duckSuccess('VERIFY_EMAIL_SUCCESS', response));
    } else {
      yield put(duckFailed('VERIFY_EMAIL_FAILED', response));
    }
  } catch (err) {
    yield put(duckFailed('VERIFY_EMAIL_FAILED', err));
  }
}
export function* verifyEmailRequest() {
  while (true) {
    const action = yield take('VERIFY_EMAIL_REQUEST');

    yield call(verifyEmail, action.payload);
  }
}
export function* redirectAfterVerify() {
  while (true) {
    const action = yield take('VERIFY_EMAIL_SUCCESS');
    const { data, message } = action.payload;

    setJWTToken(data.token);

    toastr.success('Verify Email', message);
    yield put(push('/dashboard'));
  }
}
export function* notifyErrorVerify() {
  while (true) {
    const response = yield take('VERIFY_EMAIL_FAILED');
    const { message, status } = response.payload.error;

    toastr[status]('Verify Email', message);
    yield put(push('/dashboard'));
  }
}

export function* resendVerificationLink() {
  try {
    const response = yield call(resendVerificationLinkAPI);
    const { status, message } = response;

    if (status === 'ok') {
      yield put(duckSuccess('RESEND_EMAIL_VERIFICATION_SUCCESS', response));
    } else {
      yield put(duckFailed('RESEND_EMAIL_VERIFICATION_FAILED', message));
    }
  } catch (err) {
    const { message } = err;
    yield put(duckFailed('RESEND_EMAIL_VERIFICATION_FAILED', message));
  }
}
export function* resendVerificationLinkRequest() {
  while (true) {
    yield take('RESEND_EMAIL_VERIFICATION_REQUEST');

    yield call(resendVerificationLink);
  }
}

export function* notifyResendVerificationLinkFailed() {
  while (true) {
    const response = yield take('RESEND_EMAIL_VERIFICATION_FAILED');
    const { error } = response.payload;

    toastr.error('Resend Verification', error);
  }
}

export function* notifyResendVerificationLinkSuccess() {
  while (true) {
    const response = yield take('RESEND_EMAIL_VERIFICATION_SUCCESS');
    const { message } = response.payload;

    toastr.success('Resend Verification', message);
  }
}
