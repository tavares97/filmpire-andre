import { Switch, Route } from 'react-router-dom';

import { Actors, Movies, MovieInfo, Profile, Navbar } from './components';

function App() {
  return (
    <div className="flex h-full">
      <Navbar />
      <main className="grow p-[2em]">
        <div className="h-[70px]" />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInfo />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
