import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../../interfaces/Post";

const initialState: IPost[] = [];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    loadPosts: (currentPosts, action: PayloadAction<IPost[]>) => [
      ...action.payload,
    ],
    deletePost: (currentPosts: IPost[], action: PayloadAction<IPost["id"]>) => [
      ...currentPosts.filter((post) => post.id !== action.payload),
    ],
    editPost: (currentPosts, action: PayloadAction<IPost>) => [
      ...currentPosts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      ),
    ],
  },
});

export const {
  loadPosts: loadPostsActionCreator,
  deletePost: deletePostActionCreator,
  editPost: editPostActionCreator,
} = postsSlice.actions;

export default postsSlice.reducer;
