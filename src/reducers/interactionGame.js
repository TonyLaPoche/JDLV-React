import { IS_CLICKED } from '../actions/controlPanelAction';

export const initialState = {
  cellValue: {
    alive: 0,
    dead: 1,
  },
  runBtn: false,
  resetBtn: false,
  randomBtn: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_CLICKED:
      console.log([action.key], ' ', !state[action.key]);
      return {
        ...state,
        [action.key]: !state[action.key],
      };
    default:
      return state;
  }
};

export default reducer;
