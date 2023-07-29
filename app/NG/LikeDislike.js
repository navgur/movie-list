const LikeDislike = ({ movie, onLikeDislike }) => {

  const handleLike = () => {
    (movie.votes = movie.votes + 1);
    onLikeDislike();
  };
 
  const handleDislike = () => {
    (movie.votes = movie.votes - 1);
    onLikeDislike();
  };

  return (
    <div>
      <div>
        <img className="like" src="like.png" alt="Like" onClick={handleLike}/> 
      </div>
      <div className="Circle">
        <div className="count">{movie.votes}</div>
      </div>
      <div>
        <img className="dislike" src="dislike.png" alt="Dislike" onClick={handleDislike}/>
      </div>
    </div>
  );
};

export default LikeDislike;

