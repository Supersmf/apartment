// @flow
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

export default (initialState: Object = {}) => {
  const middleware = [thunk];

  const enhancers = compose(
    applyMiddleware(...middleware),
    process.env.NODE_ENV === 'development' &&
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
  );
  const store = createStore(createRootReducer, initialState, enhancers);

  return store;
};
