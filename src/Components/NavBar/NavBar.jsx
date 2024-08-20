import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

export default function Navbar() {
  const [selectGames, setSelectGames] = useState(false);
  const [select, setSelect] = useState("");
  const gamesLinkStr = ["Games", "[X]"];

  const handleSelectGames = () => {
    console.log("HI");
    setSelectGames(!selectGames);
    setSelect("games");
  };

  return (
    <nav className="NavBar">
      <ul>
        <CustomLink
          to="/"
          className={select !== "home" ? "link" : "select-link"}
          onClick={() => setSelect("home")}
        >
          Home
        </CustomLink>

        <CustomLink
          to="/blog"
          className={select !== "blog" ? "link" : "select-link"}
          onClick={() => setSelect("blog")}
        >
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
              <CustomLink
                to="concentration1"
                onClick={() => setSelect("game1")}
                className={select !== "game1" ? "link" : "select-link"}
              >
                Concentration1
              </CustomLink>
              <CustomLink
                to="memory"
                onClick={() => setSelect("game1.5")}
                className={select !== "game1.5" ? "link" : "select-link"}
              >
                Memory
              </CustomLink>
              <CustomLink
                to="noughts-&-crosses"
                onClick={() => setSelect("game2")}
                className={select !== "game2" ? "link" : "select-link"}
              >
                Noughts & Crosses
              </CustomLink>
              <CustomLink
                to="ice-and-fire"
                onClick={() => setSelect("game3")}
                className={select !== "game3" ? "link" : "select-link"}
              >
                Ice & Fire
              </CustomLink>
              <CustomLink
                to="crossword"
                onClick={() => setSelect("game4")}
                className={select !== "game4" ? "link" : "select-link"}
              >
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
