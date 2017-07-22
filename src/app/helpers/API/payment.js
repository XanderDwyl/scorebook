import * as apiUtil from '../util';

/**
 * Checkout new plan
 * @param {int64} account_id - account id
 * @param {string} plan_id - plan id
 */
export function checkoutNewPlan({ account_id, plan_id, tokenData }) {
  return apiUtil.postToAPI({
    endpoint: `api/v1/checkout/new/${account_id}/${plan_id}`, // eslint-disable-line camelcase
    body: {
      token: tokenData.id,
      email: tokenData.email,
      card: {
        exp_month: tokenData.card.exp_month,
        exp_year: tokenData.card.exp_year,
        last4: tokenData.card.last4,
      },
    },
  });
}

/**
 * Checkout plan with save card information
 * @param {int64} account_id - account id
 * @param {string} plan_id - plan id
 */
export function checkoutCardPlan({ account_id, plan_id }) {
  return apiUtil.postToAPI({
    endpoint: `api/v1/checkout/card/${account_id}/${plan_id}`, // eslint-disable-line camelcase
  });
}

/**
 * Cancel subscription plan
 * @param {int64} account_id - account id
 */
export function cancelSubscriptionPlan(params) {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/cancel/subscription',
    body: { ...params },
  });
}
