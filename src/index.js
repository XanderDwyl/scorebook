import React from 'react';
import { render } from 'react-dom';
import { Provider, updateIntl } from 'react-intl-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';
import ReactGA from 'react-ga';

import configureStore from './app/store';
import Routes from './app/routes';
import { getJWTTokenFromLocalStorage } from './app/helpers/auth';
import { duckSuccess } from './app/ducks';
import ja from './app/i18n/ja';
import en from './app/i18n/en';
import config from './app/constants/config';

// imports Alba stylesheets
import './assets/build/font-awesome.min.css';
import './assets/build/simple-line-icons.css';
import './assets/build/glyphicons-filetypes.css';
import './assets/build/glyphicons-social.css';
import './assets/build/glyphicons.css';
import './assets/build/style.css';

ReactGA.initialize('UA-91455675-3');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const target = document.getElementById('root');

let locale = navigator.languages[0] || 'en';
if (browserHistory.getCurrentLocation().query.locale) {
  locale = browserHistory.getCurrentLocation().query.locale;
}

if (locale === 'en-US') {
  locale = 'en';
}

const selectLanguage = {
  ja: ja(),
  en: en(),
};

store.dispatch(updateIntl(selectLanguage[locale] || selectLanguage.en));

// check if currently login
const token = getJWTTokenFromLocalStorage();
if (token) {
  store.dispatch(
    duckSuccess('LOGIN_SUCCESS', {
      token: localStorage.getItem('autolikes_jwt_token'),
      isLogin: true,
    }),
  );
}

if (config.maintenance) {
  store.dispatch(push('/maintenance'));
}

render((
  <Provider store={store}>
    <Routes history={history} onUpdate={logPageView} />
  </Provider>
), target);
