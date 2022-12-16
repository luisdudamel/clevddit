import { useState } from "react";
import Button from "../Button/Button";
import "./LoginRegisterForm.scss";

const LoginRegisterForm = (): JSX.Element => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("asdasd");
  };

  return (
    <>
      <div className="login-form__container">
        <div className="logo-container">
          <img
            className="login-form--logo"
            src="img/cleverpy-logo.png"
            alt="Cleverpy company logo"
          />
        </div>
        <form
          onSubmit={handleLoginSubmit}
          className="login-form"
          action="submit"
        >
          <label hidden htmlFor="username" id="username">
            Username
          </label>
          <input
            className="login-form--input"
            placeholder="Username"
            type="text"
            name="username"
            id="username"
          />
          <label hidden htmlFor="password" id="password">
            Password
          </label>
          <input
            className="login-form--input"
            placeholder="Password"
            type="text"
            name="password"
            id="password"
          />
          <Button disabled={isButtonDisabled} type="submit" text="Login" />
        </form>
      </div>
    </>
  );
};

export default LoginRegisterForm;
