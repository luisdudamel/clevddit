import LoginRegisterForm from "../../components/LoginRegisterForm/LoginRegisterForm";
import "./LoginRegisterPage.scss";

const LoginRegisterPage = (): JSX.Element => {
  return (
    <main className="login-page">
      <h1 className="login-page__title">Welcome to clevddit!</h1>
      <LoginRegisterForm />
      <div className="login-page__links">
        <p>Not a member?</p>
        <p>Sign up here</p>
      </div>
    </main>
  );
};

export default LoginRegisterPage;
