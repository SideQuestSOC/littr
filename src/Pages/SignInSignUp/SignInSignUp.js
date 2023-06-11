// import css
import './SignInSignUp.css';
// import react dependencies
import { Link } from "react-router-dom";
import { useState } from 'react';
// import MaterialUI dependencies
import { Button } from '@mui/material';
// import components
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";

function SignInSignUp() {
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
    }

    function handleSignInClick() {
        // Event handler for sign in button click
        setShowSignUp(false); // Set showSignUp to false to hide the sign up component
        setShowSignIn(true); // Set showSignIn to true to show the sign in component
    }

    return (
        <div id="sign-up-in-outer-container">
            <div id="sign-up-in-close">
                <Button variant="contained"><Link to="/src/pages/carddisplay">X</Link></Button>
            </div>
            <div id="welcome-message-container">
                <div id="welcome-title">
                    <h1>WELCOME</h1>
                </div>
                <div id="welcome-subheading">
                    <h2>Connect, Clean, Transform Spaces</h2>
                </div>
            </div>
            <div id="sign-up-in-container">
                <div id="sign-up-in-button-container">
                    <Button variant="contained" onClick={handleSignUpClick}>Sign Up</Button>
                    <Button variant="contained" onClick={handleSignInClick}>Sign In</Button>
                </div>
            
                {showSignUp && (<SignUp formData={formData} handleChange={handleChange} /> 
                // Show sign up component if showSignUp variable is true
                )}

                {showSignIn && (<SignIn formData={formData} handleChange={handleChange} /> 
                // Show sign in component if showSignIn variable is true
                )}
            </div>
        </div>
    );
}

export default SignInSignUp;