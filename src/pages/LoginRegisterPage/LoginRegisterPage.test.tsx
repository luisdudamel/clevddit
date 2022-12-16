import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginRegisterPage from "./LoginRegisterPage";

let mockPath: string;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: mockPath }),
}));

describe("Given a LoginRegisterPage function", () => {
  describe("When called", () => {
    test("Then it should render the text `Not a member?` and the text `Sign up here`", () => {
      const expectedMemberText = "Not a member?";
      const expectedSignUpText = "Sign up here";

      mockPath = "/login";

      render(
        <BrowserRouter>
          <LoginRegisterPage />
        </BrowserRouter>
      );

      const memberText = screen.getByText(expectedMemberText);
      const signUpText = screen.getByText(expectedSignUpText);

      expect(memberText).toBeInTheDocument();
      expect(signUpText).toBeInTheDocument();
    });
  });
});
