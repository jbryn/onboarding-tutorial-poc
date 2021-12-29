import Nav from "./Nav";
import Steps from "./Steps";
import "./styles/App.css";
import { useState } from "react";
import Joyride, { STATUS } from "react-joyride";
import WelcomeScreen from "./WelcomeScreen";
import tutSteps from "./tutorial-steps";

function App() {
  const [steps] = useState(tutSteps);

  const [isRunning, setRunning] = useState(false);
  const [isVisible, setVisible] = useState(true);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRunning(false);
    }
  };

  const handleStart = () => {
    setRunning(true);
    setVisible(false);
  };

  return (
    <div className="root">
      <Nav />
      <div className="container">
        <div className="container-inner">
          {isVisible && (
            <WelcomeScreen
              handleStart={handleStart}
              handleSkip={() => setVisible(false)}
            />
          )}
          <Joyride
            debug={true}
            callback={handleJoyrideCallback}
            steps={steps}
            continuous={true}
            showProgress={true}
            showSkipButton={true}
            run={isRunning}
            styles={{
              options: {
                backgroundColor: "#444444",
                textColor: "white",
                primaryColor: "#FF4E47",
              },
            }}
          ></Joyride>
        </div>
      </div>
      <footer className="footer">
        <div className="container footer-container">
          <p>Streamcoi - Manage and monetise your streamers © 2021</p>
          <div className="footer-navigation">
            <a
              id="tour-reset"
              className="footer-item"
              onClick={() => setRunning(true)}
            >
              Take guided tour
            </a>
            <div className="footer-item">
              <div>Switch to Light mode</div>
            </div>
            <a className="footer-item">FAQ</a>
            <a className="footer-item">Back to homepage</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
