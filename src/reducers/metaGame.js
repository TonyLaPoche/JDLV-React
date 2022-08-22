import { SET_COUNT_CYCLE } from '../actions/controlPanelAction';

export const initialState = {
  newAreaGame: [],
  countNeighbor: 0,
  cycleGame: 0,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_COUNT_CYCLE:
      // const newValue
      return {
        ...state,
        cycleGame: state.cycleGame + 1,
      };
    default:
      return state;
  }
};

export default reducer;
