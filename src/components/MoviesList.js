import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <>
        <h2>{movie.id}</h2>
        <Movie
        fetchMovieHandler={props.fetchMovieHandler}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.Date}
          openingText={movie.desc}
        />
        </>
      ))}
    </ul>
  );
};

export default MovieList;
