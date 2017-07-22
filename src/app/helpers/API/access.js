import * as apiUtil from '../util';

/**
 * Get all user who has access in specific account
 * @param {int64} instagram_id - instagram id
 */
export function fetchAccountUserAccess({ instagram_id }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/access',
    body: {
      instagram_id,
    },
  });
}
/**
 * Create Account User Access
 * @param {int64} instagram_id - instagram id
 * @param {String} email - autolik.es user's email
 */
export function createAccountUserAccess({ instagram_id, email }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/access/create',
    body: {
      instagram_id,
      email,
    },
  });
}
/**
 * Destroy Account User Access
 * @param {int64} instagram_id - instagram id
 * @param {String} email - autolik.es user's email
 */
export function destroyAccountUserAccess({ instagram_id, email }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/access/destroy',
    body: {
      instagram_id,
      email,
    },
  });
}
