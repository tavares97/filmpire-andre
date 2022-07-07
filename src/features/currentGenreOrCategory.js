/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genreOrCategoryName: '',
  page: 1,
  searchQuery: '',
};

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState,
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.searchQuery = '';
      state.genreOrCategoryName = action.payload;
    },
    searchMovie: (state, action) => {
      state.genreOrCategoryName = '';
      state.searchQuery = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;
