import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
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

  describe("When it's called and the pathname is `/users`", () => {
    test("Then it should render a heading with the text `Users`", () => {
      const expectedHeadingText = "Users";

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/users"]}>
            <HomePage />
          </MemoryRouter>
        </Provider>
      );

      const postsHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(postsHeading).toBeInTheDocument();
    });
  });
});
