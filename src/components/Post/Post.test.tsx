import { render, screen } from "@testing-library/react";
import { mockPost } from "../../mocks/mockPosts";
import Post from "./Post";

describe("Given a Post function", () => {
  describe("When it's called with a post with title `ChatGPT is killing it`", () => {
    test("Then it should render a heading with the text `ChatGPT is killing it`", () => {
      const expectedHeadingText = "ChatGPT is killing it";

      render(<Post post={mockPost} />);

      const postHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(postHeading).toBeInTheDocument();
    });
  });
});
