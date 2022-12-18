import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import PostPage from "./PostPage";

describe("Given a PostPage function", () => {
  describe("When it's called", () => {
    test("Then it should render an image with the alternative text `Edit icon`", () => {
      const expectedEditAlternativeText = "Edit Icon";

      render(
        <Provider store={store}>
          <PostPage />
        </Provider>
      );

      const editButton = screen.getByAltText(expectedEditAlternativeText);

      expect(editButton).toBeInTheDocument();
    });
  });
});
