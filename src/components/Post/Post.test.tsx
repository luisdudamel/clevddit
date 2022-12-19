import { render, screen } from "@testing-library/react";
import { mockPost } from "../../mocks/mockPosts";
import Post from "./Post";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("Given a Post function", () => {
  describe("When it's called with a post with title `ChatGPT is killing it`", () => {
    test("Then it should render a heading with the text `ChatGPT is killing it`", () => {
      const expectedHeadingText = "ChatGPT is killing it";

      render(
        <BrowserRouter>
          <Post deleteAction={() => {}} post={mockPost} />
        </BrowserRouter>
      );

      const postHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(postHeading).toBeInTheDocument();
    });
  });

  describe("When its called with a function and the user clicks on the image with the alternative text `Delete icon`", () => {
    test("Then it should call the received function", async () => {
      const expectedDeleteText = "Delete icon";
      const mockDeleteAction = jest.fn();

      render(
        <BrowserRouter>
          <Post deleteAction={mockDeleteAction} post={mockPost} />
        </BrowserRouter>
      );

      const deleteIcon = screen.getByAltText(expectedDeleteText);

      await userEvent.click(deleteIcon);

      expect(mockDeleteAction).toHaveBeenCalled();
    });
  });
});
