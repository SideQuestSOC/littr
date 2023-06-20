import "./CardDisplay.css";
// import React dependencies
import React, { useEffect, useState } from "react";
// import Components
import Card from "./components/Card/Card.js";
import SearchAppBar from "../Components/Navbar/Navbar";
import CreatePostButton from "./components/CreatePostButton/CreatePostButton";
// import SQL queries/functions
import { fetchData, formatDate, formatTime } from "../../Models/queries";
import Footer from "../Components/Footer/footer";

// Tristan's really cool hat randomiser
function randomHat() {
  const hatContext = require.context(
    "../../Assets/Hats",  // Folder where we dump all the hats. 
    false,                // This flag is used to prevent searching subdirectories (because we don't have any)
    /\.svg$/i             // This is a regex that matches all files ending in .svg. We could change this to include .png files too by using /\.svg$|\.png$/i
  );
  const hatImages = hatContext.keys().map(hatContext); // hatImages is a list of all images matched by the regex above
  return hatImages[Math.floor(Math.random() * hatImages.length)]; 
}

function CardDisplay({ isSignedIn, setIsSignedIn, cardData, setCardData }) {
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
  }, [updateVolunteerBadge]);

  return (
    <>
      <div data-testid="card-display">
        <SearchAppBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
        <div id="card-display-outer-container">
          {cardData.map((card, index) => (
            <div id="card-display-inner-container" key={index}>
              <img id="hat" src={randomHat()} alt="hat" />
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
            </div>
          ))}
        </div>
        {/* Only render this button when user is signed in */}
        {isSignedIn && (
          <div className="create-post-container">
            <CreatePostButton />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default CardDisplay;
