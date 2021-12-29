import "./styles/App.css";

function WelcomeScreen({ handleStart, handleSkip }) {
  return (
    <div className="welcome">
      <h2 id="topText">👋 Welcome!</h2>
      <p>STREAMcoi will help you manage and monetise your streamers.</p>
      <p>Ready to take a tour?</p>
      <div className="start-tour" onClick={handleStart}>
        Start
      </div>
      <div className="skip-tour" onClick={handleSkip}>
        Skip
      </div>
    </div>
  );
}

export default WelcomeScreen;
