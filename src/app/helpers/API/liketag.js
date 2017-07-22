import * as apiUtil from '../util';

/**
 * createLikedTags
 * @param {string} tagName - tag name for instagram
 * @param {int} igId - insgtagram user id
 * add like tags ot ig account
 */
export function createLikedTags(tagName, igId) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/liketags/create',
    body: {
      tagname: tagName,
      instagram_id: igId,
    },
  });
}

/**
 * destroyLikedTags
 * @param {int} tagId
 * @param {int} igId
 * remove liked tags from ig account
 */
export function destroyLikedTags(tagId, igId) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/liketags/destroy',
    body: {
      tag_id: tagId,
      instagram_id: igId,
    },
  });
}
