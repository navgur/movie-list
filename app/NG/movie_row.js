import React from 'react';
import DeleteComponent from "./delete_component.js";
import LikeDislikeComponent from "./like_dislike.js";

const Movie = (props) => {
  return (
    <div className="movie_row">
      <div className="col1">
        <div className="col2">
          <img src={props.image} alt="Movie Poster" />
        </div>
        <div className="col3">
          <div className="col3_1">
            <p>{props.name1}</p>
            <p2>{props.time} | {props.genre}</p2>
            <h4>Description</h4>
            <p3>{props.discriptions}</p3>
          </div>
          <div className="action_row">
            <DeleteComponent onclick={props.onclick} />
            <LikeDislikeComponent
              movie={props.movie} 
              onLikeDislike={props.onLikeDislike}
                handleLike={props.handleLike}
                handleDislike={props.handleDislike}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;

