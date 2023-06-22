import "./LikeButton.css";
// import Material UI dependencies
import Button from "@mui/material/Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
// import SQL queries/functions
import { updateLikes } from "../../../../Models/queries";

export default function LikeButton(props) {
  async function handleThumbsUp(event_id, isSignedIn) {

    if(isSignedIn) {
      await updateLikes(event_id);
     props.setUpdateLikeBadge(true);
    } else {
      alert("Please Sign In to Like an Event!");
    }
  }

  return (
    <Button
      id="like-button"
      onClick={() => { handleThumbsUp(props.event_id, props.isSignedIn) }}
      variant="contained"
      data-testid="like-button"
      aria-label="Like event" // aria-label for accessibility
    >
      {" "}
      <ThumbUpOffAltIcon />
    </Button>
  );
}
