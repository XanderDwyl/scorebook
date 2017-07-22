import * as apiUtil from '../util';

/**
 * createBlockedTags
 * @param {string} tagName - tag name for instagram
 * @param {int} igId - insgtagram user id
 * add Blocked tags ot ig account
 */
export function createBlockedTags(tagName, igId) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/blockedtag/create',
    body: {
      blocked_tagname: tagName,
      instagram_id: igId,
    },
  });
}

/**
 * destroyBlockedTags
 * @param {int} tagId
 * @param {int} igId
 * remove Blocked tags from ig account
 */
export function destroyBlockedTags(tagId, igId) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/blockedtag/destroy',
    body: {
      blocked_tag_id: tagId,
      instagram_id: igId,
    },
  });
}
