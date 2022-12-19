import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserState } from "../../interfaces/Users";
import "./Hamburger.scss";

interface HamburgerProps {
  currentUser: UserState;
  logout: () => void;
}

const Hamburger = ({ currentUser, logout }: HamburgerProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="hamburger">
        <label htmlFor="hamburger-menu"></label>
        <input
          type="checkbox"
          onChange={openMenu}
          className="hamburger-menu__toggler"
          id="hamburger-menu"
          name="hamburger-menu"
          readOnly
          checked={isMenuOpen}
        />
        <div className="hamburger__bread--top"></div>
        <div className="hamburger__meat"></div>
        <div className="hamburger__bread--bottom"></div>
      </div>
      <div className={`hamburger-menu${isMenuOpen ? "--open" : ""}`}>
        <div className="hamburger-menu__blur"></div>
        <div className="hamburger__navlink-container">
          <NavLink
            onClick={openMenu}
            className={({ isActive }) =>
              isActive ? "navlink--active" : "navlink"
            }
            to={"/home"}
          >
            Posts
          </NavLink>
          <NavLink
            onClick={openMenu}
            className={({ isActive }) =>
              isActive ? "navlink--active" : "navlink"
            }
            to={"/users"}
          >
            Users
          </NavLink>
        </div>
        <div className="hamburger__logout-container">
          <p className="user-greeting">Hi, {currentUser.username}!</p>
          <div className="logout-section">
            <p onClick={logout} className="logout__text--hamburger">
              Logout
            </p>
            <button onClick={logout} className="logout__button">
              <img
                className="logout__icon"
                src="/img/icons/logout.svg"
                alt="Logout icon"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
