import { NavLink, useNavigate } from "react-router-dom";
import { UserState } from "../../interfaces/Users";
import { logoutUserActionCreator } from "../../redux/feature/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Hamburger from "../Hamburger/Hamburger";
import "./Header.scss";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser: UserState = useAppSelector((state) => state.user);

  const logoutUser = () => {
    dispatch(logoutUserActionCreator());
    localStorage.removeItem("token");
    navigate("/login");
  };

  const goToTop = () => {
    navigate("/home");
    window.scrollTo(0, 0);
  };

  return (
    <header className="header__container">
      <button onClick={goToTop} className="header__logo__button">
        <img
          className="header__logo"
          src="/img/cleverpy-logo.png"
          alt="Cleverpy pink logo"
        />
      </button>

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
        <p className="user-greeting">Hi, {currentUser.username}!</p>|
        <p onClick={logoutUser} className="logout__text">
          Logout
        </p>
        <button onClick={logoutUser} className="logout__button">
          <img
            className="logout__icon"
            src="/img/icons/logout.svg"
            alt="Logout icon"
          />
        </button>
      </div>
      <Hamburger logout={logoutUser} currentUser={currentUser} />
    </header>
  );
};

export default Header;
