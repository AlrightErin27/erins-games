import "./Blog.css";
// import { useState, useEffect } from "react";
// import axios from "axios";
import erinPNG from "../../images/erin.png";
import accioGIF from "../../images/blog/giphs/accio.gif";
import ssAPI from "../../images/blog/mediumJson.png";
import ssCode1 from "../../images/blog/ssCode1.png";
import ssCode2 from "../../images/blog/ssCode2.png";
import goodLuckGIF from "../../images/blog/giphs/goodluck.gif";

export default function Blog() {
  return (
    <>
      <div className="blog">
        <a
          href="https://medium.com/@erinmontybruce"
          target="_blank"
          rel="noreferrer"
          className="title"
        >
          <div>
            Erin's Medium Blog
            <img src={`${erinPNG}`} alt="author img" className="author-img" />
          </div>
        </a>

        <div className="posts">
          <h2>AXIOS</h2>
          <img src={`${accioGIF}`} alt="accio" />
          <p>
            To use Axios to display my Medium Blog as an embedded feed in my
            portfolio site: <br />
            <br />
            1. “npm install axios” in command line- to store as a dependency in
            the react app <br />
            <br />
            2. Import useState, and useEffect from the react library <br />
            <br /> 3. Create a function that “gets” your medium feed API URL
            using
            https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@YOUR_USER_NAME_HERE
            <br />
            <br />
            4. Once your function gets the feed data from the API, “then” you
            set what you need for your page into state using useState. <br />
            <br />* For my project I needed my posts & the author’s image. To
            find the correct terminology needed to access this information I
            opened the API URL in my browser and inspected how it was written.
            <br />
            <br />
            As you can see in the pic below to get the image I needed to use the
            dot notation res (response) -> data -> feed -> image. This traverses
            the given object to result in the images’s string value, which was
            then set into state “setAuthorImg(res.data.feed.image);”
          </p>
          <img src={`${ssAPI}`} alt="screen shot" />
          <p>
            5. After .get & .then, .catch is needed to display an error messages
            to the console to conclude the function. <br />
            <br />
            6. useEffect is used to manage when the function runs- just on the
            pages first render.
          </p>
          <img src={`${ssCode1}`} alt="screen shot" />
          <p>
            7. To display your blog posts I simply mapped through the posts data
            I had saved in state, and used dot notation to access the key’s
            values that I wanted to be displayed.
          </p>
          <img src={`${ssCode2}`} alt="screen shot" />
          <p>
            Using the API to display your posts ensures that you will always
            have your blog’s current feed.
          </p>
          <img src={`${goodLuckGIF}`} alt="good luck" />
        </div>
        <a href="https://medium.com/@erinmontybruce/axios-48f3c8d7252b">
          Medium Link
        </a>
      </div>
    </>
  );
}
