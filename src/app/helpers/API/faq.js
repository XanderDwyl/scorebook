import * as apiUtil from '../util';

export function Faq() {}

/**
 * fetchFaq
 * to get FAQ list
 */
export function fetchFaq() {
  return apiUtil.postToAPI({
    endpoint: 'api/v1/faq',
    body: {
    },
  });
}
