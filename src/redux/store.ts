import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'token',
    'registerInfo',
    'workplaceInfo',
    'service',
    'numberVerified',
    'dateInfo',
    'completedRegistration',
    'otpCodeResendTime',
    'workplaceName',
    'isFeedback',
    'feedbackSession',
    'nextQuestionId',
    'parentQuestionId',
  ],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
