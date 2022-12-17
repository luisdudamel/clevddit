import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RawPost } from "../../interfaces/Post";

const initialState: RawPost[] = [];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    loadPosts: (currentPosts, action: PayloadAction<RawPost[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadPosts: loadPostsActionCreator } = postsSlice.actions;

export default postsSlice.reducer;
