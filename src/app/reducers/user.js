import { List, fromJS } from 'immutable';

const initialState = fromJS({
  profile: new List(),
  isCreating: false,
  isCurrent: false,
});

/* eslint-disable no-param-reassign */
const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      state = state.merge({ profile: action.payload });
      return state;
    case 'RESET_PASSWORD_REQUEST':
      state = state.merge({ isReseting: false });
      return state;
    case 'RESET_PASSWORD_SUCCESS':
      state = state.merge({ isReseting: false });
      return state;
    case 'RESET_PASSWORD_FAILED':
      state = state.merge({ isReseting: false });
      return state;
    case 'FORGOT_PASSWORD_REQUEST':
      state = state.merge({ isForgotten: false });
      return state;
    case 'FORGOT_PASSWORD_SUCCESS':
      state = state.merge({ isForgotten: false });
      return state;
    case 'FORGOT_PASSWORD_FAILED':
      state = state.merge({ isForgotten: false });
      return state;
    case 'UPDATE_PASSWORD_REQUEST':
      state = state.merge({ isUpdating: true, isCurrent: false });
      return state;
    case 'UPDATE_PASSWORD_SUCCESS':
      state = state.merge({ isUpdating: false, isCurrent: false });
      return state;
    case 'UPDATE_PASSWORD_FAILED':
      state = state.merge({ isUpdating: false, isCurrent: true });
      return state;
    case 'UPDATE_EMAIL_REQUEST':
      state = state.merge({ isUpdating: false });
      return state;
    case 'UPDATE_EMAIL_SUCCESS':
      state = state.setIn(['profile', 'email'], action.payload.email);
      state = state.merge({
        isUpdating: false,
      });
      return state;
    case 'UPDATE_EMAIL_FAILED':
      state = state.merge({ isUpdating: false });
      return state;
    case 'CREATE_USER_REQUEST':
      state = state.merge({ isCreating: true });
      return state;
    case 'CREATE_USER_SUCCESS':
      state = state.merge({ isCreating: false });
      return state;
    case 'CREATE_USER_FAILED':
      state = state.merge({ isCreating: false });
      return state;
    case 'VERIFY_EMAIL_REQUEST':
      state = state.merge({ isCreating: true });
      return state;
    case 'VERIFY_EMAIL_SUCCESS':
      state = state.setIn(['profile', 'email_verified'], true);
      state = state.merge({ isCreating: false });
      return state;
    case 'VERIFY_EMAIL_FAILED':
      state = state.merge({ isCreating: false });
      return state;
    default:
      return state;
  }
};

export default user;
