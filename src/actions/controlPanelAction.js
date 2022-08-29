/* eslint-disable no-plusplus */
export const CELL_TO_DISPLAY = 'CELL_TO_DISPLAY';
export const IS_CLICKED = 'IS_CLICKED';
export const GENERATE_AREAGAME = 'GENERATE_AREAGAME';
export const GENERATE_RANDOM_AREAGAME = 'GENERATE_RANDOM_AREAGAME';
export const RESET_AREAGAME = 'RESET_AREAGAME';
export const IS_CELL_CLICKED = 'IS_CELL_CLICKED';
export const CHANGE_CELL_CLASS = 'CHANGE_CELL_CLASS';
export const CHANGE_CELL_COLOR = 'CHANGE_CELL_COLOR';
export const KEEPING_INITIAL_GAME = 'KEEPING_INITIAL_GAME';

export function cellToDisplay(value) {
  return {
    type: CELL_TO_DISPLAY,
    value: value,
  };
}

export function isClicked(key, speed) {
  return {
    type: IS_CLICKED,
    key: key,
    speed: speed,
  };
}

export function generateAreaGame(value) {
  const newArea = [];
  for (let i = 0; i < value; i++) {
    newArea.push([]);
    for (let u = 0; u < value; u++) {
      newArea[i].push(0);
    }
  }
  return {
    type: GENERATE_AREAGAME,
    value: newArea,
  };
}

export function generateRandomAreaGame(value) {
  const newArea = [];
  for (let i = 0; i < value; i++) {
    newArea.push([]);
    for (let u = 0; u < value; u++) {
      newArea[i].push(Math.floor(Math.random() * 2));
    }
  }
  return {
    type: GENERATE_RANDOM_AREAGAME,
    value: newArea,
  };
}

export function resetAreaGame(value) {
  const newArea = [];
  for (let i = 0; i < value; i++) {
    newArea.push([]);
    for (let u = 0; u < value; u++) {
      newArea[i].push(0);
    }
  }
  return {
    type: RESET_AREAGAME,
    value: newArea,
  };
}

export function isCellClicked(rowPos, cellPos) {
  return {
    type: IS_CELL_CLICKED,
    rowPos: rowPos,
    cellPos: cellPos,
  };
}

export function changeCellClass(value) {
  return {
    type: CHANGE_CELL_CLASS,
    value: value,
  };
}

export function changeCellColor(value) {
  return {
    type: CHANGE_CELL_COLOR,
    value: value,
  };
}

export const SET_DELAY_LOOP = 'SET_DELAY_LOOP';

export function setDelayLoop(value) {
  return {
    type: SET_DELAY_LOOP,
    value: value,
  };
}

export const SET_NEW_AREAGAME = 'SET_NEW_AREAGAME';

export function setNewAreaGame() {
  return {
    type: SET_NEW_AREAGAME,
  };
}

export const SET_COUNT_CYCLE = 'SET_COUNT_CYCLE';

export function setCountCycle() {
  return {
    type: SET_COUNT_CYCLE,
  };
}

export function keepingInitialGame(value) {
  return {
    type: KEEPING_INITIAL_GAME,
    value: value,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SET_LAST_PATERN = 'SET_LAST_PATERN';

// Action creator => On l'utilise au moment du dispatch()
export function setLastPatern(value) {
  return {
    type: SET_LAST_PATERN,
    value: value,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SET_MODIFY = 'SET_MODIFY';

// Action creator => On l'utilise au moment du dispatch()
export function setModify(id) {
  return {
    type: SET_MODIFY,
    id: id,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const CHANGE_INPUT_NAME_SAVE = 'CHANGE_INPUT_NAME_SAVE';

// Action creator => On l'utilise au moment du dispatch()
export function changeInputNameSave(value) {
  return {
    type: CHANGE_INPUT_NAME_SAVE,
    value: value,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const INSERT_NEW_ARRAY_ON_SAVE = 'INSERT_NEW_ARRAY_ON_SAVE';

// Action creator => On l'utilise au moment du dispatch()
export function insertNewArrayOnSave(value, size) {
  return {
    type: INSERT_NEW_ARRAY_ON_SAVE,
    value: value,
    size: size,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SET_SAVE_SCREEN = 'SET_SAVE_SCREEN';

// Action creator => On l'utilise au moment du dispatch()
export function setSaveOnScreen(valuePatern, sizePatern) {
  return {
    type: SET_SAVE_SCREEN,
    valuePatern: valuePatern,
    sizePatern: sizePatern,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const DELETE_SAVE = 'DELETE_SAVE';

// Action creator => On l'utilise au moment du dispatch()
export function deleteSave(value) {
  return {
    type: DELETE_SAVE,
    value: value,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const ADDING_SPEED_VALUE = 'ADDING_SPEED_VALUE';

// Action creator => On l'utilise au moment du dispatch()
export function addingSpeedValue() {
  return {
    type: ADDING_SPEED_VALUE,
  };
}

export const DECREASE_SPEED_VALUE = 'DECREASE_SPEED_VALUE';

// Action creator => On l'utilise au moment du dispatch()
export function decreaseSpeedValue() {
  return {
    type: DECREASE_SPEED_VALUE,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SHOW_SAVE_LOCAL = 'SHOW_SAVE_LOCAL';

// Action creator => On l'utilise au moment du dispatch()
export function showSaveLocal(value) {
  return {
    type: SHOW_SAVE_LOCAL,
    value: value,
  };
}
