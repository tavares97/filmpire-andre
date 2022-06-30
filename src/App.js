import { Switch, Route } from 'react-router-dom';

import {
  Actors,
  Movies,
  MovieInfo,
  Profile,
  Navbar,
  Sidebar,
} from './components';

function App() {
  return (
    <div className='bg-[#121212] h-screen flex'>
      <Sidebar />
      <div className='grow'>
        <Navbar />
        <main className='p-[2em]'>
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
