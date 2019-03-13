import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) =>
          <div key={actor.name}> {actor.name}
          <br />
          <p>Movies: </p><ul>{actor.movies.map(m => <li key={m}>{m}</li>)}</ul>
          </div>
        )}
    </div>
  );
};

export default Actors;
