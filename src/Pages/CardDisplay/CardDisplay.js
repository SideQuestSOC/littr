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

function CardDisplay({ isSignedIn, setIsSignedIn, cardData, setCardData, setFilter, filter }) {
  const [updateVolunteerBadge, setUpdateVolunteerBadge] = useState(false);
  const [updateLikeBadge, setUpdateLikeBadge] = useState(false);

  // Wrapped in useEffect to trigger rerender of cards when a new card is added by a user
  // Also re-renders when like button/volunteer buttons are clicked
  useEffect(() => {
    async function setFetchedData() {
      // retrieve event data from DB
      setCardData(await fetchData(filter));
      // reset useStates to allow them to trigger again
      setUpdateVolunteerBadge(false);
      setUpdateLikeBadge(false);
    }
    setFetchedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateVolunteerBadge, updateLikeBadge, filter]);

  // reset the filter search term when navigating back from a different page
  useEffect(() => {
    setFilter("")
  }, [setFilter])

  return <div className="outermost-container">
    <div data-testid="card-display">
      <SearchAppBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setFilter={setFilter} filter={filter} />
      <div id="card-display-outer-container">
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
            isSignedIn={isSignedIn}
            setUpdateLikeBadge={setUpdateLikeBadge}
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
    
  <Footer />
  </div> 
}

export default CardDisplay;
