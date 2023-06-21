import "./CardDisplay.css";
// import React dependencies
import React, { useEffect, useState } from "react";
// import Components
import Card from "./components/Card/Card.js";
import SearchAppBar from "../Components/Navbar/Navbar";
import CreatePostButton from "./components/CreatePostButton/CreatePostButton";
// import SQL queries/functions
import { fetchData, formatDate, formatTime } from '../../Models/queries';


function CardDisplay( { isSignedIn, setIsSignedIn, cardData, setCardData } ) {
  const [updateVolunteerBadge, setUpdateVolunteerBadge] = useState(false);

// Wrapped in useEffect to trigger rerender of cards when a new card is added by a user
  useEffect(() => {
    async function setFetchedData() {
        // retrieve event data from DB
        setCardData(await fetchData());
        setUpdateVolunteerBadge(false);
    }
    setFetchedData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateVolunteerBadge])

  return (
    <div>
      <SearchAppBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <div id="card-display-outer-container" data-testid="card-display">

      {cardData.map((card, index) => (
          <Card
            key={index}
            event_id={card.event_id}
            count={card.count}
            header={card.title}
            location={card.location}
            postcode={card.postcode}
            creatorname={card.users.first_name + " " + card.users.last_name}
            date={formatDate(card.date_timestamp)}
            time={formatTime(card.date_timestamp)}
            introduction={card.post_introduction}
            hasUnevenGround={card.has_uneven_ground}
            hasBathrooms={card.has_bathrooms}
            hasParking={card.has_parking}
            isRemoteLocation={card.is_remote_location}
            disposalMethod={card.disposal_method}
            equipment={card.equipment}
            end_time={formatTime(card.end_time)}
            setUpdateVolunteerBadge={setUpdateVolunteerBadge}
          />
        ))}

      </div>
      {/* Only render this button when user is signed in */}
      {isSignedIn && (
        <div className="create-post-container">
          <CreatePostButton />
        </div>
      )}
    </div>
  );
}

export default CardDisplay;