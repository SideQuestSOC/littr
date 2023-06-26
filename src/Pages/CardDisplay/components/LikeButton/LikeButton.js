import React, { useState, useEffect } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { updateLikes, countLikes, checkIfLiked } from "../../../../Models/queries";
import { getCurrentUserId } from "../../../../Models/client";
import LikeBadge from "./LikeBadge";

const LikeButton = ({ event_id, isSignedIn }) => {
  const [user_id, setUserID] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    if (isSignedIn) {
      async function getUserID() {
        setUserID(await getCurrentUserId());
      }
      getUserID();
    }
  }, [isSignedIn]);

  useEffect(() => {
    async function fetchLikedStatus() {
      if (isSignedIn) {
        const liked = await checkIfLiked(event_id);
        setIsLiked(liked);
      }
    }
    fetchLikedStatus();
  }, [event_id, isSignedIn]);

  useEffect(() => {
    async function fetchLikesCount() {
      const count = await countLikes(event_id);
      setLikesCount(count);
    }
    fetchLikesCount();
  }, [event_id]);

  const handleUpdateLikes = async () => {
    if (!isLiked && isSignedIn) {
      await updateLikes(user_id, event_id);
      setLikesCount(likesCount + 1);
      setIsLiked(true);
    }
  };

  return (
    <div>
      <ThumbUpOffAltIcon
        id="like-button"
        onClick={handleUpdateLikes}
        disabled={isLiked || !isSignedIn}
      />
      <LikeBadge count={likesCount} />
    </div>
  );
};

export default LikeButton;