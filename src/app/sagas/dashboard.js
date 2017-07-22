
import { call, put, take } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { push } from 'react-router-redux';

import { duckRequest, duckSuccess, duckFailed } from '../ducks';

import * as accessAPI from '../helpers/API/access';
import * as paymentAPI from '../helpers/API/payment';
import * as dashboardAPI from '../helpers/API/dashboard';
import * as targetUserAPI from '../helpers/API/targetuser';
import * as blockedUserAPI from '../helpers/API/blockeduser';
import * as liketagAPI from '../helpers/API/liketag';
import * as blocktagAPI from '../helpers/API/blocktags';
import * as activityLogsAPI from '../helpers/API/activitylogs';

function searchUserAPI(params) {
  return dashboardAPI.requestSearchUser(params);
}

function searchTagAPI(params) {
  return dashboardAPI.requestSearchTag(params);
}

function destryLikedLocationAPI(params) {
  return dashboardAPI.destroyLikedLocations(params);
}

function createSearchLocationAPI(params) {
  return dashboardAPI.createSearchLocations(params);
}

function requestSearchLocationAPI(params) {
  return dashboardAPI.requestSearchLocations(params.location);
}

function speedSettingsInstagramUserAPI(params) {
  return dashboardAPI.setSpeedSettings(params);
}
function createTargetUserAPI(params) {
  return targetUserAPI.createTargetUser(params);
}
function destroyTargetUserAPI(params) {
  return targetUserAPI.destroyTargetUser(params);
}
function unBlockedInstagramUserAPI(params) {
  return blockedUserAPI.unBlockedInstagramUser(params);
}
function blockedInstagramUserAPI(params) {
  return blockedUserAPI.blockedInstagramUser(params);
}
function deleteAccountAPI(params) {
  return dashboardAPI.deleteInstagramAccount(params);
}
function createAccountAPI(params) {
  return dashboardAPI.createInstagram(params.igusername, params.igpassword);
}
export function fetchDashboardAPI() {
  return dashboardAPI.dashboard();
}
function getAccountAPI(params) {
  return dashboardAPI.getUserInfo(params.igId);
}
function getActivityLogsAPI(params) {
  return activityLogsAPI.fetchActivityLogs(params);
}
function toggleAutoLikeAPI(params) {
  return dashboardAPI.toggleAutoLike(params.status, params.igId);
}
function createLikedTagsAPI(params) {
  return liketagAPI.createLikedTags(params.tagName, params.igId);
}
function destroyLikedTagsAPI(params) {
  return liketagAPI.destroyLikedTags(params.tagId, params.igId);
}
function createBlockTagsAPI(params) {
  return blocktagAPI.createBlockedTags(params.tagName, params.igId);
}
function destroyBlockTagsAPI(params) {
  return blocktagAPI.destroyBlockedTags(params.tagId, params.igId);
}
function requestInvitationAPI(params) {
  return dashboardAPI.requestInvitation(params);
}
function requestGrantAPI(params) {
  return dashboardAPI.requestGrant(params);
}

export function* requestSearchUser(params) {
  try {
    const response = yield call(searchUserAPI, params);
    const { status } = response;

    if (status === 'ok') {
      yield put(duckSuccess('SEARCH_USER_SUCCESS', response));
    } else {
      yield put(duckFailed('SEARCH_USER_FAILED', response));
    }
  } catch (e) {
    yield put(duckFailed('SEARCH_USER_FAILED', e));
  }
}

export function* searchUserRequest() {
  while (true) {
    const action = yield take('SEARCH_USER_REQUEST');

    yield call(requestSearchUser, action.payload);
  }
}

export function* notifyAfterSearchUserFailed() {
  while (true) {
    const action = yield take('SEARCH_USER_FAILED');
    const { error } = action.payload;

    toastr.error('Search User', error.message);
  }
}

export function* requestSearchTag(params) {
  try {
    const response = yield call(searchTagAPI, params);
    const { status } = response;

    if (status === 'ok') {
      yield put(duckSuccess('SEARCH_TAG_SUCCESS', response));
    } else {
      yield put(duckFailed('SEARCH_TAG_FAILED', response));
    }
  } catch (e) {
    yield put(duckFailed('SEARCH_TAG_FAILED', e));
  }
}

export function* searchTagRequest() {
  while (true) {
    const action = yield take('SEARCH_TAG_REQUEST');

    yield call(requestSearchTag, action.payload);
  }
}

export function* notifyWhenSearchTagSuccess() {
  while (true) {
    const response = yield take('SEARCH_TAG_SUCCESS');
    const { result } = response.payload.data;

    if (!result.hashtags.length) {
      toastr.warning('Search Tag', 'Hashtag not found!');
    }
  }
}

export function* notifyAfterSearchTagFailed() {
  while (true) {
    const action = yield take('SEARCH_TAG_FAILED');
    const { error } = action.payload;

    toastr.error('Search Tag', error.message);
  }
}

export function* destroyLikedLocations(params) {
  try {
    const response = yield call(destryLikedLocationAPI, params);
    const { status } = response;

    if (status === 'ok') {
      yield put(duckSuccess('DESTROY_LOCATION_SUCCESS', params));
    } else {
      yield put(duckFailed('DESTROY_LOCATION_FAILED', response));
    }
  } catch (e) {
    yield put(duckFailed('DESTROY_LOCATION_FAILED', e));
  }
}

export function* destroyLikedLocationRequest() {
  while (true) {
    const action = yield take('DESTROY_LOCATION_REQUEST');

    yield call(destroyLikedLocations, action.payload);
  }
}

export function* notifyAfterRequestDestroyLocationFailed() {
  while (true) {
    const action = yield take('DESTROY_LOCATION_FAILED');
    const { error } = action.payload;

    toastr.error('Search Location', error.message);
  }
}

export function* createSearchLocations(params) {
  try {
    const response = yield call(createSearchLocationAPI, params);
    const { status } = response;

    if (status === 'ok') {
      yield put(duckSuccess('CREATE_LOCATION_SUCCESS', response));
    } else {
      yield put(duckFailed('CREATE_LOCATION_FAILED', response));
    }
  } catch (e) {
    yield put(duckFailed('CREATE_LOCATION_FAILED', e));
  }
}

export function* createAddSearchLocationRequest() {
  while (true) {
    const action = yield take('CREATE_LOCATION_REQUEST');

    yield call(createSearchLocations, action.payload);
  }
}

export function* notifyAfterRequestAddLocationFailed() {
  while (true) {
    const action = yield take('CREATE_LOCATION_FAILED');
    const { error } = action.payload;

    toastr.error('Add Location', error.message);
  }
}

export function* requestSearchLocations(params) {
  try {
    const response = yield call(requestSearchLocationAPI, params);
    const { status } = response;

    if (status === 'ok') {
      yield put(duckSuccess('SEARCH_LOCATION_SUCCESS', response));
    } else {
      yield put(duckFailed('SEARCH_LOCATION_FAILED', response));
    }
  } catch (e) {
    yield put(duckFailed('SEARCH_LOCATION_FAILED', e));
  }
}

export function* requestSearchLocationRequest() {
  while (true) {
    const action = yield take('SEARCH_LOCATION_REQUEST');

    yield call(requestSearchLocations, action.payload);
  }
}

export function* notifyWhenSearchLocationSuccess() {
  while (true) {
    const response = yield take('SEARCH_LOCATION_SUCCESS');
    const { result } = response.payload.data;

    if (!result.places.length) {
      toastr.warning('Search Location', 'Location not found!');
    }
  }
}

export function* notifyAfterSearchLocationFailed() {
  while (true) {
    const action = yield take('SEARCH_LOCATION_FAILED');
    const { error } = action.payload;

    toastr.error('Search Location', error.message);
  }
}

export function* createTargetUser(params) {
  try {
    const response = yield call(createTargetUserAPI, params);
    const { status } = response;

    if (status === 'ok') {
      yield put(duckSuccess('CREATE_TARGET_USER_SUCCESS', response));
    } else {
      yield put(duckFailed('CREATE_TARGET_USER_FAILED', response));
    }
  } catch (e) {
    yield put(duckFailed('CREATE_TARGET_USER_FAILED', e));
  }
}
export function* createTargetUserRequest() {
  while (true) {
    const action = yield take('CREATE_TARGET_USER_REQUEST');

    yield call(createTargetUser, action.payload);
  }
}
export function* notifyWhenTargetUserFailed() {
  while (true) {
    const action = yield take('CREATE_TARGET_USER_FAILED');
    const { status, message } = action.payload.error;

    let statCode = status;
    if (!statCode) {
      statCode = 'error';
    }

    toastr[statCode]('Target User', message);
  }
}

export function* destroyTargetUser(params) {
  try {
    const response = yield call(destroyTargetUserAPI, params);
    const { status } = response;
    const responseData = {
      ...response,
      data: {
        ...params,
      },
    };

    if (status === 'ok') {
      yield put(duckSuccess('DESTROY_TARGET_USER_SUCCESS', responseData));
    } else {
      yield put(duckFailed('DESTROY_TARGET_USER_FAILED', response));
    }
  } catch (e) {
    yield put(duckFailed('DESTROY_TARGET_USER_FAILED', e));
  }
}
export function* destroyTargetUserRequest() {
  while (true) {
    const action = yield take('DESTROY_TARGET_USER_REQUEST');

    yield call(destroyTargetUser, action.payload);
  }
}

export function* speedSettingsInstagramUser(params) {
  try {
    const response = yield call(speedSettingsInstagramUserAPI, params);
    const { status, message } = response;
    // check if user plan is premuim to use this method
    if (status === 'ok') {
      yield put(duckSuccess('SPEED_SETTINGS_SUCCESS', response));
    } else {
      toastr.error('Setup Speed Failed!', message);
      yield put(duckFailed('SPEED_SETTINGS_FAILED', message));
    }
  } catch (e) {
    const { message } = e;
    toastr.error('API Speed Settings Failed!', message);
    yield put(duckFailed('SPEED_SETTINGS_FAILED', e));
  }
}
export function* speedSettingsInstagramUserRequest() {
  while (true) {
    const action = yield take('SPEED_SETTINGS_REQUEST');

    yield call(speedSettingsInstagramUser, action.payload);
  }
}

export function* notifyAfterSpeedSettingsSuccess() {
  while (true) {
    const response = yield take('SPEED_SETTINGS_SUCCESS');
    const { message } = response.payload;

    toastr.success('Update Success', message);
  }
}

export function* unBlockInstagramUser(params) {
  try {
    const response = yield call(unBlockedInstagramUserAPI, params);
    const { status, message } = response;
    if (status === 'ok') {
      yield put(duckSuccess('UNBLOCK_INSTAGRAM_USER_SUCCESS', params));
    } else {
      toastr.error('Unblocking Failed!', message);
      yield put(duckFailed('UNBLOCK_INSTAGRAM_USER_FAILED', message));
    }
  } catch (e) {
    const { message } = e;
    toastr.error('API Block Instagram User Failed!', message);
    yield put(duckFailed('UNBLOCK_INSTAGRAM_USER_FAILED', e));
  }
}
export function* unBlockedInstagramUserRequest() {
  while (true) {
    const action = yield take('UNBLOCK_INSTAGRAM_USER_REQUEST');

    yield call(unBlockInstagramUser, action.payload);
  }
}

export function* blockInstagramUser(params) {
  try {
    const response = yield call(blockedInstagramUserAPI, params);
    const { status, data, message } = response;

    if (status === 'ok') {
      yield put(
        duckSuccess('BLOCK_INSTAGRAM_USER_SUCCESS', {
          ig_account_id: params.instagram_id,
          username: params.blocked_username,
          id: data.blockedAccountID,
        }),
      );
    } else {
      toastr.error('Blocking Failed!', message);
      yield put(duckFailed('BLOCK_INSTAGRAM_USER_FAILED', message));
    }
  } catch (e) {
    const { message } = e;
    toastr.error('API Block Instagram User Failed!', message);
    yield put(duckFailed('BLOCK_INSTAGRAM_USER_FAILED', e));
  }
}
export function* blockedInstagramUserRequest() {
  while (true) {
    const action = yield take('BLOCK_INSTAGRAM_USER_REQUEST');

    yield call(blockInstagramUser, action.payload);
  }
}

export function* deleteAccount(params) {
  try {
    const response = yield call(deleteAccountAPI, params);

    if (response.status === 'ok') {
      yield put(duckSuccess('DELETE_ACCOUNT_SUCCESS', params));
    } else {
      yield put(duckFailed('DELETE_ACCOUNT_FAILED', response));
    }
  } catch (err) {
    yield put(duckFailed('DELETE_ACCOUNT_FAILED', err));
  }
}
export function* deleteAccountRequest() {
  while (true) {
    const action = yield take('DELETE_ACCOUNT_REQUEST');

    yield call(deleteAccount, action.payload);
  }
}
export function* redirectAfterDelete() {
  while (true) {
    yield take('DELETE_ACCOUNT_SUCCESS');

    toastr.success('Delete Account', 'Your instagram account has been deleted.');
    yield put(push('/dashboard'));
  }
}
export function* notifyAfterDeleteFailed() {
  while (true) {
    const response = yield take('DELETE_ACCOUNT_FAILED');
    const { status, message } = response.payload.error;

    toastr[status]('Delete Account', message);
  }
}

export function* createAccount(params) {
  try {
    const response = yield call(createAccountAPI, params);
    const { status, message } = response;

    if (status === 'ok' && message === 'updated!') {
      toastr.success('Create Accounts', 'Account already exist and we successfully updates your account!');
      yield put(duckSuccess('CREATE_ACCOUNT_UPDATED', response));
    } else if (status === 'ok') {
      yield put(duckSuccess('CREATE_ACCOUNT_SUCCESS', response));
    } else {
      yield put(duckFailed('CREATE_ACCOUNT_FAILED', response));
    }
  } catch (err) {
    const { message } = err;
    toastr.error('API Accounts Failed', message);

    yield put(duckFailed('CREATE_ACCOUNT_FAILED', err));
  }
}
export function* createAccountRequest() {
  while (true) {
    const action = yield take('CREATE_ACCOUNT_REQUEST');

    yield call(createAccount, action.payload);
  }
}
export function* notifyAfterCreateAccountSuccess() {
  while (true) {
    const action = yield take('CREATE_ACCOUNT_SUCCESS');
    const { account } = action.payload.data;

    let message = `The account @${account.username} is added successfully.`;

    if (action.payload.message !== 'OK!') {
      message = action.payload.message;
    }

    toastr.success('New Account Added', message);
  }
}
export function* notifyWhenCreateAccountFailed() {
  while (true) {
    const action = yield take('CREATE_ACCOUNT_FAILED');
    const { data, status, message } = action.payload.error;

    let notify = true;
    let toastData = {
      stats: status,
      title: 'Password Incorrect',
      msg: message,
    };

    if (data && data.checkpointurl) {
      yield put(duckRequest('SET_CHECKPOINT_DATA', data));
      yield put(push('/dashboard?action=checkpoint'));
      notify = false;
    }

    if (data && data.request_invitation_url) {
      const uuid = data.request_invitation_url.split('/')[7];
      yield call(requestInvitationAPI, uuid);
    }

    if (typeof message === 'object') {
      // trap two_factor_required
      const msgData = JSON.parse(message);
      if (msgData.two_factor_required) {
        toastData = {
          stats: 'warning',
          title: 'Password Incorrect',
          msg: 'Required a two factor authentication.',
        };
      }

      // rate limit error
      if (msgData.status === 'fail') {
        toastData.msg = msgData.message;
      }
    }

    if (message.includes('already added')) {
      toastData = {
        stats: status,
        title: 'Manage Account',
        msg: message,
      };
    }

    if (notify) {
      toastr[toastData.stats || 'error'](toastData.title, toastData.msg);
    }
  }
}

export function* getAccount(params) {
  try {
    const response = yield call(getAccountAPI, params);
    const { status, message } = response;

    if (status === 'ok') {
      yield put(duckSuccess('GET_ACCOUNT_SUCCESS', response));
    } else {
      yield put(duckFailed('GET_ACCOUNT_FAILED', message));
    }
  } catch (err) {
    const { message } = err;
    yield put(duckFailed('GET_ACCOUNT_FAILED', message));
  }
}
export function* getAccountRequest() {
  while (true) {
    const action = yield take('GET_ACCOUNT_REQUEST');

    yield call(getAccount, action.payload);
  }
}
export function* redirectIfGetAccountFailed() {
  while (true) {
    const action = yield take('GET_ACCOUNT_FAILED');
    const { payload } = action;

    let notify = {
      title: 'Error',
      Msg: 'Invalid routes.',
    };
    if (payload.error) {
      notify = {
        title: 'Accounts error',
        Msg: 'You did not own this account, please try to add it first.',
      };
    }

    toastr.error(notify.title, notify.Msg);
    yield put(push('/dashboard'));
  }
}

export function* createBlockTags(params) {
  try {
    const action = yield call(createBlockTagsAPI, params);
    const { status, data, message } = action;

    if (status === 'ok') {
      yield put(duckSuccess('CREATE_BLOCK_TAGS_SUCCESS', data));
    } else {
      toastr.error('Block Tags', message);
      yield put(duckFailed('CREATE_BLOCK_TAGS_FAILED', message));
    }
  } catch (err) {
    toastr.error('Block Tags', err.message);
    yield put(duckFailed('CREATE_BLOCK_TAGS_FAILED', err.message));
  }
}
export function* createBlockedTagsRequest() {
  while (true) {
    const action = yield take('CREATE_BLOCK_TAGS_REQUEST');

    yield call(createBlockTags, action.payload);
  }
}

export function* destroyBlockTags(params) {
  try {
    const response = yield call(destroyBlockTagsAPI, params);
    const { status, message } = response;
    const responseData = {
      ...response,
      data: {
        ...params,
      },
    };
    if (status === 'ok') {
      yield put(duckSuccess('DESTROY_BLOCK_TAGS_SUCCESS', responseData));
    } else {
      yield put(duckFailed('DESTROY_BLOCK_TAGS_FAILED', message));
    }
  } catch (err) {
    const { message } = err;
    yield put(duckFailed('DESTROY_BLOCK_TAGS_FAILED', message));
  }
}
export function* destroyBlockTagsRequest() {
  while (true) {
    const action = yield take('DESTROY_BLOCK_TAGS_REQUEST');

    yield call(destroyBlockTags, action.payload);
  }
}
export function* notifyWhenDestroyBlockedTagsFailed() {
  while (true) {
    const action = yield take('DESTROY_BLOCK_TAGS_FAILED');
    const { error } = action.payload;

    toastr.error('Block Tags', error);
  }
}

export function* createLikedTags(params) {
  try {
    const action = yield call(createLikedTagsAPI, params);
    const { status, data, message } = action;

    if (status === 'ok') {
      yield put(duckSuccess('CREATE_LIKED_TAGS_SUCCESS', data));
    } else {
      toastr.error('Like Tags', message);
      yield put(duckFailed('CREATE_LIKED_TAGS_FAILED', message));
    }
  } catch (err) {
    toastr.error('Like Tags', err.message);
    yield put(duckFailed('CREATE_LIKED_TAGS_FAILED', err.message));
  }
}
export function* createLikedTagsRequest() {
  while (true) {
    const action = yield take('CREATE_LIKED_TAGS_REQUEST');

    yield call(createLikedTags, action.payload);
  }
}

export function* destroyLikedTags(params) {
  try {
    const response = yield call(destroyLikedTagsAPI, params);
    const { status, message } = response;
    const responseData = {
      ...response,
      data: {
        ...params,
      },
    };
    if (status === 'ok') {
      yield put(duckSuccess('DESTROY_LIKED_TAGS_SUCCESS', responseData));
    } else {
      yield put(duckFailed('DESTROY_LIKED_TAGS_FAILED', message));
    }
  } catch (err) {
    const { message } = err;
    yield put(duckFailed('DESTROY_LIKED_TAGS_FAILED', message));
  }
}
export function* destroyLikedTagsRequest() {
  while (true) {
    const action = yield take('DESTROY_LIKED_TAGS_REQUEST');

    yield call(destroyLikedTags, action.payload);
  }
}
export function* notifyWhenDestroyLikedTagsFailed() {
  while (true) {
    const action = yield take('DESTROY_LIKED_TAGS_FAILED');
    const { error } = action.payload;

    toastr.error('Like Tags', error);
  }
}

export function* toggleAutoLike(params) {
  try {
    const { data, status, message } = yield call(toggleAutoLikeAPI, params);

    if (status === 'ok') {
      yield put(duckSuccess('TOGGLE_AUTO_LIKE_SUCCESS', data));
    } else {
      yield put(duckFailed('TOGGLE_AUTO_LIKE_FAILED', message));
    }
  } catch (err) {
    const { message } = err;
    yield put(duckFailed('TOGGLE_AUTO_LIKE_FAILED', message));
  }
}
export function* toggleAutoLikeRequest() {
  while (true) {
    const action = yield take('TOGGLE_AUTO_LIKE_REQUEST');

    yield call(toggleAutoLike, action.payload);
  }
}

export function* toggleAutoLikeFailed() {
  while (true) {
    const action = yield take('TOGGLE_AUTO_LIKE_FAILED');
    const { error } = action.payload;
    if (error.includes('expired')) {
      toastr.error('Free Subscription Expired!', error);
    } else {
      toastr.error('Service Not Started!', error);
    }
  }
}


export function* grantInstagramAccess(params) {
  try {
    const response = yield call(requestGrantAPI, params);
    const { status, message } = response;

    if (status === 'ok') {
      yield put(duckSuccess('GRANT_INSTAGRAM_USER_SUCCESS', response));
    } else {
      yield put(duckFailed('GRANT_INSTAGRAM_USER_FAILED', message));
    }
  } catch (err) {
    const { message } = err;
    yield put(duckFailed('GRANT_INSTAGRAM_USER_FAILED', message));
  }
}
export function* grantInstagramAccessRequest() {
  while (true) {
    const action = yield take('GRANT_INSTAGRAM_USER_REQUEST');

    yield call(grantInstagramAccess, action.payload);
  }
}

export function* redirectAfterGrantSuccess() {
  while (true) {
    yield take('GRANT_INSTAGRAM_USER_SUCCESS');

    yield put(push('/dashboard'));
  }
}

export function* redirectAfterGrantFailed() {
  while (true) {
    yield take('GRANT_INSTAGRAM_USER_FAILED');

    toastr.error('Error Granting Access', 'Ooops something went wrong granting access please try again later.');
    yield put(push('/dashboard'));
  }
}

export function* fetchDashboard() {
  try {
    const action = yield call(fetchDashboardAPI);
    const { data, status, message } = action;

    if (status === 'ok') {
      yield put(duckSuccess('FETCH_ACCOUNT_SUCCESS', data));
    } else {
      let notify = {
        title: 'ERROR',
        msg: message,
      };
      if (message === 'JWT error') {
        notify = {
          title: 'ACCESS EXPIRED!',
          msg: 'Your access has expired. Please log in back to regain access.',
        };

        yield put(duckRequest('LOGOUT_REQUEST'));
      }

      toastr.error(notify.title, notify.msg);
    }
  } catch (err) {
    yield put(duckFailed('FETCH_ACCOUNT_FAILED', err));
  }
}
export function* fetchAccountsRequest() {
  while (true) {
    yield take('FETCH_ACCOUNT_REQUEST');

    yield call(fetchDashboard);
  }
}

export function* fetchActivityLogs(params) {
  try {
    const response = yield call(getActivityLogsAPI, params);
    const { status, message } = response;

    if (status === 'ok') {
      yield put(duckSuccess('FETCH_ACTIVITY_LOGS_SUCCESS', response));
    } else {
      yield put(duckFailed('FETCH_ACTIVITY_LOGS_FAILED', message));
    }
  } catch (err) {
    yield put(duckFailed('FETCH_ACTIVITY_LOGS_FAILED', err));
  }
}
export function* fetchActivityLogsRequest() {
  while (true) {
    const action = yield take('FETCH_ACTIVITY_LOGS_REQUEST');

    yield call(fetchActivityLogs, action.payload);
  }
}

// Add user access in a specific account
function createAccountUserAccessAPI(params) {
  return accessAPI.createAccountUserAccess(params);
}
export function* createAccountUserAccess(params) {
  try {
    const response = yield call(createAccountUserAccessAPI, params);
    const { status } = response;

    if (status === 'ok') {
      yield put(duckSuccess('CREATE_ACCOUNT_USER_ACCESS_SUCCESS', response));
    } else {
      yield put(duckFailed('CREATE_ACCOUNT_USER_ACCESS_FAILED', response));
    }
  } catch (err) {
    yield put(duckFailed('CREATE_ACCOUNT_USER_ACCESS_FAILED', err));
  }
}
export function* createAccountUserAccessRequest() {
  while (true) {
    const action = yield take('CREATE_ACCOUNT_USER_ACCESS_REQUEST');

    yield call(createAccountUserAccess, action.payload);
  }
}
export function* notifyAfterCreateAccountUserAccessSuccess() {
  while (true) {
    const response = yield take('CREATE_ACCOUNT_USER_ACCESS_SUCCESS');
    const { message } = response.payload;

    toastr.success('User Access', message);
  }
}
export function* notifyAfterCreateAccountUserAccessFailed() {
  while (true) {
    const response = yield take('CREATE_ACCOUNT_USER_ACCESS_FAILED');
    const { status, message } = response.payload.error;

    toastr[status]('User Access', message);
  }
}

// Fetch user access in a specific account
function fetchAccountUserAccessAPI(params) {
  return accessAPI.fetchAccountUserAccess(params);
}
export function* fetchAccountUserAccess(params) {
  try {
    const response = yield call(fetchAccountUserAccessAPI, params);
    const { status } = response;

    if (status === 'ok') {
      yield put(duckSuccess('FETCH_ACCOUNT_USER_ACCESS_SUCCESS', response));
    } else {
      yield put(duckFailed('FETCH_ACCOUNT_USER_ACCESS_FAILED', response));
    }
  } catch (err) {
    yield put(duckFailed('FETCH_ACCOUNT_USER_ACCESS_FAILED', err));
  }
}
export function* fetchAccountUserAccessRequest() {
  while (true) {
    const action = yield take('FETCH_ACCOUNT_USER_ACCESS_REQUEST');

    yield call(fetchAccountUserAccess, action.payload);
  }
}

// Destroy user access in a specific account
function destroyAccountUserAccessAPI(params) {
  return accessAPI.destroyAccountUserAccess(params);
}
export function* destroyAccountUserAccess(params) {
  try {
    const response = yield call(destroyAccountUserAccessAPI, params);
    const { status } = response;

    if (status === 'ok') {
      const fields = {
        ...response,
        ...params,
      };
      yield put(duckSuccess('DESTROY_ACCOUNT_USER_ACCESS_SUCCESS', fields));
    } else {
      yield put(duckFailed('DESTROY_ACCOUNT_USER_ACCESS_FAILED', response));
    }
  } catch (err) {
    yield put(duckFailed('DESTROY_ACCOUNT_USER_ACCESS_FAILED', err));
  }
}
export function* destroyAccountUserAccessRequest() {
  while (true) {
    const action = yield take('DESTROY_ACCOUNT_USER_ACCESS_REQUEST');

    yield call(destroyAccountUserAccess, action.payload);
  }
}
export function* notifyAfterDestroyAccountUserAccessSuccess() {
  while (true) {
    const response = yield take('DESTROY_ACCOUNT_USER_ACCESS_SUCCESS');
    const { message } = response.payload;

    toastr.success('User Access', message);
  }
}
export function* notifyAfterDestroyAccountUserAccessFailed() {
  while (true) {
    const response = yield take('DESTROY_ACCOUNT_USER_ACCESS_FAILED');
    const { error } = response.payload;

    toastr.error('User Access', error.message);
  }
}

// Upgrading Plan
function checkoutNewPlanAPI(params) {
  return paymentAPI.checkoutNewPlan(params);
}
export function* checkoutNewPlan(params) {
  try {
    const response = yield call(checkoutNewPlanAPI, params);
    const { status } = response;
    const fields = {
      account_id: params.account_id,
      ...response,
    };

    if (status === 'ok') {
      yield put(duckSuccess('CHECKOUT_NEW_PLAN_SUCCESS', fields));
    }
  } catch (err) {
    yield put(duckFailed('CHECKOUT_NEW_PLAN_FAILED', err));
  }
}
export function* checkoutNewPlanRequest() {
  while (true) {
    const action = yield take('CHECKOUT_NEW_PLAN_REQUEST');

    yield call(checkoutNewPlan, action.payload);
  }
}
export function* redirectIfCheckoutNewPlanSuccess() {
  while (true) {
    const action = yield take('CHECKOUT_NEW_PLAN_SUCCESS');
    const { account_id, message } = action.payload;

    toastr.success('CHECKOUT PLAN', message);

    /* eslint-disable camelcase */
    yield put(push(`/dashboard/${account_id}/plan`));
  }
}

// Cancel Subscription plan
function cancelSubscriptionPlanAPI(params) {
  return paymentAPI.cancelSubscriptionPlan(params);
}
export function* cancelSubscriptionPlan(params) {
  try {
    const response = yield call(cancelSubscriptionPlanAPI, params);
    const { status } = response;

    const fields = {
      ...response,
      ...params,
    };
    if (status === 'ok') {
      yield put(duckSuccess('CANCEL_SUBSCRIPTION_PLAN_SUCCESS', fields));
    } else {
      yield put(duckSuccess('CANCEL_SUBSCRIPTION_PLAN_FAILED', response));
    }
  } catch (err) {
    yield put(duckFailed('CANCEL_SUBSCRIPTION_PLAN_FAILED', err));
  }
}
export function* cancelSubscriptionPlanRequest() {
  while (true) {
    const action = yield take('CANCEL_SUBSCRIPTION_PLAN_REQUEST');

    yield call(cancelSubscriptionPlan, action.payload);
  }
}
export function* notifyIfCancelPlanSuccess() {
  while (true) {
    const action = yield take('CANCEL_SUBSCRIPTION_PLAN_SUCCESS');
    const { instagram_id, message } = action.payload;

    toastr.success('CANCEL SUBSCRIPTION PLAN', message);

    yield put(duckRequest('GET_ACCOUNT_REQUEST', { igId: Number(instagram_id) }));
  }
}
export function* notifyIfCancelPlanFailed() {
  while (true) {
    const response = yield take('CANCEL_SUBSCRIPTION_PLAN_FAILED');
    const { status, message } = response.payload;

    toastr[status]('CANCEL SUBSCRIPTION PLAN', message);
  }
}

// checkpoint
function checkpointAPI(params) {
  return dashboardAPI.checkpoint(params);
}
export function* checkpoint(params) {
  try {
    const response = yield call(checkpointAPI, params);

    if (response.status === 'ok') {
      yield put(duckSuccess('CHECKPOINT_SUCCESS', response));
    } else {
      yield put(duckFailed('CHECKPOINT_FAILED', response));
    }
  } catch (err) {
    let errField = {
      status: 'error',
      message: 'Bad Request',
    };

    if (err.status) {
      errField = err;
    }

    yield put(duckFailed('CHECKPOINT_FAILED', errField));
  }
}
export function* checkpointRequest() {
  while (true) {
    const action = yield take('CHECKPOINT_REQUEST');

    yield call(checkpoint, action.payload);
  }
}
export function* notifyAfterCheckpointSuccess() {
  while (true) {
    const response = yield take('CHECKPOINT_SUCCESS');
    const { message } = response.payload;

    toastr.success('CHECKPOINT SUCCESS', message);
  }
}
export function* notifyAfterCheckpointFailed() {
  while (true) {
    const response = yield take('CHECKPOINT_FAILED');
    const { status, message } = response.payload.error;

    toastr[status]('CHECKPOINT FAILED', message);
  }
}
