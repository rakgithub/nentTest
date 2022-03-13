import React from 'react';
import './App.css';

import { addWatchedMovie, add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';

const getMoviesComponents = (movies) => {
  var components = [];

  movies.forEach(function(movie) {
    components.push(
      <div className="all">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function() { addWatchedMovie(movie.title, movie.comment, movie.image) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    )
  })

  return components;
}

function getWatchedMoviesComponents(movies) {
  var components = [];

  movies.forEach(function(movie) {
    components.push(movie && (
      <div className="watched">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          {/* DON"T CALL A PARENT FUNTION DIRECTLY BY IMPORTING. RATHER PASS IT AS A PROPS OR HAVE THAT FUNCTION IN THIS COMPONENT ITSELF */}
          <a className="movie-watched" href="#" onClick={function() { removeWatchedMovie(movie.title) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    ))
  })

  return components;
}

function App(props) {
  return (
    <div className="App">
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
       {/*  MAINTAIN A STATE FOR TITLE, URL AND COMMENT */}
      <b>TITLE:<br /><input type="text" onChange={function(e) { title = e.target.value; }} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={function(e) { image = e.target.value; }} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={function(e) { comment = e.target.value; }} /></b><br />
      {/* CALL add() AS A PROPS AND DON'T NEED TO CREATE AN INLINE FUNCTION TO CALL add() */}
      <input type="button" onClick={function(e) { add(title, image, comment); }} value="ADD MOVIE" />

      <h1>Watchlist:</h1>
      {/* add getAllMovies() to this file and don't call a parent component directly. Rather use props*/}
      {getMoviesComponents(getAllMovies())}
      <h1>Already watched:</h1>
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
}

var title = '';
var image = '';
var comment = '';

export default App;
