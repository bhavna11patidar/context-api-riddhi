import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';
import AddMovies from './Components/AddMovies';
import MoviesList from './Components/MoviesList';
import {MoviesProvider} from './Components/ContextMovies';
import LifeCycleMethods from './Components/LifeCycleMethods';
function App() {
  return (
    <Router>
      <MoviesProvider>
      <Header></Header>
      <Route exact path="/add-movies" component={AddMovies}></Route>
      <Route exact path="/view-movies" component={MoviesList}></Route>
      <Route exact path="/lifecycle-methods" component={()=><LifeCycleMethods title="Hello World"></LifeCycleMethods>}></Route>
      </MoviesProvider>
    </Router>
  );
}

export default App;
