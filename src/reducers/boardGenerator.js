import { CELL_TO_DISPLAY } from '../actions/controlPanelAction';

export const initialState = {
  areaGame: [
    [], [], [],
    [], [], [],
    [], [], [],
  ],
  cellsNumber: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CELL_TO_DISPLAY:
      return {
        ...state,
        cellsNumber: action.value,

      };
    default:
      return state;
  }
};

export default reducer;
