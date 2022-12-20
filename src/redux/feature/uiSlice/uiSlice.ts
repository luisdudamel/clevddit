import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uiState, UserFeedback } from "../../../interfaces/uiFeedback";

const initialState: uiState = {
  loading: false,
  feedback: {
    loaderFeedback: false,
    userFeedback: {
      feedbackMessage: "",
      userFeedbackOpen: false,
    },
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    isLoading: (ui, action: PayloadAction<boolean>) => ({
      loading: action.payload,
      feedback: { ...ui.feedback, loaderFeedback: action.payload },
    }),
    feedbackOpen: (ui, action: PayloadAction<UserFeedback>) => ({
      loading: action.payload.userFeedbackOpen,
      feedback: {
        ...ui.feedback,
        userFeedback: {
          feedbackMessage: action.payload.feedbackMessage,
          userFeedbackOpen: action.payload.userFeedbackOpen,
        },
      },
    }),
  },
});

export const {
  isLoading: loadingActionCreator,
  feedbackOpen: userFeedbackActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
