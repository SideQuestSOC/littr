import React, { useState } from 'react';
import { incrementLikes } from '../../../../Models/client';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Button } from '@mui/material';

const ThumbsUp = ({ event_id, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleThumbsUp = async () => {
    try {
    
      await incrementLikes(event_id);

  
      setLikes(likes + 1);
    } catch (error) {

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
