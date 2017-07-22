import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import jaLocaleData from 'react-intl/locale-data/ja';

import rootReducer from '../reducers';
import rootSaga from '../sagas';
import config from '../constants/config';

export default function configureStore(preloadedState) {
  const logger = createLogger();
  const history = routerMiddleware(browserHistory);
  const sagaMiddleware = createSagaMiddleware();

  let middleware = applyMiddleware(history, sagaMiddleware);
  if (config.env === 'dev') {
    middleware = applyMiddleware(logger, history, sagaMiddleware);
  }

  const createStoreWithMiddleware = compose(
    middleware,
  );

  addLocaleData([
    ...enLocaleData,
    ...jaLocaleData,
  ]);

  const store = createStoreWithMiddleware(createStore)(rootReducer, preloadedState);
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot
      .accept('../reducers', () => {
        /* eslint-disable global-require */
        const nextRootReducer = require('../reducers/index');
        /* eslint-enable global-require */
        store.replaceReducer(nextRootReducer);
      });
  }
  return store;
}
