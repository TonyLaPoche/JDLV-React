import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BooleanState {
  value: boolean;
}

const initialState: BooleanState = {
  value: false,
};

const booleanSlice = createSlice({
  name: 'boolean',
  initialState,
  reducers: {
    setBoolean: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setBoolean } = booleanSlice.actions;
export default booleanSlice.reducer;
