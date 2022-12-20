import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import PostPage from "./DetailPage";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

let mockId = "12";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),

  useParams: () => ({
    postId: mockId,
  }),
}));

describe("Given a DetailPage function", () => {
  describe("When it's called", () => {
    test("Then it should render an image with the alternative text `Edit icon`", async () => {
      const expectedEditAlternativeText = "Edit Icon";
      const expectedRole = "progressbar";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PostPage />
          </Provider>
        </BrowserRouter>
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
        <BrowserRouter>
          <Provider store={store}>
            <PostPage />
          </Provider>
        </BrowserRouter>
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
          <BrowserRouter>
            <Provider store={store}>
              <PostPage />
            </Provider>
          </BrowserRouter>
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

    describe("And the user clicks on the image with the alternative text `Edit Icon`, and types the text `New title` on the Title input", () => {
      describe("And the user clicks on the edit button", () => {
        test("Then it should render a heading with the text `New Title`", async () => {
          const expectedButtonText = "Edit";
          const expectedRole = "progressbar";
          const expectedEditIconAlternativeText = "Edit Icon";
          const expectedTitleRole = "Title";
          const newTitle = "New Title";

          render(
            <BrowserRouter>
              <Provider store={store}>
                <PostPage />
              </Provider>
            </BrowserRouter>
          );

          await waitForElementToBeRemoved(screen.queryByRole(expectedRole));

          const editImage = screen.getByAltText(
            expectedEditIconAlternativeText
          );
          await userEvent.click(editImage);

          const editButton = screen.getByRole("button", {
            name: expectedButtonText,
          });

          const titleInput = screen.getByRole("textbox", {
            name: expectedTitleRole,
          });

          await userEvent.clear(titleInput);
          await userEvent.type(titleInput, newTitle);
          await userEvent.click(editButton);

          await waitFor(() => {
            screen.getByRole("heading", { name: newTitle });
          });
        });
      });
    });
  });
});
