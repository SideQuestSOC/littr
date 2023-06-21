import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // useNavigate() is used to redirect to a different page
import "./LandingPage.css";
// import MaterialUI dependencies
import { Button } from "@mui/material";

function LandingPage({ isSignedIn }) {
  // Initialize the navigate object using the useNavigate 'hook'
  const navigate = useNavigate();
  // Redirect to Card Display Page if already logged in
  if(isSignedIn) {
    navigate("/src/pages/carddisplay");
  }

  return (
    <div id="landing-page-outer-container">
      <h1 id="title">LITTR</h1>
      <div id="landing-page-button-container">
        <Button variant="contained">
          <Link to="/src/pages/carddisplay">Find a clean up</Link>
        </Button>
        <Button variant="contained">
          {/* If signed in go to Create Card Form, if not go to signinup page */}
          {isSignedIn ? <Link to="/src/pages/createpostform">Create a clean up</Link> : <Link to="/src/pages/signsignup">Create a clean up</Link>}
        </Button>
      </div>
      <div id="landing-page-banner">
        <h2>Unite, Transform and Clean Up your community.</h2>
      </div>
    </div>
  );
}

export default LandingPage;