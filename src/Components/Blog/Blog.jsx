import "./Blog.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [authorImg, setAuthorImg] = useState(null);

  const getPostData = () => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@erinmontybruce"
      )
      .then((res) => {
        setPosts(res.data.items);
        setAuthorImg(res.data.feed.image);
      })
      .catch((error) => {
        console.error("Error using axios to fetch blog:", error);
      });
  };
  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="blog">
      <a
        href="https://medium.com/@erinmontybruce"
        target="_blank"
        rel="noreferrer"
        className="title"
      >
        <div>
          Erin's Medium Blog
          <img src={`${authorImg}`} alt="author img" className="author-img" />
        </div>
      </a>

      {posts.map((post) => (
        <div className="posts" key={post.guid}>
          <h2>{post.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
          <a href={post.link} target="_blank" rel="noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}
