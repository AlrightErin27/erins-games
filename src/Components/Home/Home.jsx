import "./Home.css";
import Icon from "./Icon";
import LinkedinIcon from "../../images/icons/linkedin.png";
import GithubIcon from "../../images/icons/github.png";
import MediumIcon from "../../images/icons/medium.png";
import DownLoadIcon from "../../images/icons/download.png";
import ResumeIcon from "../../images/icons/resumeicon.png";
import ResumePDF from "../../images/resume/ErinVanBruntResumeAug2024.pdf";

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
    {
      name: "resume",
      url: "/resume",
      img: ResumeIcon,
      pdf: null,
    },
  ];

  return (
    <div className="Home">
      <div className="download-cont"></div>

      <div className="background">
        <div className="spacer"></div>
        <div className="icon-cont">
          <Icon website={websites[4]} />
          <Icon website={websites[3]} />
          <Icon website={websites[0]} />
          <Icon website={websites[1]} />
          <Icon website={websites[2]} />
        </div>
      </div>
    </div>
  );
}
