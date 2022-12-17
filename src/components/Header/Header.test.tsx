import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header function", () => {
  describe("When invoked", () => {
    test("Then it should render an image with the alternative text `Clverpy pink logo`", () => {
      const expectedLogoAlternativeText = "Cleverpy pink logo";

      render(<Header />);

      const headerLogo = screen.getByAltText(expectedLogoAlternativeText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
