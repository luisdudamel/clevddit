import { NavLink } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import "./Header.scss";

const Header = (): JSX.Element => {
  return (
    <header className="header-container">
      <img
        className="header-logo"
        src="img/cleverpy-logo.png"
        alt="Cleverpy pink logo"
      />
      <div className="navlink-container">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navlink--active" : "navlink"
          }
          to={"/home"}
        >
          Posts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navlink--active" : "navlink"
          }
          to={"/users"}
        >
          Users
        </NavLink>
      </div>
      <Hamburger />
    </header>
  );
};

export default Header;
