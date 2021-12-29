import Nav from "./Nav";
import Steps from "./Steps";
import "./styles/App.css";
import { useState } from "react";

import Joyride, { STATUS } from "react-joyride";

function App() {
  const [steps, setSteps] = useState([
    {
      target: "#campaigns",
      content:
        "Set up a campaign remotely for selected streamers and start receiving a detailed report",
      disableBeacon: true,
    },
    {
      target: "#overlays",
      content:
        "Customise, preview and archive stream overlays for individual streamers",
    },
    {
      target: "#streamers",
      content:
        "Comfortably manage all invited streamers in one, nifty space. Sort streamers by various metrics to easily track activity and promotional effort.",
    },
    {
      target: "#monitoring",
      content:
        "Directly view livestreams from added streamers and obtain clips with ease (Twitch only). Witness your campaigns coming to life!",
    },
    { target: "#statistics", content: "Statistics ... " },
    { target: "#reports", content: "Reports ... " },
    {
      target: "#faq",
      content:
        "Have any doubts? You can quickly find possible answers to common problems here. Contact us at (insert Streamcoi admin contact details here) if the FAQ does not mention the problem.",
    },
    {
      target: "#tour-reset",
      content:
        "Not keen on tutorials? In case you need help in the future you can restart the guide here.",
    },
  ]);

  const [isRunning, setRunning] = useState(false);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRunning(false);
    }
  };

  return (
    <div className="root">
      <Nav />
      <div className="container">
        <div className="container-inner">
          <div className="start-tour" onClick={() => setRunning(true)}>
            Start
          </div>
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
