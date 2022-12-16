import "./Loader.scss";

const Loader = (): JSX.Element => {
  return (
    <div role="progressbar" aria-busy="true" className="loader-container">
      <div className="loader-dot"></div>
      <div className="loader-dot"></div>
      <div className="loader-dot"></div>
    </div>
  );
};

export default Loader;
