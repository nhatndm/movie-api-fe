import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// REDUCER
import movieReducer from './movie/slice';

export const store = configureStore({
  reducer: {
    movieReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
});
