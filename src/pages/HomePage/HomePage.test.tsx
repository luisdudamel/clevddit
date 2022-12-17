import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import HomePage from "./HomePage";

describe("Given a HomePage function", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text `Posts`", () => {
      const expectedHeadingText = "Posts";

      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );

      const postsHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(postsHeading).toBeInTheDocument();
    });
  });
});
