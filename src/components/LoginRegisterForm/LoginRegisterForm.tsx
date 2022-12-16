import { useEffect, useState } from "react";
import { UserCredentials } from "../../interfaces/UserCredentials";
import Button from "../Button/Button";
import "./LoginRegisterForm.scss";

const LoginRegisterForm = (): JSX.Element => {
  const formInitialState: UserCredentials = {
    username: "",
    password: "",
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [formData, setFormData] = useState<UserCredentials>(formInitialState);

  useEffect(() => {
    if (formData.password !== "" && formData.username !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [formData.password, formData.username]);

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFormData(formInitialState);
  };

  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
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
            onChange={changeData}
            value={formData.username}
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
            onChange={changeData}
            value={formData.password}
          />
          <Button disabled={isButtonDisabled} type="submit" text="Login" />
        </form>
      </div>
    </>
  );
};

export default LoginRegisterForm;
