import axios from "axios";
import { mockPosts } from "../../mocks/mockPosts";
import { loadPostsActionCreator } from "../feature/postsSlice";
import { getAllPostsThunk } from "./postsThunks";

describe("Given the loadPostsThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch with the load posts action with the posts received from the axios request", async () => {
      const dispatch = jest.fn();
      const action = loadPostsActionCreator(mockPosts);

      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { posts: mockPosts }, status: 200 });

      const thunk = getAllPostsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

export {};
