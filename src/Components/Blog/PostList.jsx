// src/components/PostList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:5001/posts");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <img src={post.image} alt={post.title} />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
