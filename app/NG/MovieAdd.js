import React, { useState } from 'react';

const MovieAdd = () => {
  const [movieTitle, setMovieTitle] = useState('');

  const handleMovieTitleChange = (e) => {
    setMovieTitle(e.target.value);
  };

  const handleAddMovie = () => {
    console.log('Adding movie:', movieTitle);
    setMovieTitle('');
  };

  return (
    <div>
      <h2>Add a Movie</h2>
      <input
        type="text"
        value={movieTitle}
        onChange={handleMovieTitleChange}
        placeholder="Enter movie title"
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default MovieAdd;

