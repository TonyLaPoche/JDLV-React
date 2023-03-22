import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Cell {
  alive: boolean;
}

interface Jdlv {
  game: Cell[][];
  counter: number;
}

const initialState: Jdlv = {
  game: [
    [{ alive: false }, { alive: true }, { alive: false }],
    [{ alive: false }, { alive: true }, { alive: false }],
    [{ alive: false }, { alive: true }, { alive: false }],
  ],
  counter: 3,
};

const gameOfLiceReducer = createSlice({
  name: 'gameOfLife',
  initialState,
  // TODO ici on gère les actions
  reducers: {
    setUpdate: (state, action: PayloadAction<Cell[][]>) => {
      state.game = action.payload;
    },
    toogleCell: (state, action: PayloadAction<Cell[][]>) => {
      state.game = action.payload;
    },
  },
});

export const { setUpdate, toogleCell } = gameOfLiceReducer.actions;
export default gameOfLiceReducer.reducer;
