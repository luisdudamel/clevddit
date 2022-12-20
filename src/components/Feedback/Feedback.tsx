import { useAppSelector } from "../../redux/hooks";
import "./Feedback.scss";

interface FeedbackProps {
  userMessage: string;
}

const Feedback = ({ userMessage }: FeedbackProps): JSX.Element => {
  const uiState = useAppSelector((state) => state.ui.feedback);

  return (
    <>
      <div role="progressbar" aria-busy="true" className="feedback-container">
        {uiState.loaderFeedback && (
          <>
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
          </>
        )}

        {uiState.userFeedback && (
          <div className="modal-container">
            <p className="modal-message">{userMessage}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Feedback;
