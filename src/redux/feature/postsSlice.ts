import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../interfaces/Post";

const initialState: IPost[] = [];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    loadPosts: (currentPosts, action: PayloadAction<IPost[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadPosts: loadPostsActionCreator } = postsSlice.actions;

export default postsSlice.reducer;
