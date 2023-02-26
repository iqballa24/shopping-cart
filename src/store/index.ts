import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import authSlice from '@/store/auth';
import productSlice from '@/store/products';
import cartSlice from '@/store/cart';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducers = combineReducers({
  auth: authSlice.reducer,
  carts: cartSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: {
    persist: persistedReducer,
    loadingBar: loadingBarReducer,
    product: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
export const persistor = persistStore(store);
