// import css
import '../../SignInSignUp.css';
// import react dependencies
import { useState } from 'react'
// useNavigate() is used to redirect to a different page
import { useNavigate } from 'react-router-dom';
// import MaterialUI dependencies
import { Button } from '@mui/material';
// import function from client.js
import { SignInUser } from '../../../../Models/client';
// import components
import SignMessage from '../../Components/SignMessage/SignMessage';


function SignIn({ formData, handleChange, signUpRedirect, isSignedIn, setIsSignedIn }) {
    // initialize the navigate object using the useNavigate 'hook'
    const navigate = useNavigate();

    // useState to track if SignIn error message should be displayed
    const [ signInError, setSignInError ] = useState(false);

    // This function is used to handle the form submission.
    // It is triggered when the form is submitted.
    async function handleSubmit(e) {
        // The 'e.preventDefault()' prevents the default form submission behavior.
        // It ensures that the form does not cause a page reload.
        e.preventDefault();

        //  Call SignInUser() from Models/client.js and pass in user inputted email and password set the return value to a variable
        const signInSuccessful = await SignInUser(formData.email, formData.password);
        // if (signInSuccessful === true) redirect to Card Display Page
        if (signInSuccessful) {
            // Change isSignedIn useState to true
            setIsSignedIn(true);
            // Redirect to card display page on successful log in
            navigate('/src/pages/carddisplay');
        }
        // if (signInSuccessful === false) display error message
        else {
            // show SignMessage component
            setSignInError(true);
        }
        
    }

    return (
        <div className='sign-form'>
            <h1>Sign In</h1>
            {/* Check if signInError has been changed to true and display error if so */}
            {signInError && (<SignMessage message="Failed to sign in."/>)}
            {/* Check if signUpRedirect (new user has successfully signed up) has been changed to true and display success message if so */}
            {signUpRedirect && (<SignMessage message="Successfully signed up. Please log in." signUpRedirect={signUpRedirect}/>)}
            
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              required
            />
              <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              pattern=".{6,}"
              title="Please enter at least 6 characters"
              onChange={handleChange}
              required
            />
                <div className="submit-button">
                    <Button variant="contained" type='submit'>Submit</Button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;