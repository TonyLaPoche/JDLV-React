import { KEEPING_INITIAL_GAME } from '../actions/controlPanelAction';

export const initialState = {
  saved: [
    {
      id: 1,
      savedName: 'empty',
      value: [],
    },
    {
      id: 2,
      savedName: 'empty',
      value: [],
    },
    {
      id: 3,
      savedName: 'empty',
      value: [],
    },
    {
      id: 4,
      savedName: 'empty',
      value: [],
    },
  ],
  initialGame: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case KEEPING_INITIAL_GAME:
      return {
        ...state,
        initialGame: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
