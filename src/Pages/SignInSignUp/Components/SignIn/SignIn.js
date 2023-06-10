import { SignInUser } from '../../../../Models/client';

function SignIn({ formData, handleChange }) {
    // This function is used to handle the form submission.
    // It is triggered when the form is submitted.
    function handleSubmit(e) {
        // The 'e.preventDefault()' prevents the default form submission behavior.
        // It ensures that the form does not cause a page reload.
        e.preventDefault();

        console.log(formData);

        SignInUser(formData.email, formData.password);
    }

    return (
        <div id='sign-in-form'>
            <p>Sign In</p>
            <form onSubmit={handleSubmit}>
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

export default SignIn;