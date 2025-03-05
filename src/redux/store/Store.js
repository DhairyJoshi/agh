import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {thunk} from 'redux-thunk'; // Import redux-thunk
import rootReducer from './Index';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Apply the thunk middleware
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)  // Add thunk middleware here
);

export const persistor = persistStore(store);
export default store;
