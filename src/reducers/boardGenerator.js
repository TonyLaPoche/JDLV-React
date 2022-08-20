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
        // cellsNumber: 0,
      };
    case IS_CELL_CLICKED:
      let newArray = [];
      newArray = state.areaGame;
      // newArray[action.row][action.cellPos] = 1;
      newArray[action.rowPos][action.cellPos] !== 0
        ? newArray[action.rowPos][action.cellPos] = 0
        : newArray[action.rowPos][action.cellPos] = 1;
      // console.table(newArray);
      // console.log('test => ', newArray[action.row][action.cellPos]);
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
