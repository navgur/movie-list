import React, { useState } from 'react';

const LikeDislikeComponent = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', likes: 0, dislikes: 0 },
    { id: 2, name: 'Item 2', likes: 0, dislikes: 0 },
    { id: 3, name: 'Item 3', likes: 0, dislikes: 0 },
  ]);

  const handleLike = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  const handleDislike = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, dislikes: item.dislikes + 1 } : item
      )
    );
  };

  const sortItems = (criterion) => {
    setItems((prevItems) => [...prevItems].sort((a, b) => b[criterion] - a[criterion]));
  };

  return (
    <div>
      <button onClick={() => sortItems('likes')}>Sort by Likes</button>
      <button onClick={() => sortItems('dislikes')}>Sort by Dislikes</button>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleLike(item.id)}>Like</button>
          <span>{item.likes}</span>
          <button onClick={() => handleDislike(item.id)}>Dislike</button>
          <span>{item.dislikes}</span>
        </div>
      ))}
    </div>
  );
};

export default LikeDislikeComponent;

