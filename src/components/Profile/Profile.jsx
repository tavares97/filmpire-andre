import React from 'react';
import { Button } from '@material-tailwind/react';
import { useSelector } from 'react-redux';

import { LogoutIcon } from '@heroicons/react/solid';
import { userSelector } from '../../features/Auth';

function Profile() {
  const { user } = useSelector(userSelector);

  const favorite = [];

  const logout = () => {
    localStorage.clear();

    window.location.href = '/';
  };

  return (
    <div>
      <div className='flex justify-between'>
        <h4>My profile</h4>
        <Button variant='outlined' color='red' className='flex items-center gap-2' onClick={logout}>
          Logout
          <LogoutIcon className='h-4' />
        </Button>
      </div>

      {!favorite.length ? (
        <h5>
          Add some movies to your favorites or watchlist them, its your account, we don't judge
        </h5>
      ) : (
        {
          /** TODO:
        Favorite movies component
        */
        }
      )}
    </div>
  );
}

export default Profile;
