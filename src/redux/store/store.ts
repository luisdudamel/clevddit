import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "../feature/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
