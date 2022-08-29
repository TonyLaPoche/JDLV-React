/* eslint-disable no-case-declarations */
/* eslint-disable no-shadow */
import {
  CHANGE_INPUT_NAME_SAVE,
  DELETE_SAVE,
  INSERT_NEW_ARRAY_ON_SAVE,
  KEEPING_INITIAL_GAME,
  SHOW_SAVE_LOCAL,
} from '../actions/controlPanelAction';

export const initialState = {
  savePatern: {
    id: 0,
    saveName: '',
    valuePatern: [],
    sizePatern: null,
  },
  saveList: [],
  saved: [],
  initialGame: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case KEEPING_INITIAL_GAME:
      return {
        ...state,
        initialGame: action.value,
      };
    case SHOW_SAVE_LOCAL:
      return {
        ...state,
        saved: action.value,
      };
    case CHANGE_INPUT_NAME_SAVE:
      return {
        ...state,
        savePatern: {
          ...state.savePatern,
          saveName: action.value,
        },
      };
    case INSERT_NEW_ARRAY_ON_SAVE:
      return {
        ...state,
        savePatern: { ...state.savePatern, id: state.savePatern.id + 1 },
        saved: [
          ...state.saved,
          {
            ...state.savePatern,
            valuePatern: action.value,
            sizePatern: action.size,
          },
        ],
      };
    case DELETE_SAVE:
      return {
        ...state,
        saved: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
