import '../../SignInSignUp.css';

import { SignInUser } from '../../../../Models/client';

function SignIn({ formData, handleChange }) {
    // This function is used to handle the form submission.
    // It is triggered when the form is submitted.
    function handleSubmit(e) {
        // The 'e.preventDefault()' prevents the default form submission behavior.
        // It ensures that the form does not cause a page reload.
        e.preventDefault();

        console.log(formData);

        //  Call SignInUser() from Models/client.js and pass in user inputted email and password
        SignInUser(formData.email, formData.password);
    }

    return (
        <div className='sign-form'>
            <h1>Sign In</h1>
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