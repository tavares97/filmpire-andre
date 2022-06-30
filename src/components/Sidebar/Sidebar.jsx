import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import Categories from './Categories';
import Genres from './Genres';

function Sidebar() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <div>
      {!isMobile && (
        <div className='w-60 h-screen bg-[#121212] overflow-auto scrollbar-thumb-grey-500  scrollbar-thin scrollbar-track-grey-300'>
          <Link to='/' className='flex justify-center py-[10%]'>
            <img
              src='https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png'
              className='w-[70%]'
              alt='filmpire logo'
            />
          </Link>
          <hr className='divider' />

          {/* Categories */}
          <Categories />
          <hr className='divider' />

          {/* GENRES */}
          <Genres />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
