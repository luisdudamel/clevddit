import { useLocation } from "react-router-dom";
import LoginRegisterForm from "../../components/LoginRegisterForm/LoginRegisterForm";
import "./LoginRegisterPage.scss";

const LoginRegisterPage = (): JSX.Element => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <main className="login-page">
      <h1 className="login-page__title">Welcome to clevddit!</h1>
      <LoginRegisterForm location={pathname} />
      <div className="login-page__links">
        <p>{pathname === "/login" ? "Not" : "Already"} a member?</p>
        <p>{pathname === "/login" ? "Sign up here" : "Go to login"}</p>
      </div>
    </main>
  );
};

export default LoginRegisterPage;
