import { ui } from "../../../interfaces/uiFeedback";
import uiSliceReducer, {
  loadingActionCreator,
  userFeedbackActionCreator,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When its invoked with the loading status 'true'", () => {
    test("Then it should return the same object with the loading status set to 'true'", () => {
      const expectedLoadingStatus = true;
      const mockLoading: ui = {
        loading: false,
        feedback: { userFeedback: false, loaderFeedback: false },
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
      const mockLoading: ui = {
        loading: false,
        feedback: { userFeedback: false, loaderFeedback: false },
      };

      const loadingAction = userFeedbackActionCreator(true);
      const loadingStatusTrue = uiSliceReducer(mockLoading, loadingAction);

      expect(loadingStatusTrue.feedback.userFeedback).toBe(
        expectedLoadingStatus
      );
    });
  });
});
