// import { Link } from "react-router-dom";
import { useState } from 'react';

// import components
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";

function SignInSignUp() {
    // This state variable 'formData' is used to store form data for the signup and sign in.
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

    return <>
        <SignUp formData={formData} handleChange={handleChange}/>
        <SignIn formData={formData} handleChange={handleChange}/>
    </>
}

export default SignInSignUp;