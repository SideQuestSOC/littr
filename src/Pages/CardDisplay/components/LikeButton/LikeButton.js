import React, { useState, useEffect } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { updateLikes, countLikes } from "../../../../Models/queries";
import { getCurrentUserId } from "../../../../Models/client";
import { checkIfLiked } from "../../../../Models/queries";
import LikeBadge from "./LikeBadge";

const LikeButton = ({ event_id, isSignedIn }) => {
  const [user_id, setUserID] = useState("");
  const [isLiked, setIsLiked] = useState(0);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    if (isSignedIn) {
      async function getUserID() {
        setUserID(await getCurrentUserId());
      }
      getUserID();
    }
  }, [isSignedIn]);

  // Check if the current user has already liked this event
  useEffect(() => {
    if (isSignedIn) {
      async function fetchLikedStatus() {
        setIsLiked(await checkIfLiked(event_id));
      }
      fetchLikedStatus();
    }
  }, [event_id, isSignedIn]);

  // Fetch the likes count for the event
  useEffect(() => {
    async function fetchLikesCount() {
      const count = await countLikes(event_id);
      setLikesCount(count);
    }
    fetchLikesCount();
  }, [event_id]);

  const handleUpdateLikes = async () => {
    await updateLikes(user_id, event_id);
    setLikesCount(likesCount + 1);
  };

  return (
    <div>
      <ThumbUpOffAltIcon
        id="like-button"
        onClick={isSignedIn ? handleUpdateLikes : () => alert("Please Sign In to Like!")}
      />
      {/* Render the LikeBadge component with the likesCount */}
      <LikeBadge count={likesCount} />
    </div>
  );
};

export default LikeButton;
