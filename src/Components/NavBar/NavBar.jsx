import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

export default function Navbar() {
  const [selectGames, setSelectGames] = useState(false);
  const gamesLinkStr = ["Games", "[X]"];

  const handleSelectGames = () => {
    console.log("HI");
    setSelectGames(!selectGames);
  };

  return (
    <nav className="NavBar">
      <ul>
        <CustomLink to="/" className="link">
          Home
        </CustomLink>

        <CustomLink to="/blog" className="link">
          Blog
        </CustomLink>

        <div className="games-link-cont">
          <div
            className={!selectGames ? "link" : "games-link"}
            onClick={handleSelectGames}
          >
            {!selectGames ? gamesLinkStr[0] : gamesLinkStr[1]}
          </div>

          {!selectGames ? null : (
            <>
              <CustomLink to="concentration1" className="link">
                Concentration1
              </CustomLink>
              <CustomLink to="noughts-&-crosses" className="link">
                Noughts & Crosses
              </CustomLink>
              <CustomLink to="ice-and-fire" className="link">
                Ice & Fire
              </CustomLink>
              <CustomLink to="crossword" className="link">
                Crossword
              </CustomLink>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
