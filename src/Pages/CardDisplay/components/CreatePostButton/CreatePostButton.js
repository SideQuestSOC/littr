import { Link } from "react-router-dom";
import "./CreatePostButton.css";
import { Button } from "@mui/material";

function CreatePostButton() {
  return (
    <Button variant="contained">
      <Link to="/src/pages/createpostform" className="create-post-button">
        +
      </Link>
    </Button>
  );
}

export default CreatePostButton;
