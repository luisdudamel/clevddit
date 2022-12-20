import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import HomePage from "./HomePage";

describe("Given a HomePage function", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text `Posts`", () => {
      const expectedHeadingText = "Posts";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      );

      const postsHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(postsHeading).toBeInTheDocument();
    });
  });
});
