import React from 'react';

function MovieOverview({ data }) {
  return (
    <div className='text-start'>
      <p className='text-2xl mt-6 mb-3'>Overview</p>
      <p className='text-base'>{data.overview}</p>
    </div>
  );
}

export default MovieOverview;
