import * as apiUtil from '../util';

/**
 * Unblock Instagram User
 * @param {int64} instagram_id - instagram id
 * @param {int64} blocked_user_id - unblock user instagram id
 */
export function unBlockedInstagramUser({ instagram_id, blocked_user_id }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/blockeduser/destroy',
    body: {
      instagram_id: Number(instagram_id),
      blocked_user_id: Number(blocked_user_id),
    },
  });
}


/**
 * Block Instagram User
 * @param {int64} instagram_id - instagram id
 * @param {String} blocked_username - instagram username
 */
export function blockedInstagramUser({ instagram_id, blocked_username }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/blockeduser/create',
    body: {
      instagram_id: Number(instagram_id),
      blocked_username,
    },
  });
}
