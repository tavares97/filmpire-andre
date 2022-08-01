import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { GridLoader } from 'react-spinners';

import { useGetMovieQuery } from '../../services/TMDB';
import {
  MovieCast,
  MovieGenres,
  MovieOverview,
  MovieRating,
  RedirectButtons,
  Recommended,
} from './index.js';

function MovieInfo() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);

  if (isFetching) {
    return (
      <div className='flex justify-center mt-9'>
        <GridLoader color='white' />
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center mt-9'>
        <h5>An error has occurred</h5>
        <Link to='/' />
      </div>
    );
  }

  return (
    <>
      <div className='grid sm-down:grid-cols-1 lg:grid-cols-3 md:gap-10'>
        <div className='flex flex-col items-center '>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt={data?.title}
            className='max-h-[450px] rounded-xl shadow-md shadow-grey-700 ml-5'
          />
        </div>

        <div className='flex flex-col items-center col-span-2 text-center'>
          <h2 className='text-5xl sm-down:mt-6'>
            {data?.title} ({data?.release_date.split('-')[0]})
          </h2>

          <h3 className='text-2xl mt-2'>{data?.tagline}</h3>

          <MovieRating data={data} />

          <MovieGenres data={data} />

          <MovieOverview data={data} />

          <MovieCast data={data} />

          <RedirectButtons data={data} />
        </div>
      </div>

      <Recommended id={id} />
    </>
  );
}

export default MovieInfo;
