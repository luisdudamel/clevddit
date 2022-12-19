import { useState } from "react";
import "./Hamburger.scss";

const Hamburger = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        />
        <div className="hamburger__bread--top"></div>
        <div className="hamburger__meat"></div>
        <div className="hamburger__bread--bottom"></div>
      </div>
      <div className={`hamburger-menu${isMenuOpen ? "--open" : ""}`}></div>
    </>
  );
};

export default Hamburger;
