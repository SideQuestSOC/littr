import "./LikeButton.css";
// import Material UI dependencies
import Button from "@mui/material/Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
// import SQL queries/functions
import { updateLikes } from "../../../../Models/queries";

export default function LikeButton(props) {

  async function handleThumbsUp(event_id) {
    await updateLikes(event_id);
    props.setUpdateLikeBadge(true);
  }

  return (
    <Button
      id="like-button"
      onClick={() => { handleThumbsUp(props.event_id) }}
      variant="contained"
      data-testid="like-button"
    >
      {" "}
      <ThumbUpOffAltIcon />
    </Button>
  );
}
