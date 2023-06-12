// import css
import './SignMessage.css';

function SignMessage({ message, signUpRedirect }) {
    return (
        <div id={signUpRedirect ? "sign-in-message-success" : "sign-in-message-failure"} >
            <h3>{message}</h3>
        </div>
    );
}

export default SignMessage;