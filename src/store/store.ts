import { configureStore } from '@reduxjs/toolkit';

import { Action } from 'redux';

const rootReducer = (state = {}, action: Action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;