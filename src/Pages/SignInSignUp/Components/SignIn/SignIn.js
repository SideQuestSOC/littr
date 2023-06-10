import '../../SignInSignUp.css';
import { useState } from 'react'
// useNavigate() is used to redirect to a different page
import { useNavigate } from 'react-router-dom';
// import function from client.js
import { SignInUser } from '../../../../Models/client';
// import components
import SignInFailure from '../SignInFailure/SignInFailure';


function SignIn({ formData, handleChange }) {
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

        console.log(formData);

        //  Call SignInUser() from Models/client.js and pass in user inputted email and password set the return value to a variable
        const signInSuccessful = await SignInUser(formData.email, formData.password);
        // if (signInSuccessful === true) redirect to Card Display Page
        if (signInSuccessful) {
            // Redirect to card display page on successful log in
            navigate('/src/pages/carddisplay');
        }
        // if (signInSuccessful === false) display error message
        else {
            // show sign in error component
            setSignInError(true);
        }
        
    }

    return (
        <div className='sign-form'>
            <h1>Sign In</h1>
            {/* Check if signInError has been changed to true and display error if so */}
            {signInError && (<SignInFailure />)}
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    name='email'
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    name='password'
                    type='password'
                    onChange={handleChange}
                />
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;