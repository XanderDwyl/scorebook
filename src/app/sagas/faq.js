import { call, put, take } from 'redux-saga/effects';
import { duckSuccess, duckFailed } from '../ducks';

import * as faqAPI from '../helpers/API/faq';

function getFaqAPI(params) {
  return faqAPI.fetchFaq(params);
}


export function* fetchFaq(params) {
  try {
    const response = yield call(getFaqAPI, params);
    const { status, message } = response;

    if (status === 'ok') {
      yield put(duckSuccess('FETCH_FAQ_SUCCESS', response));
    } else {
      yield put(duckFailed('FETCH_FAQ_FAILED', message));
    }
  } catch (err) {
    yield put(duckFailed('FETCH_FAQ_FAILED', err));
  }
}
export function* fetchFaqRequest() {
  while (true) {
    const action = yield take('FETCH_FAQ_REQUEST');

    yield call(fetchFaq, action.payload);
  }
}
