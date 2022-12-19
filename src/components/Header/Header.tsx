import { NavLink, useNavigate } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import "./Header.scss";

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className="header__container">
      <img
        className="header__logo"
        src="/img/cleverpy-logo.png"
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
      <div className="logout__container">
        <p onClick={() => navigate("/login")} className="logout__text">
          Logout
        </p>
        <button onClick={() => navigate("/login")} className="logout__button">
          <img
            className="logout__icon"
            src="/img/icons/logout.svg"
            alt="Logout icon"
          />
        </button>
      </div>
      <Hamburger />
    </header>
  );
};

export default Header;
