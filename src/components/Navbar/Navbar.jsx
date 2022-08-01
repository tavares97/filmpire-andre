import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';

import { Avatar, Button, Navbar as Nav } from '@material-tailwind/react';
import { MenuIcon, UserCircleIcon } from '@heroicons/react/solid';

import { Link } from 'react-router-dom';
import { Search } from '../index';
import { toggler } from '../../features/toggler';
import { fetchToken, getSessionId, moviesAPI } from '../../utils';
import { setUser, userSelector } from '../../features/Auth';

function Navbar() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const { isAuthenticated, user } = useSelector(userSelector);

  const dispatch = useDispatch();

  const token = localStorage.getItem('request_token');
  const sessionId = localStorage.getItem('session_id');

  useEffect(() => {
    const loginUser = async () => {
      if (token) {
        if (sessionId) {
          const { data: userData } = await moviesAPI.get(`/account?session_id=${sessionId}`);

          dispatch(setUser(userData));
        } else {
          const newSessionID = await getSessionId();
          const { data: userData } = await moviesAPI.get(`/account?session_id=${newSessionID}`);

          dispatch(setUser(userData));
        }
      }
    };

    loginUser();
  }, [token]);

  return (
    <Nav className='rounded-none max-w-full justify-center bg-[#272727] border-none drop-shadow-sm shadow-black sticky top-0 z-20 '>
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
              color='red'
              className='text-grey-50 hover:bg-grey-200/10 flex items-center gap-1'
              size='sm'
              onClick={fetchToken}
            >
              Login
              <UserCircleIcon className='h-6 ' color='white' />
            </Button>
          ) : (
            <Link type='button' to={`/profile/${user.id}`}>
              <Avatar
                variant='circular'
                alt='Profile'
                src='https://avatars.dicebear.com/api/open-peeps/ric.svg'
                size='md'
              />
            </Link>
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
