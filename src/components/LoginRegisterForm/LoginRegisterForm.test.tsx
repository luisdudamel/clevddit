import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import LoginRegisterForm from "./LoginRegisterForm";

describe("Given a LoginRegisterForm function", () => {
  describe("When called", () => {
    test("Then it should render an image with the alternative text `Cleverpy company logo`", () => {
      const expectedAlternativeLogo = "Cleverpy company logo";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginRegisterForm location="/login" />
          </BrowserRouter>
        </Provider>
      );

      const logoImage = screen.getByAltText(expectedAlternativeLogo);

      expect(logoImage).toBeInTheDocument();
    });

    test("Then it should render a disabled button with the text `Login`", () => {
      const expectedButtonText = "Login";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginRegisterForm location="/login" />
          </BrowserRouter>
        </Provider>
      );

      const disabledButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(disabledButton).toBeDisabled();
    });
  });

  describe("When called and the user enters username `admin` and password `admin`", () => {
    test("Then it should enable the button with the text `Login`", async () => {
      const expectedButtonText = "Login";
      const mockUsername = "admin";
      const mockPassword = "admin";
      const expectedUsernameRole = "username";
      const expectedPasswordLabel = "password";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginRegisterForm location="/login" />
          </BrowserRouter>
        </Provider>
      );
      const usernameInput = screen.getByRole("textbox", {
        name: expectedUsernameRole,
      });
      const passwordInput = screen.getByLabelText(expectedPasswordLabel);

      await userEvent.type(usernameInput, mockUsername);
      await userEvent.type(passwordInput, mockPassword);

      const disabledButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(disabledButton).toBeEnabled();
    });
  });
  describe("When called and the user enters username `admin` and password `admin` and clicks on the Login button", () => {
    test("Then the form inputs should be empty", async () => {
      const expectedButtonText = "Login";
      const expectedUsernameInput = "";
      const expectedPasswordInput = "";
      const mockUsername = "admin";
      const mockPassword = "admin";
      const expectedUsernameRole = "username";
      const expectedPasswordLabel = "password";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginRegisterForm location="/login" />
          </BrowserRouter>
        </Provider>
      );
      const usernameInput = screen.getByRole("textbox", {
        name: expectedUsernameRole,
      });
      const passwordInput = screen.getByLabelText(expectedPasswordLabel);

      await userEvent.type(usernameInput, mockUsername);
      await userEvent.type(passwordInput, mockPassword);
      const disabledButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(disabledButton);

      expect(usernameInput.textContent).toBe(expectedUsernameInput);
      expect(passwordInput.textContent).toBe(expectedPasswordInput);
    });
  });
});
