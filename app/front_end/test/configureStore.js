import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { REHYDRATE, PURGE, persistCombineReducers, persistStore } from 'redux-persist';
import { compose } from 'redux';
import storage from 'redux-persist/lib/storage';
import getRootReducer from '../shared/modules';
import persistConfig from './persistConfig';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    getRootReducer(persistConfig),
    undefined,
    compose(
      applyMiddleware(...middlewares)
    ),
  );

  let persistor = persistStore(
    store,
    null,
    () => { store.getState()}
  );
  return { persistor, store };
};

export default configureStore;
