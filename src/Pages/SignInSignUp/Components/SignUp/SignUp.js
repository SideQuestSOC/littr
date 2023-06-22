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
  // useState to track if SignIn error message should be displayed
  const [ signUpSuccess, setSignUpSuccess ] = useState(true);


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
      let checkSuccess = await supabaseSignUp(formData);
      setSignUpSuccess(checkSuccess);
      // if sign up succeeded redirect to sign in component
      if(checkSuccess) {
        setSignUpRedirect(true);
      }
    }
  }

  return (
      <div className='sign-form'>
        <h1>Sign Up</h1>
  
        {/* Check if signUpSuccess has been changed to true and display error if so */}
        {!signUpSuccess && (<SignMessage message="Failed to sign up."/>)}
  
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
            <input
              data-testid="firstName-input"
              name="firstName"
              onChange={handleChange}
              required
            />
          <label htmlFor="lastName">Last Name</label>
            <input
              data-testid="lastName-input"
              name="lastName"
              onChange={handleChange}
              required
            />
          <label htmlFor="email">Email</label>
            <input
              data-testid="email-input"
              name="email"
              type="email"
              onChange={handleChange}
              required
            />
          <label htmlFor="password">Password</label>
            <input
              data-testid="password-input"
              name="password"
              type="password"
              pattern=".{6,}"
              title="Please enter at least 6 characters"
              onChange={handleChange}
              required
            />
          <div className="submit-button">
            <Button variant="contained" type='submit' aria-label="Submit">Submit</Button>
          </div>
        </form>
      </div>
    );
  }
  
export default SignUp;