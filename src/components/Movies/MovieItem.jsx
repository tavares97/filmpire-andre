import React from 'react';
import { Link } from 'react-router-dom';

import ReactStars from 'react-rating-stars-component';

function MovieItem({ movie }) {
  return (
    <div className='hover:scale-110 transition ease-in delay-100 mb-8'>
      <Link to={`/movie/${movie.id}`} className='flex flex-col items-center'>
        <img
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : 'https://www.fillmurray.com/200/300'
          }
          className='h-60  rounded-sm '
        />
        <p className='mt-3 text-center'>{movie.title}</p>
        <ReactStars
          count={5}
          size={20}
          activeColor='#ffd700'
          edit={false}
          value={movie.vote_average / 2}
          isHalf
        />
      </Link>
    </div>
  );
}

export default MovieItem;
