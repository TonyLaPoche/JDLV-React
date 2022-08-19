export const CELL_TO_DISPLAY = 'CELL_TO_DISPLAY';
export const IS_CLICKED = 'IS_CLICKED';

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
