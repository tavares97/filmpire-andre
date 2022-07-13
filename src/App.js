import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { Actors, Movies, MovieInfo, Profile, Navbar, Sidebar } from './components';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const toggle = useSelector((state) => state.toggler.value);

  return (
    <div className='bg-[#121212] flex '>
      {(toggle || !isMobile) && <Sidebar />}

      <div className='grow'>
        <Navbar />
        <main className='p-[2em] min-h-screen '>
          <Switch>
            <Route exact path='/movie/:id'>
              <MovieInfo />
            </Route>
            <Route exact path='/actors/:id'>
              <Actors />
            </Route>
            <Route exact path='/'>
              <Movies />
            </Route>
            <Route exact path='/profile/:id'>
              <Profile />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
