import { Link } from "react-router-dom";
import "./CreatePostButton.css";

function CreatePostButton({ themeChange }) {
  return (
    <div>
      <Link
        to="/src/pages/createpostform"
        className={
          themeChange ? "create-post-button" : "create-post-button-two"
        }
        data-testid="create-post-button"
      >
        +
      </Link>
    </div>
  );
}

export default CreatePostButton;
