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
      <Hamburger />
    </header>
  );
};

export default Header;
