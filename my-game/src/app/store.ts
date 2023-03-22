import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import booleanSlice from '../features/boolean/booleanSlice';
import counterReducer from '../features/counter/counterSlice';
import gameOfLiceReducer from '../features/algo/gameOfLife';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    boolean: booleanSlice,
    gameOfLife: gameOfLiceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
