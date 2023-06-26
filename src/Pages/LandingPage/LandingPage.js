import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // useNavigate() is used to redirect to a different page
import { useEffect } from "react";
import "./LandingPage.css";
// import MaterialUI dependencies
import { Button } from "@mui/material";
import SearchAppBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";

function LandingPage({ isSignedIn, setFilter }) {
  // Initialize the navigate object using the useNavigate 'hook'
  const navigate = useNavigate();

  // Redirect to Card Display Page if already logged in
  useEffect(() => {
    if(isSignedIn) {
      navigate("/src/pages/carddisplay");
    }
  }, [isSignedIn, navigate]);

  return (
    <div id="landing-page-outer-container">
          <SearchAppBar />
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
      <Footer />
    </div>
  );
}

export default LandingPage;