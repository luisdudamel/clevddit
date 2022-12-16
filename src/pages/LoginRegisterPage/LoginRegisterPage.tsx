import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import LoginRegisterForm from "../../components/LoginRegisterForm/LoginRegisterForm";
import { useAppSelector } from "../../redux/hooks";
import "./LoginRegisterPage.scss";

const LoginRegisterPage = (): JSX.Element => {
  const { pathname } = useLocation();
  const isLoading = useAppSelector((state) => state.ui.loading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="login-page">
          <h1 className="login-page__title">Welcome to clevddit!</h1>
          <LoginRegisterForm location={pathname} />
          <div className="login-page__links">
            <p>{pathname === "/login" ? "Not" : "Already"} a member?</p>
            <p>{pathname === "/login" ? "Sign up here" : "Go to login"}</p>
          </div>
        </main>
      )}
    </>
  );
};

export default LoginRegisterPage;
