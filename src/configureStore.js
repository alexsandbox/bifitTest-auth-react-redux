import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const configureStore = (moduleName, reducers) => {
  let store = null;

  if (process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger();
    store = createStore(
      reducers,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
      ),
    );
  } else {
    store = createStore(
      reducers,
      applyMiddleware(thunkMiddleware),
    );
  }
  return store;
};

export default configureStore;
