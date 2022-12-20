import { uiState } from "../../../interfaces/uiFeedback";
import uiSliceReducer, {
  loadingActionCreator,
  userFeedbackActionCreator,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When its invoked with the loading status 'true'", () => {
    test("Then it should return the same object with the loading status set to 'true'", () => {
      const expectedLoadingStatus = true;
      const mockLoading: uiState = {
        loading: false,
        feedback: {
          loaderFeedback: true,
          userFeedback: {
            feedbackMessage: "",
            userFeedbackOpen: true,
          },
        },
      };

      const loadingAction = loadingActionCreator(true);
      const loadingStatusTrue = uiSliceReducer(mockLoading, loadingAction);

      expect(loadingStatusTrue.feedback.loaderFeedback).toBe(
        expectedLoadingStatus
      );
    });
  });

  describe("When its invoked with the userFeedback status 'true'", () => {
    test("Then it should return the same object with the userFeedback status set to 'true'", () => {
      const expectedLoadingStatus = true;
      const mockLoading: uiState = {
        loading: false,
        feedback: {
          loaderFeedback: false,
          userFeedback: {
            feedbackMessage: "",
            userFeedbackOpen: true,
          },
        },
      };

      const loadingAction = userFeedbackActionCreator(
        mockLoading.feedback.userFeedback
      );
      const loadingStatusTrue = uiSliceReducer(mockLoading, loadingAction);

      expect(loadingStatusTrue.feedback.userFeedback.userFeedbackOpen).toBe(
        expectedLoadingStatus
      );
    });
  });
});
