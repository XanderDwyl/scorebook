import { List, fromJS } from 'immutable';

const initialState = fromJS({
  faqs: new List(),
});

const faq = (state = initialState, action) => {
  switch (action.type) {

    case 'FETCH_FAQ_REQUEST':
      return state.merge({ isFetchingActivity: true });
    case 'FETCH_FAQ_SUCCESS': {
      const { data } = action.payload;

      return state.merge({
        faqs: data.faqs,
        isFetchingActivity: false,
      });
    }
    case 'FETCH_FAQ_FAILED':
      return state.merge({ isFetchingActivity: false });
    default:
      return state;
  }
};

export default faq;
