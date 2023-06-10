import '../../SignInSignUp.css';

// useNavigate() is used to redirect to a different page
import { useNavigate } from 'react-router-dom';

import { SignInUser } from '../../../../Models/client';

function SignIn({ formData, handleChange }) {
    // initialize the navigate object using the useNavigate 'hook'
    const navigate = useNavigate();

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
            // TODO: set up variable to show or hide sign in feedback message on sign in failure
        }
        
    }

    return (
        <div className='sign-form'>
            <h1>Sign In</h1>
            {/* TODO: Add sign in feedback message component */}
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