import React from 'react';

import genreIcons from '../../assets/genres';

function MovieGenres({ data }) {
  return (
    <div className='flex flex-wrap justify-around gap-3 mt-8'>
      {data.genres?.map(({ id, name }) => (
        <div className='flex' key={id}>
          <img src={genreIcons[name.toLowerCase()]} alt='a' className='h-[30px] invert mr-2' />
          <p className='mr-3'>{name}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieGenres;
