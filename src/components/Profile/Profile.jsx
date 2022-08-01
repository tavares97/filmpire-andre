import React from 'react';
import { Button } from '@material-tailwind/react';

import { LogoutIcon } from '@heroicons/react/solid';

function Profile() {
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
        <h5>Add some movies to your favorites or watchlist them, its your account.</h5>
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
