import "./Home.css";
import Resume from "../../images/Resume.1.png";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import LinkedinIcon from "../../images/linkedin.png";
import GithubIcon from "../../images/github.png";
import MediumIcon from "../../images/medium.png";
import DownLoadIcon from "../../images/download.png";
import ResumePDF from "../../images/Resume.pdf";

export default function Home() {
  const websites = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/erin-van-brunt/",
      img: LinkedinIcon,
      pdf: null,
    },
    {
      name: "github",
      url: "https://github.com/AlrightErin27",
      img: GithubIcon,
      pdf: null,
    },
    {
      name: "medium blog",
      url: "https://medium.com/@erinmontybruce",
      img: MediumIcon,
      pdf: null,
    },
    {
      name: "resume pdf",
      url: null,
      img: DownLoadIcon,
      pdf: ResumePDF,
    },
  ];

  return (
    <div className="Home">
      <div className="download-cont"></div>
      <img src={Resume} alt="Resume" height="118%" width="105%" />
      <div className="icon-cont">
        <Icon website={websites[3]} />
        <Icon website={websites[0]} />
        <Icon website={websites[1]} />
        <Icon website={websites[2]} />
      </div>
    </div>
  );
}
