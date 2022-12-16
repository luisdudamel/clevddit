import LoginRegisterForm from "../../components/LoginRegisterForm/LoginRegisterForm";
import "./LoginRegisterPage.scss";

const LoginRegisterPage = (): JSX.Element => {
  return (
    <main className="login-page">
      <h1 className="login-page__title">Welcome to clevddit!</h1>
      <LoginRegisterForm />
    </main>
  );
};

export default LoginRegisterPage;
