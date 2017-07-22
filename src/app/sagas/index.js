import { fork } from 'redux-saga/effects';

import * as authSaga from './auth';
import * as userSaga from './user';
import * as faqSaga from './faq';
import * as dashboardSaga from './dashboard';

export default function* rootSaga() {
  yield fork(userSaga.signupRequest);
  yield fork(userSaga.redirectAfterSignup);
  yield fork(userSaga.notifyWhenSignupFailed);

  yield fork(authSaga.loginRequest);
  yield fork(authSaga.redirectAfterLoggedIn);

  yield fork(authSaga.logoutRequest);

  yield fork(authSaga.notifyAfterLogout);

  yield fork(userSaga.redirectAfterResetPassword);

  yield fork(userSaga.resetPasswordRequest);
  yield fork(userSaga.updatePasswordRequest);
  yield fork(userSaga.redirectAfterUpdatePassword);
  yield fork(userSaga.notifyAfterUpdatePasswordFailed);

  yield fork(userSaga.forgotPasswordRequest);
  yield fork(userSaga.redirectAfterForgotPasswordSuccess);


  // update email
  yield fork(userSaga.updateEmailRequest);
  yield fork(userSaga.redirectAfterUpdateEmail);

  // verify email
  yield fork(userSaga.verifyEmailRequest);
  yield fork(userSaga.redirectAfterVerify);
  yield fork(userSaga.notifyErrorVerify);

  yield fork(dashboardSaga.destroyLikedLocationRequest);
  yield fork(dashboardSaga.notifyAfterRequestDestroyLocationFailed);

  yield fork(dashboardSaga.createAddSearchLocationRequest);
  yield fork(dashboardSaga.notifyAfterRequestAddLocationFailed);

  yield fork(dashboardSaga.searchTagRequest);
  yield fork(dashboardSaga.notifyWhenSearchTagSuccess);
  yield fork(dashboardSaga.notifyAfterSearchTagFailed);

  yield fork(dashboardSaga.searchUserRequest);
  yield fork(dashboardSaga.notifyAfterSearchUserFailed);

  yield fork(dashboardSaga.requestSearchLocationRequest);
  yield fork(dashboardSaga.notifyWhenSearchLocationSuccess);
  yield fork(dashboardSaga.notifyAfterSearchLocationFailed);

  // speed settings
  yield fork(dashboardSaga.speedSettingsInstagramUserRequest);
  yield fork(dashboardSaga.notifyAfterSpeedSettingsSuccess);

  // instagram user
  yield fork(dashboardSaga.createTargetUserRequest);
  yield fork(dashboardSaga.notifyWhenTargetUserFailed);

  yield fork(dashboardSaga.destroyTargetUserRequest);

  yield fork(dashboardSaga.blockedInstagramUserRequest);
  yield fork(dashboardSaga.unBlockedInstagramUserRequest);

  // delete instagram account
  yield fork(dashboardSaga.deleteAccountRequest);
  yield fork(dashboardSaga.redirectAfterDelete);
  yield fork(dashboardSaga.notifyAfterDeleteFailed);

  // request IG access grant
  yield fork(dashboardSaga.grantInstagramAccessRequest);
  yield fork(dashboardSaga.redirectAfterGrantSuccess);
  yield fork(dashboardSaga.redirectAfterGrantFailed);

  // add social account (instagram)
  yield fork(dashboardSaga.createAccountRequest);
  yield fork(dashboardSaga.notifyAfterCreateAccountSuccess);
  yield fork(dashboardSaga.notifyWhenCreateAccountFailed);

  // fetch activity logs
  yield fork(dashboardSaga.fetchActivityLogsRequest);

  // fetch Faq
  yield fork(faqSaga.fetchFaqRequest);

  // fetch social accounts (instagram)
  yield fork(dashboardSaga.fetchAccountsRequest);

  // get social account
  yield fork(dashboardSaga.getAccountRequest);
  yield fork(dashboardSaga.redirectIfGetAccountFailed);

  // toggle autolike
  yield fork(dashboardSaga.toggleAutoLikeRequest);
  yield fork(dashboardSaga.toggleAutoLikeFailed);

  // create tags
  yield fork(dashboardSaga.createLikedTagsRequest);

  // destroy tags
  yield fork(dashboardSaga.destroyLikedTagsRequest);
  yield fork(dashboardSaga.notifyWhenDestroyLikedTagsFailed);

  // create blockedtags
  yield fork(dashboardSaga.createBlockedTagsRequest);

  // destroy blocked tags
  yield fork(dashboardSaga.destroyBlockTagsRequest);
  yield fork(dashboardSaga.notifyWhenDestroyBlockedTagsFailed);

  // accounts user access
  yield fork(dashboardSaga.createAccountUserAccessRequest);
  yield fork(dashboardSaga.notifyAfterCreateAccountUserAccessSuccess);
  yield fork(dashboardSaga.notifyAfterCreateAccountUserAccessFailed);

  yield fork(dashboardSaga.checkpointRequest);
  yield fork(dashboardSaga.notifyAfterCheckpointSuccess);
  yield fork(dashboardSaga.notifyAfterCheckpointFailed);

  yield fork(dashboardSaga.fetchAccountUserAccessRequest);
  yield fork(dashboardSaga.destroyAccountUserAccessRequest);
  yield fork(dashboardSaga.notifyAfterDestroyAccountUserAccessSuccess);
  yield fork(dashboardSaga.notifyAfterDestroyAccountUserAccessFailed);

  // upgrade plan
  yield fork(dashboardSaga.checkoutNewPlanRequest);
  yield fork(dashboardSaga.redirectIfCheckoutNewPlanSuccess);
  yield fork(dashboardSaga.cancelSubscriptionPlanRequest);
  yield fork(dashboardSaga.notifyIfCancelPlanSuccess);
  yield fork(dashboardSaga.notifyIfCancelPlanFailed);

  // resend email verification link
  yield fork(userSaga.resendVerificationLinkRequest);
  yield fork(userSaga.notifyResendVerificationLinkFailed);
  yield fork(userSaga.notifyResendVerificationLinkSuccess);
}
