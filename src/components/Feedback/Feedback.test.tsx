import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import Feedback from "./Feedback";

describe("Given a Feedback function", () => {
  describe("When invoked", () => {
    test("Then it should render a progressbar role element", () => {
      const expectedRole = "progressbar";

      render(
        <Provider store={store}>
          <Feedback />
        </Provider>
      );

      const loader = screen.getByRole(expectedRole);

      expect(loader).toBeInTheDocument();
    });
  });
});
