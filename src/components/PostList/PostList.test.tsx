import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockTwoPosts } from "../../mocks/mockPosts";
import { store } from "../../redux/store/store";
import PostList from "./PostList";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a PostList function", () => {
  describe("When invoked with 2 posts with titles `ChatGPT is killing it` and `Copilot is dying`", () => {
    test("Then it should render 2 headings with the texts `ChatGPT is killing it` and `Copilot is dying`", () => {
      const expectedChatHeading = "ChatGPT is killing it";
      const expectedCopilotHeading = "Copilot is dying";

      render(
        <Provider store={store}>
          <PostList postList={mockTwoPosts} />
        </Provider>
      );

      const chatHeading = screen.getByRole("heading", {
        name: expectedChatHeading,
      });
      const copilotHeading = screen.getByRole("heading", {
        name: expectedCopilotHeading,
      });

      expect(chatHeading).toBeInTheDocument();
      expect(copilotHeading).toBeInTheDocument();
    });
  });

  describe("And the user clicks on one image with the alternative text `Delete icon`", () => {
    test("Then it should call dispatch", async () => {
      const expectedAlernativeText = "Delete icon";

      render(
        <Provider store={store}>
          <PostList postList={mockTwoPosts} />
        </Provider>
      );

      const deleteIcon = screen.getAllByAltText(expectedAlernativeText);
      await userEvent.click(deleteIcon[0]);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
