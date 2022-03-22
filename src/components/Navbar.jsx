import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink
        to="/"
        className={({ isActive }) => `nav-link ${isActive && "active"}`}
      >
        Go Home
      </NavLink>
      <NavLink
        to="/films"
        className={({ isActive }) => `nav-link ${isActive && "active"}`}
      >
        View Films
      </NavLink>
      <NavLink
        to="/people"
        className={({ isActive }) => `nav-link ${isActive && "active"}`}
      >
        View People
      </NavLink>
    </div>
  );
};

export default Navbar;
