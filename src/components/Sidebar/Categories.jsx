import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

function Categories() {
  const dispatch = useDispatch();

  const demoCategories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  return (
    <div className='py-2'>
      <p className='font-medium text-sm opacity-70 px-4 leading-[48px]'>Categories</p>

      {demoCategories.map(({ label, value }) => (
        <ul key={value}>
          <li>
            <Link
              to='/'
              onClick={() => dispatch(selectGenreOrCategory(value))}
              className='flex gap-5 py-2 px-4 text-grey-300 hover:bg-grey-300/10 '
            >
              <img src={genreIcons[label.toLowerCase()]} alt='a' className='h-[30px] invert' />
              <button type='button'>{label}</button>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Categories;
