import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../interfaces/Post";

const initialState: Post[] = [];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    loadPosts: (currentPosts, action: PayloadAction<Post[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadPosts: loadPostsActionCreator } = postsSlice.actions;

export default postsSlice.reducer;
