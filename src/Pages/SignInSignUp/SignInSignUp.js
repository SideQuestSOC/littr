// import css
import './SignInSignUp.css';
import { useState, useEffect } from 'react';
// import MaterialUI dependencies
import { Button } from '@mui/material';
// import components
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import SearchAppBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";

function SignInSignUp({ isSignedIn, setIsSignedIn, setFilter }) {
    // This state variable 'formData' is used to store form data for the signup and sign in.
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    // State variables to control the visibility of the sign up and sign in components
    const [showSignUp, setShowSignUp] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    // Set true if screen is larger than 992px
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    // signUpRedirect - used where a new user successfully signs up, 
    // it toggles hiding the sign up component and showing the sign in component
    const [signUpRedirect, setSignUpRedirect ] = useState(false);

    // check the size of the current screen, check again if it changes
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 992);
        };
    
        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    // This function is used to handle changes in the form inputs.
    // It is triggered when an input value is changed.
    function handleChange(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            };
        });
    }

    function handleSignUpClick() {
        // Event handler for sign up button click
        setShowSignUp(true); // Set showSignUp to true to show the sign up component
        setShowSignIn(false); // Set showSignIn to false to hide the sign in component
        setIsLargeScreen(false); // reset this to false to hide sign in component when sign up component is showing
    }

    function handleSignInClick() {
        // Event handler for sign in button click
        setShowSignUp(false); // Set showSignUp to false to hide the sign up component
        setShowSignIn(true); // Set showSignIn to true to show the sign in component
    }

    return <>
        <div id="sign-up-in-outer-container">
            <SearchAppBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setFilter={setFilter} />
            <div id="welcome-message-container">
                <div id="welcome-title">
                    <h1>WELCOME</h1>
                </div>
                <div id="welcome-subheading">
                    <h2>Connect, Clean, Transform Spaces</h2>
                </div>
            </div>
            <div id="sign-up-in-components-container">
                <div id="sign-up-in-container">
                    <div id="sign-up-in-button-container">
                        <Button variant="contained" onClick={handleSignUpClick}>Sign Up</Button>
                        <Button variant="contained" onClick={handleSignInClick}>Sign In</Button>
                    </div>
                
                    {/* Render the SignUp component only if showSignUp is true and signUpRedirect is false */}
                    {showSignUp && !signUpRedirect && !isLargeScreen && (<SignUp formData={formData} handleChange={handleChange} setSignUpRedirect={setSignUpRedirect} />)}

                    {/* Render the SignIn component if either showSignIn is true or signUpRedirect is true (where a new user has just signed up) */}
                    {(showSignIn || signUpRedirect || isLargeScreen) && (<SignIn formData={formData} handleChange={handleChange} signUpRedirect={signUpRedirect} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>)}
                    
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default SignInSignUp;