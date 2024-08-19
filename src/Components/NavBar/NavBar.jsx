import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./NavBar.css";

export default function Navbar({ handleShop, handleNoShop }) {
  return (
    <nav className="NavBar">
      <ul>
        <CustomLink to="/" onClick={handleNoShop}>
          Home
        </CustomLink>

        <CustomLink to="/blog" onClick={handleNoShop}>
          Blog
        </CustomLink>

        <CustomLink to="/games" onClick={handleNoShop}>
          Games
        </CustomLink>
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
