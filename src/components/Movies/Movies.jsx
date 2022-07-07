/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { GridLoader } from 'react-spinners';
import { useSelector } from 'react-redux';

import MovieList from './MovieList';
import { useGetMoviesQuery } from '../../services/TMDB';

function Movies() {
  const [page, setPage] = useState(1);

  const { genreOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data, isFetching, error } = useGetMoviesQuery({ genreOrCategoryName, page, searchQuery });

  if (isFetching) {
    return (
      <div className='flex justify-center mt-9'>
        <GridLoader color='white' />
      </div>
    );
  }

  if (!data.results.length) {
    return (
      <div className='flex justify-center mt-5 max-h-screen'>
        <p className='text-xl'>No movies that match that name were found</p>
      </div>
    );
  }

  if (error) return 'An error has occurred';

  return <MovieList movies={data} />;
}

export default Movies;
