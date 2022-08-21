/* eslint-disable no-plusplus */
export const CELL_TO_DISPLAY = 'CELL_TO_DISPLAY';
export const IS_CLICKED = 'IS_CLICKED';
export const GENERATE_AREAGAME = 'GENERATE_AREAGAME';
export const GENERATE_RANDOM_AREAGAME = 'GENERATE_RANDOM_AREAGAME';
export const RESET_AREAGAME = 'RESET_AREAGAME';
export const IS_CELL_CLICKED = 'IS_CELL_CLICKED';
export const CHANGE_CELL_CLASS = 'CHANGE_CELL_CLASS';
export const CHANGE_CELL_COLOR = 'CHANGE_CELL_COLOR';

export function cellToDisplay(value) {
  return {
    type: CELL_TO_DISPLAY,
    value: value,
  };
}

export function isClicked(key) {
  return {
    type: IS_CLICKED,
    key: key,
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
