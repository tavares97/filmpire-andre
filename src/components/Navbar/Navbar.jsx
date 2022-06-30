import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Avatar, Button, Navbar as Nav } from '@material-tailwind/react';
import { MenuIcon, UserCircleIcon } from '@heroicons/react/solid';

function Navbar() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const isAuthenticated = true;

  return (
    <Nav className='rounded-none max-w-none bg-[#272727] border-none drop-shadow-sm shadow-black'>
      <div className='container flex items-center justify-between text-blue-grey-900'>
        <MenuIcon className='h-6 mobile:hidden' color='white' />

        {/* TODO: ADD SEARCH COMPONENT */}
        {!isMobile && <p className='text-white'>Search...</p>}

        <div>
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
        </div>
        {/* TODO: ADD SEARCH COMPONENT */}
        {isMobile && <p className='text-white'>Search...</p>}
      </div>
    </Nav>
  );
}

export default Navbar;
