import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) =>
          <div key={director.name}> {director.name}
          <br />
          <p>Movies: </p><ul>{director.movies.map(m => <li key={m}>{m}</li>)}</ul>
          </div>
        )}
    </div>
  );
}

export default Directors
