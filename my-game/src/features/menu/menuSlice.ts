import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Controle {
  speed: number;
  cellColor: string;
  bgColor: string;
}

interface MenuState {
  navOpen: boolean;
  controle: Controle;
}

const initialState: MenuState = {
  navOpen: false,
  controle: {
    speed: 1,
    cellColor: '#000000',
    bgColor: '#FFFFFF',
  },
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openNav: (state, action: PayloadAction<boolean>) => {
      state.navOpen = action.payload;
    },
    setBg: (state, action: PayloadAction<string>) => {
      state.controle.bgColor = action.payload;
    },
    setCell: (state, action: PayloadAction<string>) => {
      state.controle.cellColor = action.payload;
    },
    setSpeed: (state, action: PayloadAction<number>) => {
      state.controle.speed = action.payload;
    },
  },
});
// actions a export
export const { openNav, setBg, setCell, setSpeed } = menuSlice.actions;

// Current value
export const Speed = (state: RootState) => state.menu.controle.speed;
export const CellColors = (state: RootState) => state.menu.controle.cellColor;
export const BgColors = (state: RootState) => state.menu.controle.bgColor;

export default menuSlice.reducer;
