// src/components/AddPost.js
import React, { useState } from "react";
import axios from "axios";

const AddPost = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, image, content };
    await axios.post("http://localhost:5001/posts", newPost);
    onAdd();
    setTitle("");
    setImage("");
    setContent("");
  };

  return (
    <div className="add-post">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
