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

  // console.log("IMG", authorImg.image);
  return (
    <div className="blog">
      <div className="title-cont">
        <div className="title">
          <a href="https://medium.com/@erinmontybruce" target="_blank">
            Erin's Medium Blog
          </a>

          <img src={`${authorImg}`} className="author-img" />
        </div>
      </div>

      {posts.map((post) => (
        <div className="posts" key={post.guid}>
          <h2>{post.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}
