import { useAppSelector } from "../../redux/hooks";
import "./Feedback.scss";

const Feedback = (): JSX.Element => {
  const uiState = useAppSelector((state) => state.ui.feedback);

  return (
    <>
      <div role="progressbar" aria-busy="true" className="feedback-container">
        {uiState.loaderFeedback ? (
          <>
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
          </>
        ) : (
          <div className="modal-container">
            <p className="modal-message">
              {uiState.userFeedback.feedbackMessage}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Feedback;
