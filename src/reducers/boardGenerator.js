/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-expressions */
import {
  CELL_TO_DISPLAY,
  GENERATE_AREAGAME,
  GENERATE_RANDOM_AREAGAME,
  IS_CELL_CLICKED,
  RESET_AREAGAME,
  SET_LAST_PATERN,
  SET_NEW_AREAGAME,
  SET_SAVE_SCREEN,
} from '../actions/controlPanelAction';
import { RunGame } from '../mecanique';

export const initialState = {
  areaGame: [],
  cellsNumber: 0,
  cellClass: ['GameArea--cell', 'GameArea--cell alive'],
  cycleGame: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CELL_TO_DISPLAY:
      return {
        ...state,
        cellsNumber: action.value >= 0 && action.value <= 50 ? action.value : 0,
      };
    case GENERATE_AREAGAME:
      return {
        ...state,
        areaGame: action.value,
      };
    case RESET_AREAGAME:
      return {
        ...state,
        areaGame: action.value,
        cycleGame: 0,
      };
    case IS_CELL_CLICKED:
      let newArray = [];
      newArray = state.areaGame;
      newArray[action.rowPos][action.cellPos] !== 0
        ? newArray[action.rowPos][action.cellPos] = 0
        : newArray[action.rowPos][action.cellPos] = 1;
      return {
        ...state,
        areaGame: newArray,
      };
    case GENERATE_RANDOM_AREAGAME:
      return {
        ...state,
        areaGame: action.value,
        cycleGame: 0,
      };
    case SET_NEW_AREAGAME:
      return {
        ...state,
        areaGame: RunGame(state.areaGame),
        cycleGame: state.cycleGame + 1,
      };
    case SET_LAST_PATERN:
      return {
        ...state,
        areaGame: action.value,
        cycleGame: 0,
      };
    case SET_SAVE_SCREEN:
      return {
        ...state,
        areaGame: action.valuePatern,
        cellsNumber: action.sizePatern,
        cycleGame: 0,
      };
    default:
      return state;
  }
};

export default reducer;
