export interface UserFeedback {
  userFeedbackOpen: boolean;
  feedbackMessage: string;
}

export interface Feedback {
  userFeedback: UserFeedback;
  loaderFeedback: boolean;
}

export interface ui {
  loading: boolean;
  feedback: Feedback;
}
