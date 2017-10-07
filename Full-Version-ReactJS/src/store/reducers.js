import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as notifications } from 'react-notification-system-redux';

import layout from 'layouts/DefaultLayout/modules/layout';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    layout,
    router,
    notifications,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
