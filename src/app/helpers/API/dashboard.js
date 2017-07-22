import * as apiUtil from '../util';

/**
 * Dashboard
 * to get accounts data
 */
export function dashboard() {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/dashboard',
  });
}

/**
 * request search user
 * @param {string} username - Instagram username
 * to add Instagram User account to Autolikes account.
 */
export function requestSearchUser({ username }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/search/users',
    body: {
      username,
    },
  });
}

/**
 * request search tag
 * @param {string} tag_name - Instagram tag name
 * to add Instagram User account to Autolikes account.
 */
export function requestSearchTag({ tagName }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/search/tags',
    body: {
      tag_name: tagName,
    },
  });
}

/**
 * destroy liked location
 * @param {string} location_id - Instagram search location id
 * @param {string} instagram_id - Instagram user id
 * to add Instagram User account to Autolikes account.
 */
export function destroyLikedLocations({ locationId, instagramId }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/likelocations/destroy',
    body: {
      location_id: locationId,
      instagram_id: instagramId,
    },
  });
}

/**
 * createInstagram
 * @param {string} location_id - Instagram search location id
 * @param {string} location_name - Instagram search location name
 * @param {string} instagram_id - Instagram user id
 * to add Instagram User account to Autolikes account.
 */
export function createSearchLocations({
  location_id,
  location_name,
  instagram_id,
}) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/likelocations/create',
    body: {
      location_id,
      location_name,
      instagram_id,
    },
  });
}

/**
 * createInstagram
 * @param {string} location - Instagram search location
 * to add Instagram User account to Autolikes account.
 */
export function requestSearchLocations(location) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/search/locations',
    body: {
      location,
    },
  });
}

/**
 * createInstagram
 * @param {string} igUsername - Instagram Useraname
 * @param {string} igPassword - Instagram Password
 * to add Instagram User account to Autolikes account.
 */
export function createInstagram(igUsername, igPassword) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/create',
    body: {
      username: igUsername,
      password: igPassword,
    },
  });
}

/**
 * Speed Settings
 * @param {int64} instagran_id - Instagram Card ID
 * the rest is the speed settings
 */

export function setSpeedSettings({
  instagram_id,
  speed,
  like_filter_media_type,
  like_filter_media_age,
  like_filter_user_relation,
  like_filter_max_comments_count,
  like_filter_min_comments_count,
  like_filter_max_followings_count,
  like_filter_min_followings_count,
  like_filter_max_followers_count,
  like_filter_min_followers_count,
  like_filter_max_likes_count,
  like_filter_min_likes_count,
}) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/settings/update',
    body: {
      instagram_id: Number(instagram_id),
      speed,
      like_filter_media_type,
      like_filter_media_age,
      like_filter_user_relation,
      like_filter_max_comments_count: Number(like_filter_max_comments_count),
      like_filter_min_comments_count: Number(like_filter_min_comments_count),
      like_filter_max_followings_count: Number(
        like_filter_max_followings_count,
      ),
      like_filter_min_followings_count: Number(
        like_filter_min_followings_count,
      ),
      like_filter_max_followers_count: Number(like_filter_max_followers_count),
      like_filter_min_followers_count: Number(like_filter_min_followers_count),
      like_filter_max_likes_count: Number(like_filter_max_likes_count),
      like_filter_min_likes_count: Number(like_filter_min_likes_count),
    },
  });
}

/**
 * destroyInstagram
 * @param {string} igUsername - Instagram Useraname
 * to remove Instagram accounts from Autolikes account
 */
export function destroyInstagram(igUsername) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/destroy',
    body: {
      igUsername,
    },
  });
}

/**
 * getUserInfo
 * @param {id} igId - Instagram user id
 * to get specific user's insgtagram info based on Id
 */
export function getUserInfo(igId) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/retrieve',
    body: {
      instagram_id: igId,
    },
  });
}

/**
 * toggleAutoLike
 * @param {id} igId - Instagram user id
 * @param {boolean} turn - turn on or off
 * toggle autolikes
 */
export function toggleAutoLike(status, igId) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/turn',
    body: {
      turn: status,
      instagram_id: igId,
    },
  });
}

/**
 * Delete Instagram Account
 * @param {BIGINT} instagramID - instagram account ID
 */
export function deleteInstagramAccount({ username }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/destroy',
    body: {
      username,
    },
  });
}

/**
 * requestInvitation
 * @param {*uuid} request id
 * request access to ig account
 */
export function requestInvitation(uuid) {
  return apiUtil.postToAPI({
    endpoint: `api/v1/request/invitation/${uuid}`,
  });
}

/**
 * requestGrant
 * @param {*token} request id
 * @param {*igToken} ig id
 * request access to ig account
 */
export function requestGrant({ token, igToken }) {
  return apiUtil.postToAPI({
    endpoint: `api/v1/request/grant/${token}/${igToken}`,
  });
}

/**
 * checkpoint
 * @param {string} username - Instagram Useraname
 * @param {string} code - Instagram Authentication Code
 */
export function checkpoint({ username, code }) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/instagram/checkpoint',
    body: {
      username,
      code,
    },
  });
}
