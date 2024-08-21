// src/Blog.js
import React, { useState } from "react";
import AddPost from "./AddPost";
import PostList from "./PostList";
import "./Blog.css";

// NOTES:
// to start server (in root dir) : npm run server
//server runs on port 5001
// to end running server is "control" + c

// to find a still running server: lsof -i :5000
// to kill it: kill -9 7576
// that last number is the PID number. use correct one associated with the server to kill

const Blog = () => {
  const [refresh, setRefresh] = useState(false);

  const handleAddPost = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="blog">
      <h1>My Blog</h1>
      <AddPost onAdd={handleAddPost} />
      <PostList key={refresh} />
    </div>
  );
};

export default Blog;
