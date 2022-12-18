import { mockPost } from "../../mocks/mockPosts";
import {
  deletePostThunk,
  editPostThunk,
  getAllPostsThunk,
  getPostByIdThunk,
} from "./postsThunks";

describe("Given the loadPostsThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch", async () => {
      const dispatch = jest.fn();

      const thunk = getAllPostsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given the deletePostsThunk function", () => {
  describe("When it's called with a post id 1", () => {
    test("Then it should call dispatch", async () => {
      const dispatch = jest.fn();

      const thunk = deletePostThunk(1);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given the getPostByIdThunk function", () => {
  describe("When it's called with a post", () => {
    test("Then it should call dispatch", async () => {
      const dispatch = jest.fn();

      const thunk = getPostByIdThunk("1");
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given the editPostThunk function", () => {
  describe("When it's called with a post to edit", () => {
    test("Then it should call dispatch", async () => {
      const dispatch = jest.fn();

      const thunk = editPostThunk(mockPost);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
