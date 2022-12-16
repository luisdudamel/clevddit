import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button function", () => {
  describe("When called with the text `Login`", () => {
    test("Then it should render a button, with the text `Login`", () => {
      const expectedButtonText = "Login";
      const buttonText = "Login";

      render(<Button text={buttonText} />);

      const loginButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(loginButton).toBeInTheDocument();
    });
  });
});
