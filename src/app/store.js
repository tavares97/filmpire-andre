import { configureStore } from '@reduxjs/toolkit';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import togglerReducer from '../features/toggler';

import { tmdbApi } from '../services/TMDB';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    toggler: togglerReducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
});
