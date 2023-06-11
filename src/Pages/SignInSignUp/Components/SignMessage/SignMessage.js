// import css
import './SignMessage.css';

function SignMessage({ message }) {
    return (
        <div id="sign-in-message">
            <h3>{message}</h3>
        </div>
    );
}

export default SignMessage;