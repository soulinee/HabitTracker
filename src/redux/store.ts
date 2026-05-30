import {
  configureStore,
} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  persistReducer,
  persistStore,
} from 'redux-persist';

import {
  PersistConfig,
} from 'redux-persist/es/types';

import habitsReducer from './habitsSlice';

const persistConfig: PersistConfig<any> =
  {
    key: 'root',

    storage: AsyncStorage,
  };

const persistedReducer =
  persistReducer(
    persistConfig,
    habitsReducer
  );

export const store =
  configureStore({
    reducer: {
      habits: persistedReducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const persistor =
  persistStore(store);

export type RootState =
  ReturnType<
    typeof store.getState
  >;