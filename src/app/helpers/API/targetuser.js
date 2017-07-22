import * as apiUtil from '../util';

/**
 * Create Target User
 * @param {int64} instagram_id - instagram id
 * @param {int64} target_username - target username
 */
export function createTargetUser({ instagram_id, target_username }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/targeting/create',
    body: {
      instagram_id: Number(instagram_id),
      target_username,
    },
  });
}


/**
 * Block Instagram User
 * @param {int64} instagram_id - instagram id
 * @param {String} target_username - instagram username
 */
export function destroyTargetUser({ instagram_id, target_user_id }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/targeting/destroy',
    body: {
      instagram_id: Number(instagram_id),
      target_user_id: Number(target_user_id),
    },
  });
}
