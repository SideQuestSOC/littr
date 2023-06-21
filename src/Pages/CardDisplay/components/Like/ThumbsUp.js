import React, { useState } from 'react';
import { incrementLikes } from '../../../../Models/client';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Button } from '@mui/material';

const ThumbsUp = ({ event_id, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleThumbsUp = async () => {
    try {
      // Call the incrementLikes function to increment the likes
      await incrementLikes(event_id);

      // Update the likes state
      setLikes(likes + 1);
    } catch (error) {
      // Handle any errors
      console.log('Error incrementing likes:', error);
    }
  };

  return (
    <Button id="like-button" onClick={handleThumbsUp} variant="contained">
      <ThumbUpOffAltIcon />
      <span>{likes}</span>
    </Button>
  );
};

export default ThumbsUp;
