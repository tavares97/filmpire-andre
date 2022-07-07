import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { REACT_APP_API_KEY } = process.env;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    // GET MOVIES BY [TYPE]
    getMovies: builder.query({
      query: ({ genreOrCategoryName, page, searchQuery }) => {
        // Get movies by category
        if (genreOrCategoryName && typeof genreOrCategoryName === 'string') {
          return `movie/${genreOrCategoryName}?page=${page}&api_key=${REACT_APP_API_KEY}`;
        }
        // Get movies by genre
        if (genreOrCategoryName && typeof genreOrCategoryName === 'number') {
          return `discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=${genreOrCategoryName}&page=${page}`;
        }
        // Get movies by searchQuery
        if (searchQuery) {
          return `search/movie?api_key=${REACT_APP_API_KEY}&query=${searchQuery}&page=${page}`;
        }

        // Get Popular movies
        return `movie/popular?page=1&api_key=${REACT_APP_API_KEY}`;
      },
    }),
    // GET GENRES
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${REACT_APP_API_KEY}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
