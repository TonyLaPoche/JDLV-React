export const CELL_TO_DISPLAY = 'CELL_TO_DISPLAY';
export const IS_CLICKED = 'IS_CLICKED';
export const GENERATE_AREAGAME = 'GENERATE_AREAGAME';
export const GENERATE_RANDOM_AREAGAME = 'GENERATE_RANDOM_AREAGAME';
export const RESET_AREAGAME = 'RESET_AREAGAME';

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
      newArea[i].push([0]);
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
      newArea[i].push([Math.floor(Math.random() * 2)]);
    }
  }
  return {
    type: GENERATE_AREAGAME,
    value: newArea,
  };
}

export function resetAreaGame() {
  return {
    type: RESET_AREAGAME,
  };
}
