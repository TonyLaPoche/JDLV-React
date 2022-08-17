export const CELL_TO_DISPLAY = 'CELL_TO_DISPLAY';

export function cellToDisplay(value) {
  return {
    type: CELL_TO_DISPLAY,
    value: value,
  };
}
