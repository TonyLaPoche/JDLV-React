import { CHANGE_CELL_COLOR, IS_CLICKED, SET_DELAY_LOOP } from '../actions/controlPanelAction';

export const initialState = {
  cellColor: 'yellow',
  isRunBtn: false,
  resetBtn: true,
  randomBtn: true,
  delayLoop: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_CLICKED:
      return {
        ...state,
        [action.key]: !state[action.key],
        resetBtn: !state.resetBtn,
        randomBtn: !state.randomBtn,
      };
    case CHANGE_CELL_COLOR:
      return {
        ...state,
        cellColor: action.value,
      };
    case SET_DELAY_LOOP:
      return {
        ...state,
        delayLoop: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
