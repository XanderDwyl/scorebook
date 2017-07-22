import * as apiUtil from '../util';

/**
* Signup
* @param {string} email - email of user
* @param {string} password - password of user
*/
export function signup({ email, password }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/signup',
    body: {
      email,
      password,
    },
  });
}

/**
 * Login
 * @param {string} email - username of user
 * @param {string} password - password of user
 */
export function login({ email, password }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/login',
    body: {
      email,
      password,
    },
  });
}

/**
 * resendVerificationLink
 * resend email verification link
 */

export function resendVerificationLink() {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/resend/verification',
  });
}

/**
 * Verify Email
 * @param {string} email
 */
export function verifyEmail({ uuid, token }) {
  return apiUtil.fetchFromAPI({
    endpoint: `api/v1/verify/${uuid}/${token}`,
  });
}

/**
 * Update Email
 * @param {string} email - username of user
 */
export function updateEmail({ email }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/settings/email',
    body: {
      email,
    },
  });
}

/**
 * Forgot Password
 * @param {String} email - account email
 */
export function forgotPassword({ email }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/forgetpw',
    body: {
      email,
    },
  });
}

/**
 * Reset Password
 * @param {String} uuid - account uuid
 * @param {String} newpassword - account new password
 * @param {String} token - account token
 */
export function resetPassword({ uuid, new_password, token }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/resetpw',
    body: {
      uuid,
      new_password,
      token,
    },
  });
}

/**
 * Update Change Password
 * @param {string} Password - password of user
 */
export function updatePassword({ currentPassword, newPassword }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/settings/password',
    body: {
      current_password: currentPassword,
      new_password: newPassword,
    },
  });
}
