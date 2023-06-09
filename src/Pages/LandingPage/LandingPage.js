import { Link } from "react-router-dom";

function LandingPage() {
    return <>
            <button>
                <Link to="/src/pages/createpostform">Create Post Form</Link>
            </button>
            <button>
                <Link to="/src/pages/signsignup">Sign In / Sign Up Page</Link>
            </button>
        </>
}

export default LandingPage;