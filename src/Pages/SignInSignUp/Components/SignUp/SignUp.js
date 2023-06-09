import './SignUp.css';

import { useState } from 'react';

// import queries
import { supabaseSignUp } from '../../../../Models/queries';

function SignUp() {
      // This state variable 'formData' is used to store form data for the signup.
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

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

  // This function is used to handle the form submission.
  // It is triggered when the form is submitted.
  function handleSubmit(e) {
    // The 'e.preventDefault()' prevents the default form submission behavior.
    // It ensures that the form does not cause a page reload.
    e.preventDefault();
    // supabaseSignUp() is called, passing the 'formData' as a parameter.
    // This function contains the logic and DB query for creating a new user.
    supabaseSignUp(formData);
  }

  return (
    <div id='sign-up-form'>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='firstName'
          name='firstName'
          onChange={handleChange}
        />
        <input
          placeholder='lastName'
          name='lastName'
          onChange={handleChange}
        />
        <input
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          placeholder='password'
          name='password'
          type='password'
          onChange={handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;