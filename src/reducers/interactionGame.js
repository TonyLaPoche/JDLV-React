import { CHANGE_CELL_COLOR, IS_CLICKED } from '../actions/controlPanelAction';

export const initialState = {
  cellColor: 'yellow',
  runBtn: false,
  resetBtn: false,
  randomBtn: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_CLICKED:
      return {
        ...state,
        [action.key]: !state[action.key],
      };
    case CHANGE_CELL_COLOR:
      return {
        ...state,
        cellColor: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
