/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-expressions */
import {
  CELL_TO_DISPLAY, GENERATE_AREAGAME, GENERATE_RANDOM_AREAGAME, IS_CELL_CLICKED, RESET_AREAGAME,
} from '../actions/controlPanelAction';

export const initialState = {
  areaGame: [],
  cellsNumber: 0,
  cellClass: ['GameArea--cell', 'GameArea--cell alive'],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CELL_TO_DISPLAY:
      return {
        ...state,
        cellsNumber: action.value >= 0 && action.value <= 30 ? action.value : 0,
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
      };
    default:
      return state;
  }
};

export default reducer;
