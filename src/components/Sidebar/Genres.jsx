/* eslint-disable comma-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { GridLoader } from 'react-spinners';

import genreIcons from '../../assets/genres';
import { useGetGenresQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

function Genres() {
  const dispatch = useDispatch();

  const { data, isFetching, error } = useGetGenresQuery();

  if (isFetching) {
    return (
      <div className='flex justify-center'>
        <GridLoader color='white' />
      </div>
    );
  }

  if (error) return 'An error has occurred';

  return (
    <div className='py-2'>
      <p className='font-medium text-sm opacity-70 px-4 leading-[48px]'>Genres</p>

      {data.genres?.map(({ id, name }) => (
        <ul key={id}>
          <li>
            <Link
              className='flex gap-5 py-2 px-4 text-grey-300 hover:bg-grey-300/10 '
              to='/'
              onClick={() => dispatch(selectGenreOrCategory(id))}
            >
              <img src={genreIcons[name.toLowerCase()]} alt='a' className='h-[30px] invert' />
              <button type='button'>{name}</button>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Genres;
