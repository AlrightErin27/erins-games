import "./Home.css";
import Resume from "../../images/Resume.1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <img src={Resume} alt="Resume" height="100%" width="105%" />

      <div className="link-cont">
        <div className="github-cont">
          <Link to="https://github.com/AlrightErin27" target="_blank">
            <div className="github-icon" />
          </Link>
          github
        </div>

        <div className="linkedin-cont">
          <Link
            to="https://www.linkedin.com/in/erin-van-brunt/"
            target="_blank"
          >
            <div className="linkedin-icon" />
          </Link>
          linkedin
        </div>

        <div className="medium-cont">
          <Link to="https://medium.com/@erinmontybruce" target="_blank">
            <div className="medium-icon" />
          </Link>
          Medium Blog
        </div>
      </div>
    </div>
  );
}
