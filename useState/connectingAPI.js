import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

function Reddit() {
  const [posts, setPosts]= useState([]);

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
        .map(obj => obj.data);
      
      setPosts(newPosts);
      })
  })

  return (
    <div> 
      <h1> /r/reactjs </h1>
      <ul>
        {posts.map(post => (
          <li key={posts.id}>{post.title} {post.name} {post.score}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Reddit />, document.getElementById("root"));