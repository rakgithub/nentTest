import React from 'react';

const WatchedMovies = props => {
    const { movie: { image, key, comment, title }, 
            removeWatchedMovie, addWatchedMovie, allMovies = false } = props;
    return(
        <div className="watched">
        <div>
          <img src={image} height="100px" />
        </div>
        <span>
          <a className="movie-watched" href="#" id={key} onClick={allMovies ? addWatchedMovie : removeWatchedMovie}>
            {title}
          </a>
        </span>
        <br />
        <span>
          {comment}
        </span>
        <br />
        <br />
      </div>
    )
};

export default WatchedMovies;