import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Cell {
  alive: boolean;
  posX: string;
  posY: string;
}

interface Jdlv {
  sizeGame: number;
  game: Cell[][];
  counter: number;
}

const initialState: Jdlv = {
  sizeGame: 3,
  game: [
    [
      { alive: false, posX: '0', posY: '0' },
      { alive: true, posX: '0', posY: '1' },
      { alive: false, posX: '0', posY: '2' },
    ],
    [
      { alive: false, posX: '1', posY: '0' },
      { alive: true, posX: '1', posY: '1' },
      { alive: false, posX: '1', posY: '2' },
    ],
    [
      { alive: false, posX: '2', posY: '0' },
      { alive: true, posX: '2', posY: '1' },
      { alive: false, posX: '2', posY: '2' },
    ],
  ],
  counter: 3,
};

const gridGenerator = (s: number) => {
  const newArray: Cell[][] = [];

  for (let i = 0; i < s; i++) {
    newArray.push([]);
    const CurrentRow = newArray[i];
    for (let j = 0; j < s; j++) {
      const cell = { alive: false, posX: '' + j, posY: '' + i };
      CurrentRow.push(cell);
    }
  }
  return newArray;
};

const gameOfLiceReducer = createSlice({
  name: 'gameOfLife',
  initialState,
  // TODO ici on gère les actions
  reducers: {
    setValue2: (state, action: PayloadAction<number>) => {
      state.game = gridGenerator(action.payload);
      state.sizeGame = action.payload;
    },
    setCellStatus: (state, action: PayloadAction<string[]>) => {
      let newArray = state.game;
      let X = Number(action.payload[0]);
      let Y = Number(action.payload[1]);
      newArray[X][Y].alive
        ? (newArray[X][Y].alive = false)
        : (newArray[X][Y].alive = true);
    },
  },
});

export const { setValue2, setCellStatus } = gameOfLiceReducer.actions;

export const selectCount2 = (state: RootState) => state.gameOfLife.sizeGame;

export default gameOfLiceReducer.reducer;
