import React, { useState, useEffect } from "react";
import { getLikedEventIdsByUserId } from "../../../../Models/client";

const LikedCardsButton = ({ userUUID }) => {
  const [likedCards, setLikedCards] = useState([]);

  useEffect(() => {
    const fetchLikedCards = async () => {
      const cards = await getLikedEventIdsByUserId(userUUID);
      setLikedCards(cards);
    };

    fetchLikedCards();
  }, [userUUID]);

  const handleShowLikedCards = () => {
    // Handle displaying the liked cards in your UI (e.g., modal, popup, etc.)
    console.log(likedCards);
  };

  return (
    <div>
      <button onClick={handleShowLikedCards}>Show Liked Cards</button>
    </div>
  );
};

export default LikedCardsButton;
