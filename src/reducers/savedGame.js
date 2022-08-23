/* eslint-disable no-case-declarations */
/* eslint-disable no-shadow */
import {
  CHANGE_INPUT_NAME_SAVE, INSERT_NEW_ARRAY_ON_SAVE, KEEPING_INITIAL_GAME, SET_MODIFY,
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
    case SET_MODIFY:
      // eslint-disable-next-line max-len
      state.saved.filter(
        (save) => save.id === action.id,
      ).map(
        (save) => save.isModify = !save.isModify,
      );
      // console.log(newValue);
      return {
        ...state,
        saved: [
          ...state.saved,
        ],
      };
    case CHANGE_INPUT_NAME_SAVE:
      state.saved.filter(
        (save) => save.id === action.id,
      ).map(
        (save) => save.savedName = action.value,
      );
      return {
        ...state,
      };
    case INSERT_NEW_ARRAY_ON_SAVE:
      // state.saved.filter(
      //   (save) => save.id === action.id,
      // ).map(
      //   (save) => save.slot = action.value,
      // );
      const newSave = state.saved.filter(
        (object) => object.id === Math.max(object.id),
      ).map(
        (obj) => (
          {
            ...obj, slot: action.value, size: action.size, id: (action.id + 1),
          }
        ),
      );
      console.log(newSave);
      return {
        ...state,
        saved: [
          ...state.saved,
          newSave[0],
        ],
      };
    default:
      return state;
  }
};

export default reducer;
