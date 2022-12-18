import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import PostPage from "./PostPage";

let mockId = "12";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),

  useParams: () => ({
    postId: mockId,
  }),
}));

describe("Given a PostPage function", () => {
  describe("When it's called", () => {
    test("Then it should render an image with the alternative text `Edit icon`", async () => {
      const expectedEditAlternativeText = "Edit Icon";
      const expectedRole = "progressbar";

      render(
        <Provider store={store}>
          <PostPage />
        </Provider>
      );

      await waitForElementToBeRemoved(screen.queryByRole(expectedRole));

      await waitFor(() => {
        const editButton = screen.getByAltText(expectedEditAlternativeText);
        expect(editButton).toBeInTheDocument();
      });
    });
  });
});
