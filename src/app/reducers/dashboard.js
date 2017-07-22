import { List, fromJS, Seq } from 'immutable';

import * as dashboardSelector from '../selectors/dashboard';

const initialState = fromJS({
  accounts: new List(),
  info: new List(),
  activityLogs: new List(),
  reactions: new List(),
  stats: new List(),
  access: new List(),
  checkout: new List(),
  checkpoint: new List(),
  location: new List(),
  searchTag: new List(),
  userLists: new List(),
  isUpdatingSpeed: false,
  isDeleting: false,
  isCreating: false,
  isFailed: false,
  isFetchingDashboard: false,
  isCancelSubscription: false,
  isFetchingAccount: false,
  isFetchingAccess: false,
  isFetchingActivity: false,
  isCreatingTag: false,
  isBlockingTag: false,
  isDestroyingBlockedTag: false,
  isCreatingTargetUser: false,
  isCreatingLikedLocation: false,
  isDestroyTargetUser: false,
  isDestroyingTag: false,
  isGranting: false,
  isCheckingOutNew: false,
  isSending: false,
  isCheckpoint: false,
  isSearching: false,
  isSearchTag: false,
  isSearchUser: false,
  isDestroyingLikedLocation: false,
});

/* eslint-disable no-param-reassign */
const dashboard = (state = initialState, action) => {
  switch (action.type) {

    // --------------
    // Dashboard Page
    // --------------
    // create account
    case 'CREATE_ACCOUNT_REQUEST':
      return state.merge({ isCreating: true });
    case 'CREATE_ACCOUNT_SUCCESS': {
      const accounts = state.get('accounts');
      return state.merge({
        accounts: accounts.push(Seq(action.payload.data.account).toMap()),
        isFailed: false,
        isCreating: false,
      });
    }
    case 'CREATE_ACCOUNT_UPDATED':
      return state.merge({ isCreating: false, isFailed: false });
    case 'CREATE_ACCOUNT_FAILED':
      return state.merge({ isCreating: false, isFailed: true });
    case 'SET_CHECKPOINT_DATA':
      return state.merge({ checkpoint: action.payload });
    case 'CHECKPOINT_REQUEST':
      return state.merge({ isCheckpoint: true });
    case 'CHECKPOINT_SUCCESS':
      return state.merge({ isCheckpoint: false, isFailed: false });
    case 'CHECKPOINT_FAILED':
      return state.merge({ isCheckpoint: false, isFailed: true });

    case 'SEARCH_USER_REQUEST':
      return state.merge({ isSearchUser: true });
    case 'SEARCH_USER_SUCCESS': {
      return state.merge({
        isSearchUser: false,
        userLists: action.payload.data.result.users,
      });
    }
    case 'SEARCH_USER_FAILED':
      return state.merge({ isSearchUser: false });
    case 'CLEAR_USER_LISTS':
      return state.merge({ userLists: new List() });

    case 'SEARCH_TAG_REQUEST':
      return state.merge({
        isSearchTag: true,
        searchTag: new List(),
      });
    case 'SEARCH_TAG_SUCCESS': {
      return state.merge({
        isSearchTag: false,
        searchTag: action.payload.data.result.hashtags,
      });
    }
    case 'SEARCH_TAG_FAILED':
      return state.merge({ isSearchTag: false });
    case 'CLEAR_TAG':
      return state.merge({ searchTag: new List() });

    case 'SPEED_SETTINGS_REQUEST':
      return state.merge({ isUpdatingSpeed: true });
    case 'SPEED_SETTINGS_SUCCESS': {
      state = dashboardSelector.addSpeedSettingsSelector(state, action.payload.data.settings);
      return state.merge({ isUpdatingSpeed: false });
    }
    case 'SPEED_SETTINGS_FAILED':
      return state.merge({ isUpdatingSpeed: false });

    // create liked location
    case 'CREATE_LOCATION_REQUEST':
      return state.merge({ isCreatingLikedLocation: true });
    case 'CREATE_LOCATION_SUCCESS': {
      const { location } = action.payload.data;

      state = dashboardSelector.addItemSelector(state, ['info', 'like_locations'], location);
      return state.merge({ isCreatingLikedLocation: false });
    }
    case 'CREATE_LOCATION_FAILED':
      return state.merge({ isCreatingLikedLocation: false });

    // destroy liked location
    case 'DESTROY_LOCATION_REQUEST':
      return state.merge({ isDestroyingLikedLocation: true });
    case 'DESTROY_LOCATION_SUCCESS': {
      const { id } = action.payload;

      state = dashboardSelector.removeItemSelector(state, ['info', 'like_locations'], id);
      return state.merge({ isDestroyingLikedLocation: false });
    }
    case 'DESTROY_LOCATION_FAILED':
      return state.merge({ isDestroyingLikedLocation: false });

    // search location
    case 'SEARCH_LOCATION_REQUEST':
      return state.merge({
        isSearching: true,
        location: new List(),
      });
    case 'SEARCH_LOCATION_SUCCESS': {
      return state.merge({
        isSearching: false,
        location: action.payload.data.result.places,
      });
    }
    case 'SEARCH_LOCATION_FAILED':
      return state.merge({ isSearching: false });
    case 'CLEAR_LOCATION':
      return state.merge({ location: new List() });


    // fetch dashboard accounts
    case 'FETCH_ACCOUNT_REQUEST':
      return state.merge({ isFetchingDashboard: true });
    case 'FETCH_ACCOUNT_SUCCESS': {
      return state.merge({
        accounts: action.payload.accounts || List(),
        isFetchingDashboard: false,
      });
    }
    case 'FETCH_ACCOUNT_FAILED':
      return state.merge({ isFetchingDashboard: false });

    // ---------------
    // Account Details
    // ---------------
    // fetch account info
    case 'GET_ACCOUNT_REQUEST':
      return state.merge({ isFetchingAccount: true });
    case 'GET_ACCOUNT_SUCCESS': {
      const { account } = action.payload.data;
      return state.merge({
        info: account,
        isFetchingAccount: false,
      });
    }
    case 'GET_ACCOUNT_FAILED':
      return state.merge({ isFetchingAccount: false });

    // turn on/off autolik.es engine
    case 'TOGGLE_AUTO_LIKE_REQUEST':
      return state.merge({ isProcessing: true });
    case 'TOGGLE_AUTO_LIKE_SUCCESS': {
      state = state.setIn(['info', 'running_status'], action.payload.running_status);
      return state.merge({
        isProcessing: false });
    }
    case 'TOGGLE_AUTO_LIKE_FAILED':
      return state.merge({ isProcessing: false });

    // delete account
    case 'DELETE_ACCOUNT_REQUEST':
      return state.merge({ isDeleting: true });
    case 'DELETE_ACCOUNT_SUCCESS': {
      return state.merge({
        accounts: dashboardSelector.removeAccountSelector(state, action.payload.username),
        isFailed: false,
        isDeleting: false,
      });
    }
    case 'DELETE_ACCOUNT_FAILED': {
      return state.merge({
        isDeleting: false,
        isFailed: true,
      });
    }

    // ---------------------
    // Account Settings Page
    // ---------------------
    // create like tags
    case 'CREATE_LIKED_TAGS_REQUEST':
      return state.merge({ isCreatingTag: true });
    case 'CREATE_LIKED_TAGS_SUCCESS': {
      state = dashboardSelector.addTagSelector(state, action.payload.tag);
      return state.merge({
        isCreatingTag: false,
      });
    }
    case 'CREATE_LIKED_TAGS_FAILED':
      return state.merge({ isCreatingTag: false });

    // create target user
    case 'CREATE_TARGET_USER_REQUEST':
      return state.merge({ isCreatingTargetUser: true });
    case 'CREATE_TARGET_USER_SUCCESS': {
      const { targetUser } = action.payload.data;

      state = dashboardSelector.addItemSelector(state, ['info', 'target_accounts'], targetUser);
      return state.merge({
        isCreatingTargetUser: false,
      });
    }
    case 'CREATE_TARGET_USER_FAILED':
      return state.merge({ isCreatingTargetUser: false });

    // destroy target user
    case 'DESTROY_TARGET_USER_REQUEST':
      return state.merge({ isDestroyTargetUser: true });
    case 'DESTROY_TARGET_USER_SUCCESS': {
      const { target_user_id } = action.payload.data;

      state = dashboardSelector.removeItemSelector(state, ['info', 'target_accounts'], target_user_id);
      return state.merge({
        isDestroyTargetUser: false,
      });
    }
    case 'DESTROY_TARGET_USER_FAILED':
      return state.merge({ isDestroyTargetUser: false });

    // delete like tags
    case 'DESTROY_LIKED_TAGS_REQUEST':
      return state.merge({ isDestroyingTag: true });
    case 'DESTROY_LIKED_TAGS_SUCCESS': {
      state = dashboardSelector.removeLikeTagSelector(state, action.payload.data);
      return state.merge({
        isDestroyingTag: false,
      });
    }
    case 'DESTROY_LIKED_TAGS_FAILED':
      return state.merge({ isDestroyingTag: false });

    // create block tags
    case 'CREATE_BLOCK_TAGS_REQUEST':
      return state.merge({ isBlockingTag: true });
    case 'CREATE_BLOCK_TAGS_SUCCESS': {
      state = dashboardSelector.addBlockedTagSelector(state, action.payload.blockedTag);
      return state.merge({
        isBlockingTag: false,
      });
    }
    case 'CREATE_BLOCK_TAGS_FAILED':
      return state.merge({ isBlockingTag: false });

    // delete blocked tags
    case 'DESTROY_BLOCK_TAGS_REQUEST':
      return state.merge({ isDestroyingBlockedTag: true });
    case 'DESTROY_BLOCK_TAGS_SUCCESS': {
      state = dashboardSelector.removeBlockedTagSelector(state, action.payload.data);
      return state.merge({
        isDestroyingBlockedTag: false,
      });
    }
    case 'DESTROY_BLOCK_TAGS_FAILED':
      return state.merge({ isDestroyingBlockedTag: false });

    // block instagram user
    case 'BLOCK_INSTAGRAM_USER_REQUEST':
      return state.merge({ isBlocking: true });
    case 'BLOCK_INSTAGRAM_USER_SUCCESS': {
      state = dashboardSelector.addBlockUserSelector(state, action.payload);
      return state.merge({ isBlocking: false });
    }
    case 'BLOCK_INSTAGRAM_USER_FAILED':
      return state.merge({ isBlocking: false });

    // unblock instagram user
    case 'UNBLOCK_INSTAGRAM_USER_REQUEST':
      return state.merge({ isUnblocking: true });
    case 'UNBLOCK_INSTAGRAM_USER_SUCCESS': {
      state = dashboardSelector.removeBlockUserSelector(state, action.payload);
      return state.merge({ isUnblocking: false });
    }
    case 'UNBLOCK_INSTAGRAM_USER_FAILED':
      return state.merge({ isUnblocking: false });

    // unblock instagram user
    case 'GRANT_INSTAGRAM_USER_REQUEST':
      return state.merge({ isGranting: true });
    case 'GRANT_INSTAGRAM_USER_SUCCESS': {
      state = dashboardSelector.removeBlockUserSelector(state, action.payload);
      return state.merge({ isGranting: false });
    }
    case 'GRANT_INSTAGRAM_USER_FAILED':
      return state.merge({ isGranting: false });

    // resend emaul verification
    case 'RESEND_EMAIL_VERIFICATION_REQUEST':
      return state.merge({ isSending: true });
    case 'RESEND_EMAIL_VERIFICATION_SUCCESS':
      return state.merge({ isSending: false });
    case 'RESEND_EMAIL_VERIFICATION_FAILED':
      return state.merge({ isSending: false });

    // ------------------------
    // Account User Access Page
    // ------------------------
    // create account user access
    case 'CREATE_ACCOUNT_USER_ACCESS_REQUEST':
      return state.merge({ isCreating: true });
    case 'CREATE_ACCOUNT_USER_ACCESS_SUCCESS': {
      const access = state.get('access');

      return state.merge({
        access: access.push(Seq(action.payload.data).toMap()),
        isCreating: false,
      });
    }
    case 'CREATE_ACCOUNT_USER_ACCESS_FAILED':
      return state.merge({ isCreating: false });

    // fetch account user access
    case 'FETCH_ACCOUNT_USER_ACCESS_REQUEST':
      return state.merge({ isFetchingAccess: true });
    case 'FETCH_ACCOUNT_USER_ACCESS_SUCCESS': {
      const { allowedUsers } = action.payload.data;

      return state.merge({
        access: allowedUsers,
        isFetchingAccess: false,
      });
    }
    case 'FETCH_ACCOUNT_USER_ACCESS_FAILED':
      return state.merge({ isFetchingAccess: false });

    // delete account info
    case 'DESTROY_ACCOUNT_USER_ACCESS_REQUEST':
      return state.merge({ isDeleting: true });
    case 'DESTROY_ACCOUNT_USER_ACCESS_SUCCESS': {
      const params = {
        loc: 'access',
        item_field: 'Email',
        data_field: 'email',
      };

      return state.merge({
        access: dashboardSelector.filterGetSelector(state, action.payload, params),
        isDeleting: false,
      });
    }
    case 'DESTROY_ACCOUNT_USER_ACCESS_FAILED':
      return state.merge({ isDeleting: false });

    // --------------------------
    // Account Activity Logs Page
    // --------------------------
    // fetch activity logs
    case 'FETCH_ACTIVITY_LOGS_REQUEST':
      return state.merge({ isFetchingActivity: true });
    case 'FETCH_ACTIVITY_LOGS_SUCCESS': {
      const { activity_logs, reactions, stats } = action.payload.data;

      return state.merge({
        activityLogs: activity_logs,
        reactions,
        stats,
        isFetchingActivity: false,
      });
    }
    case 'FETCH_ACTIVITY_LOGS_FAILED':
      return state.merge({ isFetchingActivity: false });

    case 'CLEAR_ACCOUNT_STATE':
      state = initialState;
      return state;

    // CHECKOUT NEW PLAN
    case 'CHECKOUT_NEW_PLAN_REQUEST':
      return state.merge({ isCheckingOutNew: true });
    case 'CHECKOUT_NEW_PLAN_SUCCESS': {
      const {
        plan,
        current_period_start,
        current_period_end,
      } = action.payload.data.sub;

      const planChangeableParams = {
        arrLoc: ['info', 'plan', 'changeable'],
        willCheckLast: true,
        item_field: 'id',
        data_field: 'id',
      };
      const planAvailableParams = {
        arrLoc: ['info', 'plan', 'available_plan'],
        willCheckLast: true,
        item_field: 'id',
        data_field: 'id',
      };

      const planParams = {
        arrLoc: ['info', 'plan'],
        id: plan.id,
        name: plan.id,
        started: current_period_start,
        ended: current_period_end,
        changeable: dashboardSelector.filterGetInSelector(
          state,
          { id: plan.id },
          planChangeableParams,
        ),
        available_plan: dashboardSelector.updatePlanSelector(
          state,
          { id: plan.id },
          planAvailableParams,
        ),
      };

      state = dashboardSelector.setPlanSelector(state, planParams);
      return state.merge({ isCheckingOutNew: false });
    }
    case 'CHECKOUT_NEW_PLAN_FAILED':
      return state.merge({ isCheckingOutNew: false });
    case 'SET_CHECKOUT_DATA':
      return state.merge({ checkout: action.payload });

    // CHECKOUT NEW PLAN
    case 'CANCEL_SUBSCRIPTION_PLAN_REQUEST':
      return state.merge({ isCancelSubscription: true });
    case 'CANCEL_SUBSCRIPTION_PLAN_SUCCESS':
      return state.merge({ isCancelSubscription: false });
    case 'CANCEL_SUBSCRIPTION_PLAN_FAILED':
      return state.merge({ isCancelSubscription: false });

    default:
      return state;
  }
};

export default dashboard;
