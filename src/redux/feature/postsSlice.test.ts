import { IPost } from "../../interfaces/Post";
import { mockPosts } from "../../mocks/mockPosts";
import postsReducer, { loadPostsActionCreator } from "./postsSlice";

describe("Given a loadPosts slice", () => {
  describe("When its invoked with a list of posts", () => {
    test("Then it should return the same list of posts", () => {
      const expectedLoadedPosts: IPost[] = mockPosts;
      const postsToLoad: IPost[] = mockPosts;

      const loadAction = loadPostsActionCreator(postsToLoad);
      const loadedPosts = postsReducer(postsToLoad, loadAction);

      expect(loadedPosts).toEqual(expectedLoadedPosts);
    });
  });
});
