/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-tailwind/react';
import {
  ArrowLeftIcon,
  EyeIcon,
  EyeOffIcon,
  FilmIcon,
  GlobeAltIcon,
  HeartIcon,
  QrcodeIcon,
} from '@heroicons/react/solid';

import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import TrailerModal from './TrailerModal';

function RedirectButtons({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const isFavorite = true;
  const isWatchlisted = false;
  const addToFavorites = () => {};
  const addToWatchlist = () => {};

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className='flex justify-end w-full mt-5 sm-down:flex-col sm-down:items-center'>
      <div className='flex'>
        <a href={data?.homepage}>
          <Button
            color='red'
            variant='outlined'
            className='flex items-center gap-2 px-3 py-[5px] rounded-none'
          >
            Website
            <GlobeAltIcon className='h-5' />
          </Button>
        </a>
        <a href={`https://www.imdb.com/title/${data?.imdb_id}`}>
          <Button
            color='red'
            variant='outlined'
            className='flex items-center gap-2 px-3 py-[5px] rounded-none'
          >
            IMDB
            <QrcodeIcon className='h-5' />
          </Button>
        </a>

        <Button
          color='red'
          variant='outlined'
          className='flex items-center gap-2 px-3 py-[5px] rounded-none'
          onClick={() => openModal()}
        >
          Trailer
          <FilmIcon className='h-5' />
        </Button>
      </div>

      <div className='flex'>
        <Button
          color='red'
          variant='outlined'
          className='flex items-center gap-2 px-3 py-[5px] rounded-none'
          onClick={addToFavorites}
        >
          {isFavorite ? <p>Favorite</p> : <p>Unfavorite</p>}
          {isFavorite ? <HeartIcon className='h-5' /> : <HeartIconOutline className='h-5' />}
        </Button>

        <Button
          color='red'
          variant='outlined'
          className='flex items-center gap-2 px-3 py-[5px] rounded-none'
          onClick={addToWatchlist}
        >
          {isWatchlisted ? <p>WatchList</p> : <p>Remove watchlist</p>}
          {isWatchlisted ? <EyeIcon className='h-5' /> : <EyeOffIcon className='h-5' />}
        </Button>

        <Link to='/'>
          <Button
            color='red'
            variant='outlined'
            className='flex items-center gap-2 px-3 py-[5px] rounded-none'
            onClick={() => {}}
          >
            Back
            <ArrowLeftIcon className='h-5' />
          </Button>
        </Link>
        <TrailerModal isOpen={isOpen} closeModal={closeModal} data={data} />
      </div>
    </div>
  );
}

export default RedirectButtons;
