import { render, screen } from "@testing-library/react";
import LoginRegisterPage from "./LoginRegisterPage";

describe("Given a LoginRegisterPage function", () => {
  describe("When called", () => {
    test("Then it should render the text `Not a member?` and the text `Sign up here`", () => {
      const expectedMemberText = "Not a member?";
      const expectedSignUpText = "Sign up here";

      render(<LoginRegisterPage />);

      const memberText = screen.getByText(expectedMemberText);
      const signUpText = screen.getByText(expectedSignUpText);

      expect(memberText).toBeInTheDocument();
      expect(signUpText).toBeInTheDocument();
    });
  });
});
