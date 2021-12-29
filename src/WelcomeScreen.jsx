import "./styles/App.css";
import App from "./App";

function WelcomeScreen({ setRunning }) {
	return (
		<div className="welcome">
			<h2 id="topText">👋 Welcome!</h2>
			<p>STREAMcoi will help you manage and monetise your streamers.</p>
			<p>Ready to take a tour?</p>
			<div className="start-tour" onClick={() => setRunning(true)}>
				Start
			</div>
			<div className="skip-tour" onClick={() => setRunning(false)}>
				Skip
			</div>
		</div>
	);
}

export default WelcomeScreen;
