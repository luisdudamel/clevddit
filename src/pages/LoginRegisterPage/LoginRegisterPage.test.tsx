import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import LoginRegisterPage from "./LoginRegisterPage";

let mockPath: string;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: mockPath }),
}));

describe("Given a LoginRegisterPage function", () => {
  describe("When called and the path is `/login`", () => {
    test("Then it should render the text `Not a member?` and the text `Sign up here`", () => {
      const expectedMemberText = "Not a member?";
      const expectedSignUpText = "Sign up here";

      mockPath = "/login";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginRegisterPage />
          </BrowserRouter>
        </Provider>
      );

      const memberText = screen.getByText(expectedMemberText);
      const signUpText = screen.getByText(expectedSignUpText);

      expect(memberText).toBeInTheDocument();
      expect(signUpText).toBeInTheDocument();
    });
  });

  describe("When called and the path is `/register`", () => {
    test("Then it should render the text `Not a member?` and the text `Sign up here`", () => {
      const expectedMemberText = "Already a member?";
      const expectedSignUpText = "Go to login";

      mockPath = "/register";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginRegisterPage />
          </BrowserRouter>
        </Provider>
      );

      const memberText = screen.getByText(expectedMemberText);
      const signUpText = screen.getByText(expectedSignUpText);

      expect(memberText).toBeInTheDocument();
      expect(signUpText).toBeInTheDocument();
    });
  });
});
