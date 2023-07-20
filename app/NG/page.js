  "use client"
import React, { useState } from 'react';
import Header from "./header.js";
import Movie from "./movie_row.js";
import { movie_list } from "./dumy_data.js";
import "./grid.css";
import DeleteComponent from "./delete_component.js";

const App = () => {
  const [movies, setMovies] = useState(movie_list);

  const handleDelete = (movieId) => {
    const updatedMovies = movies.filter((movie) => movie.id !== movieId);
    setMovies(updatedMovies);
  };

  const sortMoviesByLikes = () => {
    
    const sortedByLikes = [...movies].sort((a, b) => b.votes - a.votes);
    setMovies(sortedByLikes);
  };
  
  return (
    <div>
      <Header />
      {movies.map((item) => (
        <Movie
          name1={item.movie}
          time={item.time}
          genre={item.genres}
          image={item.url}
          movie={item} 
          discriptions={item.description} 
          onclick={() => handleDelete(item.id)}
          onLikeDislike={sortMoviesByLikes}
        />
      ))}
    </div>
  );
};

export default App;

        
