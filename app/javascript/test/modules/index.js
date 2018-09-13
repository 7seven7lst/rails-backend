import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/reducers';

const persistConfig = {
  key: 'auth',
  storage,
};

const rootReducer = persistCombineReducers(persistConfig, {
   auth: authReducer,
});

export default rootReducer;
