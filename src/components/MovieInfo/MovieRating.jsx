/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import ReactStars from 'react-rating-stars-component';

function MovieRating({ data }) {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className='flex w-full justify-around mt-10 sm-down:flex-col sm-down:items-center sm-down:gap-3'>
      <div className='flex items-center gap-3'>
        <ReactStars
          count={5}
          size={20}
          activeColor='#ffd700'
          edit={false}
          value={data.vote_average / 2}
          isHalf
        />

        <p>{data.vote_average} / 10</p>
      </div>

      <p className='text-xl'>
        {data.runtime}min / {formatDate(data.release_date)} / {data.spoken_languages[0].name}
      </p>
    </div>
  );
}

export default MovieRating;
