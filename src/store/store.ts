import { configureStore } from '@reduxjs/toolkit';

// Define a simple reducer (placeholder)
const rootReducer = (state = {}, action) => state;

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;