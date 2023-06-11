// import css
import '../../SignInSignUp.css';
// import react dependencies
import { useState } from 'react'
// import MaterialUI dependencies
import { Button } from '@mui/material';
// import queries
import { supabaseSignUp } from '../../../../Models/queries';
// import components
import SignMessage from '../../Components/SignMessage/SignMessage';

function SignUp({ formData, handleChange }) {
  // useStates to track if SignIn error messages should be displayed
  const [ signUpError, setSignUpError ] = useState(false);
  const [ signUpFailure, setsignUpFailure ] = useState(false);

  // This function is used to handle the form submission.
  // It is triggered when the form is submitted.
  function handleSubmit(e) {
    // The 'e.preventDefault()' prevents the default form submission behavior.
    // It ensures that the form does not cause a page reload.
    e.preventDefault();

    // Check if Sign Up form has been filled out
    if (formData.firstName !== "" && formData.lastName !== "" && formData.email !== "" && formData.password !== "") {
      // supabaseSignUp() is called, passing the 'formData' as a parameter.
      // This function contains the logic and DB query for creating a new user.
      // also sets signUpFailure variable to true if new user could not be created.
      setsignUpFailure(supabaseSignUp(formData));
    }
    // show SignMessage component
    else {
      setSignUpError(true);
    }
  }

  // TODO: show message on sign up success and switch to sign in component

  return (
    <div className='sign-form'>
      <h1>Sign Up</h1>

      {/* Check if signInError has been changed to true and display error if so */}
      {signUpError && (<SignMessage message="Please complete all form fields."/>)}
      {/* Check if signUpFailure has been changed to true and display error if so */}
      {signUpFailure && (<SignMessage message="Failed to sign up."/>)}

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name='firstName'
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          name='lastName'
          onChange={handleChange}
        />
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
        <div className="submit-button">
          <Button variant="contained" type='submit'>Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;