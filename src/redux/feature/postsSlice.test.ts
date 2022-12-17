import { IPost } from "../../interfaces/Post";
import {
  mockPosts,
  mockTwoPosts,
  mockTwoPostsOneDeleted,
} from "../../mocks/mockPosts";
import postsReducer, {
  deletePostActionCreator,
  loadPostsActionCreator,
} from "./postsSlice";

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

describe("Given a deletePost slice", () => {
  describe("When its invoked with a list of posts and an id", () => {
    test("Then it should return the same list of posts without the post associated to the id provided", () => {
      const actualPosts: IPost[] = mockTwoPosts;
      const idToDelete = 2;
      const expectedPostsOneDeleted: IPost[] = mockTwoPostsOneDeleted;

      const deleteAction = deletePostActionCreator(idToDelete);
      const actualPostsOneDeleted = postsReducer(actualPosts, deleteAction);

      expect(expectedPostsOneDeleted).toEqual(actualPostsOneDeleted);
    });
  });
});
