import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import LoginRegisterForm from "./LoginRegisterForm";

describe("Given a LoginRegisterForm function", () => {
  describe("When called", () => {
    test("Then it should render an image with the alternative text `Cleverpy company logo`", () => {
      const expectedAlternativeLogo = "Cleverpy company logo";

      render(
        <BrowserRouter>
          <LoginRegisterForm location="login" />
        </BrowserRouter>
      );

      const logoImage = screen.getByAltText(expectedAlternativeLogo);

      expect(logoImage).toBeInTheDocument();
    });

    test("Then it should render a disabled button with the text `Login`", () => {
      const expectedButtonText = "Login";

      render(
        <BrowserRouter>
          <LoginRegisterForm location="login" />
        </BrowserRouter>
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

      render(
        <BrowserRouter>
          <LoginRegisterForm location="login" />
        </BrowserRouter>
      );
      const usernameInput = screen.getAllByRole("textbox");

      await userEvent.type(usernameInput[0], mockUsername);
      await userEvent.type(usernameInput[1], mockPassword);

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

      render(
        <BrowserRouter>
          <LoginRegisterForm location="login" />
        </BrowserRouter>
      );
      const usernameInput = screen.getAllByRole("textbox");

      await userEvent.type(usernameInput[0], mockUsername);
      await userEvent.type(usernameInput[1], mockPassword);

      const disabledButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(disabledButton);

      expect(usernameInput[0].textContent).toBe(expectedUsernameInput);
      expect(usernameInput[1].textContent).toBe(expectedPasswordInput);
    });
  });
});
