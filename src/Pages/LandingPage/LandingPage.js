import { Link } from "react-router-dom";
import "./LandingPage.css";
// import MaterialUI dependencies
import { Button } from "@mui/material";

function LandingPage() {
  return (
    <div id="landing-page-outer-container">
      <Button variant="contained">
        <Link to="/src/pages/carddisplay">Find a clean up</Link>
      </Button>
      <Button variant="contained">
        <Link to="/src/pages/signsignup">Create a clean up</Link>
      </Button>
      <div id="landing-page-banner">
        <h1>Unite, Transform and Clean Up your community.</h1>
      </div>
    </div>
  );
}

export default LandingPage;
