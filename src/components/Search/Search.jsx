import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SearchIcon } from '@heroicons/react/outline';
import { Input } from '@material-tailwind/react';

import { searchMovie } from '../../features/currentGenreOrCategory.js';

function Search() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleKeyPres = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(query));
      setQuery('');
    }
  };

  return (
    <div>
      <Input
        label='Search...'
        variant='standard'
        icon={<SearchIcon className='h-5 ' />}
        color='red'
        onKeyPress={handleKeyPres}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
