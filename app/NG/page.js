"use client";
import React, { useState } from 'react';
import Header from "./Header.js";
import Movie from "./movie_row.js";
import { movie_list } from "./dumy_data.js";
import "./grid.css";
import DeleteComponent from "./DeleteComponent.js";
import Footer from "./Footer.js";



const Page = () => {
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
          year={item.year}
          movie={item} 
          discriptions={item.description}
          onclick={() => handleDelete(item.id)}        
          onLikeDislike={sortMoviesByLikes}
        />
      ))}
  
    </div>
  );
};

export default Page;


