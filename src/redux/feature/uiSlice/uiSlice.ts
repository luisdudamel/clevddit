import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ui } from "../../../interfaces/uiFeedback";

const initialState: ui = {
  loading: false,
  feedback: { userFeedback: false, loaderFeedback: false },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    isLoading: (ui, action: PayloadAction<boolean>) => ({
      loading: action.payload,
      feedback: { ...ui.feedback, loaderFeedback: action.payload },
    }),
    feedbackOpen: (ui, action: PayloadAction<boolean>) => ({
      loading: action.payload,
      feedback: { ...ui.feedback, userFeedback: action.payload },
    }),
  },
});

export const {
  isLoading: loadingActionCreator,
  feedbackOpen: userFeedbackActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
