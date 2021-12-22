import { Link } from 'react-router-dom';
import './style.scss';
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__link" to="/">
        Home
      </Link>
      <Link className="navbar__link" to="/about">
        About
      </Link>
    </div>
  );
};
