export interface UserFeedback {
  userFeedbackOpen: boolean;
  feedbackMessage: string;
}

export interface Feedback {
  userFeedback: UserFeedback;
  loaderFeedback: boolean;
}

export interface uiState {
  loading: boolean;
  feedback: Feedback;
}
