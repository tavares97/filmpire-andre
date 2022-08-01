import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies, recommended }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 '>
      {movies?.results?.slice(0, recommended).map((movie, i) => (
        <MovieItem key={i} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
