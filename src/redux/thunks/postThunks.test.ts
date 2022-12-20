import { waitFor } from "@testing-library/react";
import {
  mockConstructedPost,
  mockPost,
  mockRawPostMSW,
} from "../../mocks/mockPosts";
import {
  deletePostThunk,
  editPostThunk,
  getAllPostsThunk,
  getPostByIdThunk,
} from "./postsThunks";

describe("Given the loadPostsThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch with an array of posts", async () => {
      const dispatch = jest.fn();

      const action = {
        payload: mockConstructedPost,
        type: "posts/loadPosts",
      };

      const thunk = getAllPostsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given the deletePostsThunk function", () => {
  describe("When it's called with a post with id 1", () => {
    test("Then it should call dispatch with an action with payload 1 and", async () => {
      const dispatch = jest.fn();

      const deleteAction = {
        payload: 1,
        type: "posts/deletePost",
      };

      const thunk = deletePostThunk(1);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(deleteAction);
    });

    test("Then it should call dispatch with a feedbackOpen type with payload text ``", async () => {
      const dispatch = jest.fn();

      const deleteAction = {
        payload: {
          feedbackMessage: "",
          userFeedbackOpen: false,
        },
        type: "ui/feedbackOpen",
      };

      const thunk = deletePostThunk(1);
      await thunk(dispatch);
      await waitFor(
        () => {
          expect(dispatch).toHaveBeenCalledWith(deleteAction);
        },
        { timeout: 2000 }
      );
    }, 5000);
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

  describe("When it's called with a post with id 1", () => {
    test("Then it should call dispatch with a feedbackOpen type with payload text ``", async () => {
      const dispatch = jest.fn();

      const editAction = {
        payload: {
          feedbackMessage: "",
          userFeedbackOpen: false,
        },
        type: "ui/feedbackOpen",
      };

      const thunk = editPostThunk(mockPost);
      await thunk(dispatch);
      await waitFor(
        () => {
          expect(dispatch).toHaveBeenCalledWith(editAction);
        },
        { timeout: 2000 }
      );
    }, 5000);
  });
});
