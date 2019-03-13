import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) =>
            <div key={movie.title}>
            <br />
            <h3>Title: {movie.title}</h3>
            <p>Time: {movie.time} minutes</p>
            <p>Genres: </p><ul>{movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
            </div>
          )}
    </div>
  );
};

export default Movies;
