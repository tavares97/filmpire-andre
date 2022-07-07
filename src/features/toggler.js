/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const togglerSlice = createSlice({
  name: 'toggler',
  initialState,
  reducers: {
    toggler: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggler } = togglerSlice.actions;

export default togglerSlice.reducer;
