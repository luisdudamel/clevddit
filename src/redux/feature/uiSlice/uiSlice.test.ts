import { ui } from "../../../interfaces/uiFeedback";
import uiSliceReducer, {
  loadingActionCreator,
  loadingFeedbackActionCreator,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When its invoked with the loading status 'true'", () => {
    test("Then it should return the same object with the loading status set to 'true'", () => {
      const expectedLoadingStatus = true;
      const mockLoading: ui = {
        loading: true,
        userFeedback: false,
      };

      const loadingAction = loadingActionCreator(true);
      const loadingStatusTrue = uiSliceReducer(mockLoading, loadingAction);

      expect(loadingStatusTrue.loading).toBe(expectedLoadingStatus);
    });
  });

  describe("When its invoked with the userFeedback status 'true'", () => {
    test("Then it should return the same object with the userFeedback status set to 'true'", () => {
      const expectedLoadingStatus = true;
      const mockLoading: ui = {
        loading: true,
        userFeedback: false,
      };

      const loadingAction = loadingFeedbackActionCreator(true);
      const loadingStatusTrue = uiSliceReducer(mockLoading, loadingAction);

      expect(loadingStatusTrue.loading).toBe(expectedLoadingStatus);
    });
  });
});
