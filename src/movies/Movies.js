import React, { useState } from 'react'; 
import { getAllMovies, getWatchedMovieList } from '../utils';
import _ from 'lodash';
import MovieList from './movieList';

const Movies = props => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [comment, setDescription] = useState("");
  const [refreshMovie, setRefreshMovie] = useState(false);

  const addMovie = () => {
    const movie = {
        key: _.uniqueId(),
        title: title,
        comment: comment,
        image: url,
    }
    let movies = getAllMovies();
    movies.push(movie);
    localStorage.setItem('movies-all', JSON.stringify(movies));
    setRefreshMovie(!refreshMovie);
    resetMovieDetails();
  };

  const resetMovieDetails = () => {
    setTitle("");
    setUrl("");
    setDescription("")
  };

  const addWatchedMovie = e => {
    let watchedMovies = localStorage.getItem('movies-watched') || [];
    var movies = getAllMovies();
    const addedMovieToWatch= movies.filter(i => i.key === e.target.id);
    watchedMovies.push(...addedMovieToWatch);
    localStorage.setItem('movies-watched', JSON.stringify(watchedMovies));
    setRefreshMovie(!refreshMovie);
  }

  const getWatchedMovies = () => {
    const movies =  getWatchedMovieList();
    return movies && movies.map(movie => <MovieList movie={movie} removeWatchedMovie={removeWatchedMovie } />);
  };

  const removeWatchedMovie = e =>  {
    const key = e.target.id;
    var movies = getWatchedMovieList();
    const watchedMovies = movies.filter(movie =>  movie.key !== key);
    localStorage.setItem('movies-watched', JSON.stringify(watchedMovies));
    setRefreshMovie(!refreshMovie);
  }
  
  const getMovies = () => {
    let movieList = getAllMovies();
    return movieList.map(movie => <MovieList movie={movie} allMovies={true} addWatchedMovie={addWatchedMovie} />);  
  };

  const movieWatchList = getMovies();
  const movieWatched = getWatchedMovies();
  
    return (
        <div className="App">
        <h1>Codest Movies!</h1>
        <h1>Add movie!</h1>
        <b>TITLE:<br /><input type="text" onChange={e => setTitle(e.target.value)}  /></b><br />
        <b>IMAGE URL:<br /><input type="text" onChange={e => setUrl(e.target.value)}  /></b><br />
        <b>COMMENT:<br /><input type="text" onChange={e => setDescription(e.target.value)} /></b><br />
       <input type="button" onClick={addMovie} value="ADD MOVIE" />
       <h1>Watchlist:</h1>
        {movieWatchList}
        <h1>Already watched:</h1>
        {movieWatched}
      </div>
    )
};

export default Movies;