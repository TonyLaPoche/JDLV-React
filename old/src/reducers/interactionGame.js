import {
  ADDING_SPEED_VALUE, CHANGE_CELL_COLOR, DECREASE_SPEED_VALUE, IS_CLICKED, SET_DELAY_LOOP,
} from '../actions/controlPanelAction';

export const initialState = {
  cellColor: 'yellow',
  isRunBtn: false,
  resetBtn: true,
  randomBtn: true,
  delayLoop: 5,
  speedDelayName: ['Arrêt', 'Ultra Rapide', 'Très rapide', 'Rapide', 'Moyen', 'Lent'],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_CLICKED:
      return {
        ...state,
        [action.key]: !state[action.key],
        resetBtn: !state.resetBtn,
        randomBtn: !state.randomBtn,
        delayLoop: action.speed,
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
    case ADDING_SPEED_VALUE:
      return {
        ...state,
        delayLoop: state.delayLoop + 1,
      };
    case DECREASE_SPEED_VALUE:
      return {
        ...state,
        delayLoop: state.delayLoop - 1,
      };
    default:
      return state;
  }
};

export default reducer;
