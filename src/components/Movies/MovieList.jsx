import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
      {movies?.results?.map((movie, i) => (
        <MovieItem key={i} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;