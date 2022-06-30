import React from 'react';
import { Link } from 'react-router-dom';

import { FilmIcon } from '@heroicons/react/outline';

function Categories() {
  const demoCategories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  return (
    <div className='py-2'>
      <p className='font-medium text-sm opacity-70 px-4 leading-[48px]'>
        Categories
      </p>

      {demoCategories.map(({ label, value }) => (
        <ul>
          <li>
            <Link
              key={value}
              className='flex gap-5 py-2 px-4 text-grey-300 hover:bg-grey-300/10 '
              to='/'
            >
              <FilmIcon className='h-[30px]' />
              <button type='button'>{label}</button>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Categories;
