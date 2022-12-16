import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginRegisterForm from "./LoginRegisterForm";

describe("Given a LoginRegisterForm function", () => {
  describe("When called", () => {
    test("Then it should render an image with the alternative text `Cleverpy company logo`", () => {
      const expectedAlternativeLogo = "Cleverpy company logo";

      render(<LoginRegisterForm />);

      const logoImage = screen.getByAltText(expectedAlternativeLogo);

      expect(logoImage).toBeInTheDocument();
    });

    test("Then it should render a disabled button with the text `Login`", () => {
      const expectedButtonText = "Login";

      render(<LoginRegisterForm />);

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

      render(<LoginRegisterForm />);
      const usernameInput = screen.getAllByRole("textbox");

      await userEvent.type(usernameInput[0], mockUsername);
      await userEvent.type(usernameInput[1], mockPassword);

      const disabledButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(disabledButton).toBeEnabled();
    });
  });
});
