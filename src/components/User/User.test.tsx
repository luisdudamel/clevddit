import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockParzivalUser } from "../../mocks/mockUsers";
import User from "./User";

describe("Given a User function", () => {
  describe("When its invoked with an user with the username `Parzival` and name `Wade Watts`", () => {
    test("Then it should render a heading with the text `Parzival` and a headign with `Wade Watts`", () => {
      const expectedNameHeadingText = "Parzival";
      const expectedNameText = "Wade Watts";

      render(
        <BrowserRouter>
          <User user={mockParzivalUser} />
        </BrowserRouter>
      );

      const parzivalUserName = screen.getByRole("heading", {
        name: expectedNameHeadingText,
      });
      const parzivalName = screen.getByRole("heading", {
        name: expectedNameText,
      });

      expect(parzivalUserName).toBeInTheDocument();
      expect(parzivalName).toBeInTheDocument();
    });
  });
});
