import "./CardDisplay.css";
// import React dependencies
import React from "react";
// import Components
import Card from "./components/Card/Card.js";
import SearchAppBar from "../Components/Navbar/Navbar";
import CreatePostButton from "./components/CreatePostButton/CreatePostButton";
// import SQL queries/functions
import { fetchData, formatDate, formatTime } from '../../Models/queries';

// retrieve event data from DB
let cardData = await fetchData();

function CardDisplay( { isSignedIn, setIsSignedIn } ) {
  return (
    <div>
      <SearchAppBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <div id="card-display-outer-container">

      {cardData.map((card, index) => (
          <Card
            key={index}
            header={card.title}
            location={card.location}
            postcode={card.postcode}
          // creatorname={card.creator_username} also this is incorrect TODO: fix
            date={formatDate(card.date_timestamp)}
            time={formatTime(card.date_timestamp)}
            introduction={card.post_introduction}
            hasUnevenGround={card.has_uneven_ground}
            hasBathrooms={card.has_bathrooms}
            hasParking={card.has_parking}
            isRemoteLocation={card.is_remote_location}
            disposalMethod={card.disposal_method}
            equipment={card.equipment}
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