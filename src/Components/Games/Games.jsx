import "./Games.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Games() {
  return (
    <div>
      Games
      <ul>
        <CustomLink to="/concentration1">Concentration1</CustomLink>
        <CustomLink to="/noughts-&-crosses">Noughts & Crosses</CustomLink>
        <CustomLink to="/crossword">Crossword</CustomLink>
        <CustomLink to="/ice-and-fire">Ice And Fire</CustomLink>
      </ul>
    </div>
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
