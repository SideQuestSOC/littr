// import css
import "./CardDisplay.css";
// import React dependencies
import React, { useEffect, useState } from "react";
// import Components
import Card from "./components/Card/Card.js";
import SearchAppBar from "../Components/Navbar/Navbar";
import CreatePostButton from "./components/CreatePostButton/CreatePostButton";
import Footer from "../Components/Footer/footer";
// import infinite scroll package
import { Waypoint } from 'react-waypoint';
// import SQL queries/functions
import { fetchData, formatDate, formatTime} from "../../Models/queries";


function CardDisplay({ isSignedIn, setIsSignedIn, cardData, setCardData, setFilter, filter }) {
  const [updateVolunteerBadge, setUpdateVolunteerBadge] = useState(false);
  const [deleteVolunteersBadge, setDeleteVolunteersBadge] = useState(false);
  const [updateLikeBadge, setUpdateLikeBadge] = useState(false);
  const [hats, setHats] = useState([]);
  const [endOfPage, setEndOfPage] = useState(false);

  async function getHats() {
    const hatContext = require.context(
      "../../Assets/Hats", // Folder where we dump all the hats. :)
      false, // This flag is used to prevent searching subdirectories (because we don't have any)
      /\.svg$/i // This is a regex that matches all files ending in .svg. We could change this to include .png files too by using /\.svg$|\.png$/i
    );
    await setHats(
      hatContext
        .keys()
        .map(hatContext)
        .sort(() => Math.random() - 0.5)
    );
  }

  useEffect(() => {
    getHats();
  }, []);

  // Wrapped in useEffect to trigger rerender of cards when a new card is added by a user
  // Also re-renders when like button/volunteer buttons are clicked
  useEffect(() => {
    async function setFetchedData() {
      // retrieve event data from DB
      setCardData(await fetchData(filter, endOfPage, setEndOfPage));
      // reset useStates to allow them to trigger again
      setUpdateVolunteerBadge(false);
      setDeleteVolunteersBadge(false);
      setUpdateLikeBadge(false);
    }
    setFetchedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateVolunteerBadge, deleteVolunteersBadge, updateLikeBadge, filter, endOfPage]);

  // reset the filter search term when navigating back from a different page
  useEffect(() => {
    setFilter("")
  }, [setFilter])

  return (
  <div className="outermost-container">
    <div data-testid="card-display">
      <SearchAppBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setFilter={setFilter} filter={filter} />
      <div id="card-display-outer-container">
        {cardData.map((card, index) => (
         <div id="card-display-inner-container" key={index}>
          <img id="hat" src={hats[index % hats.length]} alt="hat" />
          {/* hats[index % hats.length] to accesses the appropriate hat based on the current index of the map function. 
         The modulus operation (%) ensures that the hats are cycled through repeatedly as the index increases. */}
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
            setDeleteVolunteersBadge={setDeleteVolunteersBadge}
            />
           </div>
        ))}
        {/* Check if user scrolls to the end of the page AFTER the cardData has been mapped */}
        {cardData.length > 0 && (
          <Waypoint
            onEnter={() => {console.log("End of page."); setEndOfPage(true);}}
            onLeave={() => console.log("Left end of page.")}
          />
        )}
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
  );
}

export default CardDisplay;