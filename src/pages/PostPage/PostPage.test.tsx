import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import PostPage from "./PostPage";
import userEvent from "@testing-library/user-event";

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

  describe("When it's called and the url param is 12", () => {
    test("Then it should render a heading with the text `We are going to the moon!`", async () => {
      const expectedHeading = "We are going to the moon!";
      const expectedRole = "progressbar";

      render(
        <Provider store={store}>
          <PostPage />
        </Provider>
      );

      await waitForElementToBeRemoved(screen.queryByRole(expectedRole));

      await waitFor(() => {
        const postHeading = screen.getByRole("heading", {
          name: expectedHeading,
        });
        expect(postHeading).toBeInTheDocument();
      });
    });

    describe("And the user clicks on the image with the alternative text `Edit Icon`", () => {
      test("Then it should render a button with the text `Edit`", async () => {
        const expectedButtonText = "Edit";
        const expectedRole = "progressbar";
        const expectedEditIconAlternativeText = "Edit Icon";

        render(
          <Provider store={store}>
            <PostPage />
          </Provider>
        );

        await waitForElementToBeRemoved(screen.queryByRole(expectedRole));

        const editImage = screen.getByAltText(expectedEditIconAlternativeText);
        await userEvent.click(editImage);

        await waitFor(() => {
          const editButton = screen.getByRole("button", {
            name: expectedButtonText,
          });

          expect(editButton).toBeInTheDocument();
        });
      });
    });
  });
});
