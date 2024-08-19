import "./Home.css";
import { Link } from "react-router-dom";

export default function Icon({ website }) {
  const downloadFile = () => {
    const el = document.createElement("a");
    el.href = website.pdf;
    el.download = "ErinVanBruntResume.pdf";
    document.body.appendChild(el);
    el.click();
  };
  return (
    <div className="icon">
      <Link
        to={website.url}
        target={!website.pdf ? `_blank` : null}
        onClick={website.pdf ? downloadFile : null}
      >
        <div
          className="icon-img"
          style={{ backgroundImage: `url(${website.img})` }}
        />
        <p>{website.name}</p>
      </Link>
    </div>
  );
}
