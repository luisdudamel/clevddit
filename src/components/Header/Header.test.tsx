import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Header from "./Header";
import userEvent from "@testing-library/user-event";

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
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const headerLogo = screen.getByAltText(expectedLogoAlternativeText);

      expect(headerLogo).toBeInTheDocument();
    });

    test("Then it should render the text `Posts` indicating the current page", () => {
      const expectedPostsNavlinkText = "Posts";

      render(
        <MemoryRouter initialEntries={["/home"]}>
          <Header />
        </MemoryRouter>
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
        <MemoryRouter initialEntries={["/users"]}>
          <Header />
        </MemoryRouter>
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
        <BrowserRouter>
          <Header />
        </BrowserRouter>
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
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const logoutText = screen.getByText(expectedLogoutText);
      await userEvent.click(logoutText);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
