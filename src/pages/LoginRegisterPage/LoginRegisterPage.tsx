import { Link, useLocation } from "react-router-dom";
import Feedback from "../../components/Feedback/Feedback";
import LoginRegisterForm from "../../components/LoginRegisterForm/LoginRegisterForm";
import { useAppSelector } from "../../redux/hooks";
import "./LoginRegisterPage.scss";

const LoginRegisterPage = (): JSX.Element => {
  const { pathname } = useLocation();
  const isLoading = useAppSelector((state) => state.ui.loading);

  return (
    <>
      {isLoading ? (
        <Feedback userMessage="" />
      ) : (
        <main className="login-page">
          <h1 className="login-page__title">Welcome to clevddit!</h1>
          <LoginRegisterForm location={pathname} />
          <div className="login-page__links__container">
            <p>{pathname === "/login" ? "Not " : "Already "}a member?</p>
            <p>
              {pathname === "/login" ? (
                <Link className="login-page__links__text" to={"/register"}>
                  Sign up here
                </Link>
              ) : (
                <Link className="login-page__links__text" to={"/login"}>
                  Go to login
                </Link>
              )}
            </p>
          </div>
        </main>
      )}
    </>
  );
};

export default LoginRegisterPage;
