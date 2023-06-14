import { Link } from "react-router-dom";
import "./LandingPage.css";
// import MaterialUI dependencies
import { Button } from "@mui/material";

function LandingPage() {
  return (
    <div id="landing-page-outer-container">
      <h1 id="title">LITTR</h1>
      <div id="landing-page-button-container">
        <Button variant="contained">
          <Link to="/src/pages/carddisplay">Find a clean up</Link>
        </Button>
        <Button variant="contained">
          <Link to="/src/pages/signsignup">Create a clean up</Link>
        </Button>
      </div>
      <div id="landing-page-banner">
        <h2>Unite, Transform and Clean Up your community.</h2>
      </div>
    </div>
  );
}

export default LandingPage;
