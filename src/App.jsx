import Nav from "./Nav";
import "./styles/App.css";
import { useState, useEffect } from "react";
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";
import WelcomeScreen from "./WelcomeScreen";
import tutSteps from "./tutorial-steps";

function App() {
  const stepIndexToTab = [
    "Campaigns",
    "Overlays",
    "Streamers",
    "Monitoring",
    "Statistics",
    "Reports",
    "FAQ",
  ];

  const [steps] = useState(tutSteps);
  const [isRunning, setRunning] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const [stepIndex, setStepIndex] = useState(-1);

  const handleJoyrideCallback = (data) => {
    const { action, index, type, status } = data;

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1));
    }

    // if ([ACTIONS.SKIP].includes(action)) {
    //   console.log("skip");
    //   console.log(status);
    //   setStepIndex(7);
    // }

    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setStepIndex(0);
      setRunning(false);
    }
  };

  const handleStart = () => {
    setStepIndex(0);
    setRunning(true);
    setVisible(false);
  };

  const handleSkip = () => {
    setVisible(false);
    setStepIndex(7);
    setRunning(true);
  };

  return (
    <div className="root">
      <Nav />
      <div className="container">
        <div className="container-inner">
          {isVisible && (
            <WelcomeScreen handleStart={handleStart} handleSkip={handleSkip} />
          )}
          <h2 className="tabname">
            {stepIndexToTab[stepIndex]}
            {stepIndex === 7 && "Campaigns"}
          </h2>
          <Joyride
            debug={true}
            callback={handleJoyrideCallback}
            steps={steps}
            continuous={true}
            showProgress={true}
            showSkipButton={true}
            stepIndex={stepIndex}
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
            <div
              id="tour-reset"
              className="footer-item"
              onClick={() => setRunning(true)}
            >
              Take guided tour
            </div>
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
