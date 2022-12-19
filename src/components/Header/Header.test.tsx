import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Header from "./Header";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Header function", () => {
  describe("When invoked", () => {
    test("Then it should render an image with the alternative text `Cleverpy pink logo`", () => {
      const expectedLogoAlternativeText = "Cleverpy pink logo";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const headerLogo = screen.getByAltText(expectedLogoAlternativeText);

      expect(headerLogo).toBeInTheDocument();
    });

    test("Then it should render the text `Posts` indicating the current page", () => {
      const expectedPostsNavlinkText = "Posts";

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/home"]}>
            <Header />
          </MemoryRouter>
        </Provider>
      );

      const postNavlink = screen.getByRole("link", {
        name: expectedPostsNavlinkText,
      });

      debugger;

      expect(postNavlink).toHaveAttribute("aria-current", "page");
    });

    test("Then it should render the text `Users` indicating the current page", () => {
      const expectedUsersNavlinkText = "Users";

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/users"]}>
            <Header />
          </MemoryRouter>
        </Provider>
      );

      const usersNavlink = screen.getByRole("link", {
        name: expectedUsersNavlinkText,
      });

      expect(usersNavlink).toHaveAttribute("aria-current", "page");
    });
  });

  describe("When invoked and the user clicks on the button with the text `Logout icon`", () => {
    test("Then it should call navigate", async () => {
      const expectedLogoutText = "Logout icon";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const logoutButton = screen.getByRole("button", {
        name: expectedLogoutText,
      });

      await userEvent.click(logoutButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When invoked and the user clicks on the text `Logout`", () => {
    test("Then it should call navigate", async () => {
      const expectedLogoutText = "Logout";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const logoutText = screen.getByText(expectedLogoutText);
      await userEvent.click(logoutText);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
