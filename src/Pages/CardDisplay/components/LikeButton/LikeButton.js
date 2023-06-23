import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { updateLikes } from "../../../../Models/queries";
import { getCurrentUserId } from "../../../../Models/client";

const LikeButton = ({ event_id, isSignedIn }) => {
  const [user_id, setUserID] = useState("");

  useEffect(() => {
    if (isSignedIn) {
      async function getUserID() {
        setUserID(await getCurrentUserId());
          }

      getUserID();
    }
  }, [isSignedIn]);

  const handleUpdateLikes = async () => {
      await updateLikes(user_id, event_id);
    };

  return (
    <div>
      <Button
        id="like-button"
        variant="contained"
        onClick={isSignedIn ? () => handleUpdateLikes() : () => alert("Please Sign In to Like!")}>
        <ThumbUpOffAltIcon />
      </Button>
    </div>
  );
};

export default LikeButton;