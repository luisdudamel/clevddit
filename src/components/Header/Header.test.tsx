import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Header from "./Header";

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
});
