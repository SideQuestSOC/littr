import '../../SignInSignUp.css';

// import queries
import { supabaseSignUp } from '../../../../Models/queries';

function SignUp({ formData, handleChange }) {
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
    <div className='sign-form'>
    <h1>Sign Up</h1>
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
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;