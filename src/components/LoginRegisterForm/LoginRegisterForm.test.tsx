import { render, screen } from "@testing-library/react";
import LoginRegisterForm from "./LoginRegisterForm";

describe("Given a LoginRegisterForm function", () => {
  describe("When called", () => {
    test("Then it should render an image with the alternative text `Cleverpy company logo`", () => {
      const expectedAlternativeLogo = "Cleverpy company logo";

      render(<LoginRegisterForm />);

      const logoImage = screen.getByAltText(expectedAlternativeLogo);

      expect(logoImage).toBeInTheDocument();
    });
  });
});
