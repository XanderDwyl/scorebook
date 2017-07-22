import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as toastr } from 'react-redux-toastr';
import { reducer as form } from 'redux-form';
import { intlReducer as intl } from 'react-intl-redux';

import auth from './auth';
import user from './user';
import dashboard from './dashboard';
import faq from './faq';

const rootReducer = combineReducers({
  auth,
  user,
  dashboard,
  faq,
  routing,
  toastr,
  form,
  intl,
});

export default rootReducer;
