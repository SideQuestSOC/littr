import "./LikeButton.css";
import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { updateLikes } from "../../../../Models/queries";

export default function LikeButton(props) {

  async function handleThumbsUp({ event_id }) {
    await updateLikes(event_id);
  }

  return (
    <Button
      id="like-button"
      onClick={handleThumbsUp}
      variant="contained"
      data-testid="like-button"
    >
      {" "}
      <ThumbUpOffAltIcon />
    </Button>
  );
}
