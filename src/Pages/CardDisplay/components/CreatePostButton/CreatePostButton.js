import { Link } from "react-router-dom";
import "./CreatePostButton.css";

function CreatePostButton() {
  return (
    <div>
      <Link to="/src/pages/createpostform" className="create-post-button">
        +
      </Link>
    </div>
  );
}

export default CreatePostButton;
