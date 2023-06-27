import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./LandingPage.css";
import { Button } from "@mui/material";
import Footer from "../Components/Footer/footer";
import { AnimatedCounter } from "react-animated-counter";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function LandingPage({ isSignedIn, setFilter }) {
  const navigate = useNavigate();
  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    const fetchEventCount = async () => {
      try {
        const { data, error } = await supabase.from("event").select("*");

        if (error) {
          throw new Error(error.message);
        }

        if (data) {
          const count = data.length || 0;
          setCounterValue(count);
        }
      } catch (error) {
        console.error("Error fetching event count:", error);
      }
    };

    fetchEventCount();

    if (isSignedIn) {
      navigate("/src/pages/carddisplay");
    }

    return () => {};
  }, [isSignedIn, navigate]);

  return (
    <>
      <div id="landing-page-outer-container">
        <h1 id="title">LITTR</h1>
        <div id="landing-page-button-container">
          <Button variant="contained">
            <Link to="/src/pages/carddisplay">Find a clean up</Link>
          </Button>

          <Button variant="contained" data-testid="create-post-button">
            {isSignedIn ? (
              <Link to="/src/pages/createpostform">Create a clean up</Link>
            ) : (
              <Link to="/src/pages/signsignup">Create a clean up</Link>
            )}
          </Button>
          <div id="landing-page-counter-container">
  <AnimatedCounter
    value={Math.floor(counterValue)}
    color="white"
    fontSize="32px"
  />
  <p style={{ fontWeight: 'bold', fontSize: '18px', display: 'inline', marginLeft: '10px' }}>
    Clean-ups
  </p>
</div>

        </div>
      </div>
      <div id="landing-page-banner">
        <h2>Unite, Transform and Clean Up your community.</h2>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
