import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';

import { Avatar, Button, Navbar as Nav } from '@material-tailwind/react';
import { MenuIcon, UserCircleIcon } from '@heroicons/react/solid';

import { Search } from '../index';
import { toggler } from '../../features/toggler';

function Navbar() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const isAuthenticated = true;

  const dispatch = useDispatch();

  return (
    <Nav className='rounded-none max-w-full px-6 justify-center bg-[#272727] border-none drop-shadow-sm shadow-black sticky top-0 z-30'>
      <div
        className={`container flex items-center justify-between text-blue-grey-900 ${
          isMobile && 'flex-col'
        }`}
      >
        {!isMobile && <Search />}

        <div className={`${isMobile && 'flex justify-between w-full items-center mb-5'}`}>
          {!isAuthenticated ? (
            <Button
              variant='text'
              className='text-grey-50 hover:bg-grey-200/10 flex items-center gap-1'
              size='sm'
            >
              Login
              <UserCircleIcon className='h-6 ' color='white' />
            </Button>
          ) : (
            <button type='button'>
              <Avatar
                variant='circular'
                alt='Profile'
                src='https://avatars.dicebear.com/api/open-peeps/ric.svg'
                size='sm'
              />
            </button>
          )}

          <MenuIcon
            className='h-6 mobile:hidden'
            color='white'
            role='button'
            onClick={() => dispatch(toggler())}
          />
        </div>
        {isMobile && <Search />}
      </div>
    </Nav>
  );
}

export default Navbar;
