import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockLoggedAdmin } from "../../mocks/mockUsers";
import Hamburger from "./Hamburger";
import userEvent from "@testing-library/user-event";

describe("Given a Hamburger function", () => {
  describe("When it's called with an user with username `admin` and the user clicks on the checkbox with the text `hamburger-menu`", () => {
    test("Then it should render a text with `Logout`", async () => {
      const expectedLogoutText = "Logout";

      render(
        <BrowserRouter>
          <Hamburger logout={jest.fn()} currentUser={mockLoggedAdmin} />
        </BrowserRouter>
      );

      const hamburgerCheckbox = screen.getByRole("checkbox");
      await userEvent.click(hamburgerCheckbox);

      const logoutText = screen.getByText(expectedLogoutText);

      expect(logoutText).toBeInTheDocument();
    });
  });
});
