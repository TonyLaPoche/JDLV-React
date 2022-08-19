import { CELL_TO_DISPLAY, GENERATE_AREAGAME, RESET_AREAGAME } from '../actions/controlPanelAction';

export const initialState = {
  areaGame: [],
  cellsNumber: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CELL_TO_DISPLAY:
      return {
        ...state,
        cellsNumber: action.value <= 30 && action.value >= 0 ? action.value : 30,
      };
    case GENERATE_AREAGAME:
      return {
        ...state,
        areaGame: action.value,
      };
    case RESET_AREAGAME:
      return {
        ...state,
        areaGame: [],
        cellsNumber: 0,
      };
    default:
      return state;
  }
};

export default reducer;
