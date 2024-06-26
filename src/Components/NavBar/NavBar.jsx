import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="NavBar">
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/noughts-&-crosses">Noughts & Crosses</CustomLink>
        <CustomLink to="/concentration">Concentration</CustomLink>
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
