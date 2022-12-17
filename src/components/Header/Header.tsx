import "./Header.scss";

const Header = (): JSX.Element => {
  return (
    <header className="header-container">
      <img
        className="header-logo"
        src="img/cleverpy-logo.png"
        alt="Cleverpy pink logo"
      />
    </header>
  );
};

export default Header;
