import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import newSlice from './news/newSlice';
import accountSlice from './accounts/accountSlice';

const accountPersistConfig = {
  key: 'account',
  storage,
  whitelist: ['user', 'token']
};

const Store = configureStore({
  reducer: {
    news: newSlice,
    accounts: persistReducer(accountPersistConfig, accountSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default Store;
export const persistor = persistStore(Store);