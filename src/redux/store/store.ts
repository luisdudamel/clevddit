import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "../feature/postsSlice";
import uiSliceReducer from "../feature/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    posts: postsSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
