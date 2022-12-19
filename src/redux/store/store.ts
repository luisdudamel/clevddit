import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "../feature/postSlice/postsSlice";
import uiSliceReducer from "../feature/uiSlice/uiSlice";
import userSliceReducer from "../feature/userSlice/userSlice";
import usersSliceReducer from "../feature/usersSlice/usersSlice";

export const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    posts: postsSliceReducer,
    users: usersSliceReducer,
    user: userSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
