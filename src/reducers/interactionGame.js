export const initialState = {
  cellValue: {
    alive: 0,
    dead: 1,
  },
  isRun: false,
  isRestart: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
