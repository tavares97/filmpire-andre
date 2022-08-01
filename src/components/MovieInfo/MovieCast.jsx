import React from 'react';
import { Link } from 'react-router-dom';

function MovieCast({ data }) {
  return (
    <div className='text-start'>
      <p className='text-2xl w-full mt-6'>Top Cast</p>
      <div className='grid grid-cols-6 sm-down:grid-cols-3 mt-4 gap-3'>
        {data &&
          data.credits?.cast
            ?.map(
              (character, i) =>
                character.profile_path && (
                  <Link
                    to={`/actors/${character.id}`}
                    key={i}
                    className='flex flex-col items-center'
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                      alt={character.name}
                      className='max-h-32 rounded-xl shadow-sm shadow-grey-700'
                    />

                    <p className='mt-2'>{character.name}</p>
                    <p className='text-grey-500'>{character.character.split('/')[0]}</p>
                  </Link>
                )
            )
            .slice(0, 6)}
      </div>
    </div>
  );
}

export default MovieCast;
