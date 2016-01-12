// Redux
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import appReducer from '../reducers/reducers.js';
import { syncReduxAndRouter } from 'redux-simple-router';
import { setViewport } from 'viewport.js';

// Router
import createBrowserHistory from 'history/lib/createBrowserHistory';

let store;
export const history = createBrowserHistory();

export function initializeStore() {

  const logger = createLogger();
  const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);
  store = createStoreWithMiddleware(appReducer);

  // Routing
  syncReduxAndRouter(history, store);
  store.dispatch(setViewport(window.innerWidth));

  return store;

};

export function getStore() {
  return store;
};