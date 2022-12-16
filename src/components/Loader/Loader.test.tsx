import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given a Loader function", () => {
  describe("When invoked", () => {
    test("Then it should render a progressbar role element", () => {
      const expectedRole = "progressbar";

      render(<Loader />);

      const loader = screen.getByRole(expectedRole);

      expect(loader).toBeInTheDocument();
    });
  });
});
