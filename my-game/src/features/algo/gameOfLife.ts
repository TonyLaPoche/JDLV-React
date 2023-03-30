import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { RunGame } from './rules';

export interface Cell {
  alive: boolean;
  posX: string;
  posY: string;
}

export interface Jdlv {
  sizeGame: number;
  game: Cell[][];
  counter: number;
  counterCellAlive: number;
  onMousePress: boolean;
}

const initialState: Jdlv = {
  sizeGame: 3,
  game: [
    [
      { alive: false, posX: '0', posY: '0' },
      { alive: true, posX: '1', posY: '0' },
      { alive: false, posX: '2', posY: '0' },
    ],
    [
      { alive: false, posX: '0', posY: '1' },
      { alive: true, posX: '1', posY: '1' },
      { alive: false, posX: '2', posY: '1' },
    ],
    [
      { alive: false, posX: '0', posY: '2' },
      { alive: true, posX: '1', posY: '2' },
      { alive: false, posX: '2', posY: '2' },
    ],
  ],
  counter: 0,
  counterCellAlive: 3,
  onMousePress: false,
};

const countCellAlive = (area: Cell[][]) => {
  let counterCell = 0;
  for (let i = 0; i < area.length; i++) {
    const row = area[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell.alive) {
        counterCell++;
      }
    }
  }
  return counterCell;
};

const gridRandomGenerator = (s: number) => {
  const newArray: Cell[][] = [];
  for (let i = 0; i < s; i++) {
    newArray.push([]);
    const CurrentRow = newArray[i];
    for (let j = 0; j < s; j++) {
      let random: number = Math.floor(Math.random() * (3 - 1) + 1);
      const cell = {
        alive: random === 1 ? false : true,
        posX: '' + j,
        posY: '' + i,
      };
      CurrentRow.push(cell);
    }
  }
  return newArray;
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
  reducers: {
    setValue2: (state, action: PayloadAction<number>) => {
      state.game = gridGenerator(action.payload);
      state.sizeGame = action.payload;
    },

    setCellStatus: (state, action: PayloadAction<string[]>) => {
      let newArray = state.game;
      let X = Number(action.payload[1]);
      let Y = Number(action.payload[0]);
      newArray[X][Y].alive
        ? (newArray[X][Y].alive = false)
        : (newArray[X][Y].alive = true);
    },

    setRandomGrid: (state, action: PayloadAction<number>) => {
      state.sizeGame = action.payload;
      state.game = gridRandomGenerator(action.payload);
      state.counterCellAlive = countCellAlive(state.game);
      state.counter = 0;
    },

    clearGrid: (state, action: PayloadAction<number>) => {
      state.game = gridGenerator(action.payload);
      state.counterCellAlive = countCellAlive(state.game);
      state.counter = 0;
      state.sizeGame = action.payload;
    },

    // setTimer: (state, action: PayloadAction<number>) => {
    //   state.counter = action.payload;
    // },
    playGame: (state, action: PayloadAction<Cell[][]>) => {
      state.game = RunGame(action.payload);
      state.counterCellAlive = countCellAlive(state.game);
      state.counter += 1;
    },
    onMousePress: (state, action: PayloadAction<boolean>) => {
      state.onMousePress = action.payload;
    },
  },
});

export const {
  setValue2,
  setCellStatus,
  setRandomGrid,
  clearGrid,
  // setTimer,
  playGame,
  onMousePress,
} = gameOfLiceReducer.actions;

export const selectCount2 = (state: RootState) => state.gameOfLife.sizeGame;
export const AreaGame = (state: RootState) => state.gameOfLife.game;
export const Time = (state: RootState) => state.gameOfLife.counter;
export const CountCellsAlive = (state: RootState) =>
  state.gameOfLife.counterCellAlive;
export const MouseClicked = (state: RootState) => state.gameOfLife.onMousePress;

export default gameOfLiceReducer.reducer;
