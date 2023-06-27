import { Link } from "react-router-dom";
import "./LandingPage.css";
// import MaterialUI dependencies
import { Button } from "@mui/material";
import Footer from "../Components/Footer/footer";

function LandingPage({ isSignedIn, setFilter }) {

  return <>
    <div id="landing-page-outer-container">
      <h1 id="title">LITTR</h1>
      <div id="landing-page-button-container">
        <Button variant="contained">
          <Link to="/src/pages/carddisplay">Find a clean up</Link>
        </Button>
        <Button variant="contained" data-testid="create-post-button">
          {/* If signed in go to Create Card Form, if not go to signinup page */}
          {isSignedIn ? <Link to="/src/pages/createpostform">Create a clean up</Link> : <Link to="/src/pages/signsignup">Create a clean up</Link>}
        </Button>
      </div>
      </div>
      <div id="landing-page-banner">
        <h2>Unite, Transform and Clean Up your community.</h2>
      </div>
    <Footer />

  </>
}

export default LandingPage;