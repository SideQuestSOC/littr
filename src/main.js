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

function SignUp({ formData, handleChange, setSignUpRedirect }) {
  // useStates to track if SignIn error messages should be displayed
  const [signUpError, setSignUpError] = useState({
    incompleteFields: false,
    invalidEmail: false,
    weakPassword: false
  });
  const [signUpSuccess, setSignUpSuccess] = useState(true);

  // This function is used to handle the form submission.
  // It is triggered when the form is submitted.
  async function handleSubmit(e) {
    // The 'e.preventDefault()' prevents the default form submission behavior.
    // It ensures that the form does not cause a page reload.
    e.preventDefault();

    // Check if Sign Up form has been filled out
    if (formData.firstName !== "" && formData.lastName !== "" && formData.email !== "" && formData.password !== "") {
      // supabaseSignUp() is called, passing the 'formData' as a parameter.
      // This function contains the logic and DB query for creating a new user.
      // also sets signUpSuccess variable to true if new user could not be created.
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(formData.email)) {
        setSignUpError({
          incompleteFields: false,
          invalidEmail: true,
          weakPassword: false
        });
        return;
      }
      if (formData.password.length < 6) {
        setSignUpError({
          incompleteFields: false,
          invalidEmail: false,
          weakPassword: true
        });
        return;
      }
    let checkSuccess = await supabaseSignUp(formData);
      setSignUpSuccess(checkSuccess);
      // if sign up succeeded redirect to sign in component
      if(checkSuccess) {
        setSignUpRedirect(true);
      }
    }
    // show SignMessage component
    else {
      setSignUpError({
        incompleteFields: true,
        invalidEmail: false,
        weakPassword: false
      });
    }
  }

  return (
    <div className='sign-form'>
      <h1>Sign Up</h1>

      {/* Check if signInError has been changed to true and display error if so */}
      {signUpError && (<SignMessage message="Please complete all form fields."/>)}
      {/* Check if signUpSuccess has been changed to true and display error if so */}
      {signUpError.invalidEmail && (
        <SignMessage message="Please enter a valid email address." />
      )}
      {signUpError.shortPassword && (
        <SignMessage message="Please enter a password of at least 6 characters." />
      )}
      {!signUpSuccess && <SignMessage message="Failed to sign up." />}

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
          <Button variant="contained" type='submit' onClick={() => {setSignUpError(false)}}>Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;