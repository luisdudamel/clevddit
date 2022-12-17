import { render, screen } from "@testing-library/react";
import { mockTwoPosts } from "../../mocks/mockPosts";
import PostList from "./PostList";

describe("Given a PostList function", () => {
  describe("When invoked with 2 posts with titles `ChatGPT is killing it` and `Copilot is dying`", () => {
    test("Then it should render 2 headings with the texts `ChatGPT is killing it` and `Copilot is dying`", () => {
      const expectedChatHeading = "ChatGPT is killing it";
      const expectedCopilotHeading = "Copilot is dying";

      render(<PostList postList={mockTwoPosts} />);

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
});
