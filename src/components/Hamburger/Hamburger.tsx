import "./Hamburger.scss";

const Hamburger = (): JSX.Element => {
  return (
    <>
      <div className="hamburger">
        <label htmlFor="hamburger-menu"></label>
        <input
          type="checkbox"
          className="hamburger-menu__toggler"
          id="hamburger-menu"
          name="hamburger-menu"
          readOnly
        />
        <div className="hamburger__bread--top"></div>
        <div className="hamburger__meat"></div>
        <div className="hamburger__bread--bottom"></div>
      </div>
    </>
  );
};

export default Hamburger;
