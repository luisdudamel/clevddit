import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ui } from "../../../interfaces/uiFeedback";

const initialState: ui = {
  loading: false,
  userFeedback: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    isLoading: (ui, action: PayloadAction<boolean>) => ({
      ...ui,
      loading: action.payload,
    }),
    feedbackOpen: (ui, action: PayloadAction<boolean>) => ({
      ...ui,
      userFeedback: action.payload,
    }),
  },
});

export const {
  isLoading: loadingActionCreator,
  feedbackOpen: loadingFeedbackActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
