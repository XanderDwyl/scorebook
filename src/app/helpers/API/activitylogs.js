import * as apiUtil from '../util';

export function fetchLogs() {}

/**
 * fetchActivityLogs
 * @param {int} instagram_id
 * to get activity logs of specific IG account
 */
export function fetchActivityLogs({ instagram_id }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/logs',
    body: {
      instagram_id,
    },
  });
}
