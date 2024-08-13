import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import menuSlice from '../features/menu/menuSlice';
import counterReducer from '../features/counter/counterSlice';
import gameOfLiceReducer from '../features/algo/gameOfLife';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    menu: menuSlice,
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
