import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "../feature/postSlice/postsSlice";
import uiSliceReducer from "../feature/uiSlice/uiSlice";
import usersSliceReducer from "../feature/usersSlice/usersSlice";

export const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    posts: postsSliceReducer,
    users: usersSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
