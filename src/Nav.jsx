import "./styles/Nav.css";

function Nav() {
  return (
    <nav className="navigation">
      <div className="navigation-inner container">
        <a className="navigation-item navigation-item--logo" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 40 40"
            class="hidden-print"
          >
            <path
              d="M35.212 23.287a.728.728 0 01-.728.729H16.518a.728.728 0 01-.729-.729V5.321c0-.402.326-.728.729-.728h17.966c.402 0 .728.326.728.728v17.966zM37.206.04h-23.41a2.56 2.56 0 00-2.56 2.56v23.41a2.559 2.559 0 002.56 2.558h23.41a2.559 2.559 0 002.559-2.558V2.6a2.559 2.559 0 00-2.56-2.56z"
              fill="#FF6555"
            ></path>
            <path
              d="M24.155 34.67a.728.728 0 01-.728.728H5.46a.728.728 0 01-.729-.728V16.703c0-.402.326-.728.729-.728h17.966c.402 0 .728.326.728.728V34.67zm1.994-23.248H2.739a2.56 2.56 0 00-2.56 2.56v23.41a2.559 2.559 0 002.56 2.559h23.41a2.559 2.559 0 002.559-2.56v-23.41a2.559 2.559 0 00-2.56-2.559z"
              fill="#FF6555"
            ></path>
            <path
              d="M25.519 25.594v-10.3a.666.666 0 00-.666-.665H14.567v10.965h10.952z"
              fill="#FF6555"
            ></path>
          </svg>
        </a>
        <div className="navigation-links">
          <p href="/campaigns" className="navigation-item">
            Campaigns
          </p>
          <p href="/overlays" className="navigation-item">
            Overlays
          </p>
          <p href="/partner-rotators" className="navigation-item active">
            Partner rotators
          </p>
          <p href="/streamers" className="navigation-item">
            Streamers
          </p>
          <p href="/reports" className="navigation-item">
            Reports
          </p>
        </div>
        <div className="navigation-item">
          <div className="btn btn--profile">
            <img
              src="https://d3nkmyl4psgrha.cloudfront.net/avatars/pobrane 4jpg-1613479689991.jpeg"
              alt="user"
            ></img>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
