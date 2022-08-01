import React from 'react';
import { GridLoader } from 'react-spinners';

import { useGetRecommendedQuery } from '../../services/TMDB';
import MovieList from '../Movies/MovieList';

function Recommended({ id }) {
  const { data: recommended, isFetching: isFetchingRecommended } = useGetRecommendedQuery({
    id,
    list: 'recommendations',
  });
  return (
    <>
      <h5 className='text-4xl my-8 text-center'>You might also like</h5>

      {isFetchingRecommended && (
        <div className='flex justify-center mt-9'>
          <GridLoader color='white' />
        </div>
      )}

      {recommended ? (
        <MovieList movies={recommended} recommended={8} />
      ) : (
        <div className='flex justify-center mt-9'>
          <p>No movies were found.</p>
        </div>
      )}
    </>
  );
}

export default Recommended;
