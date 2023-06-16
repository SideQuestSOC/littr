import "./CardDisplay.css";
// import React dependencies
import React from "react";
// import Components
import Card from "./components/Card/Card.js";
import SearchAppBar from "../Components/Navbar/Navbar";
import CreatePostButton from "./components/CreatePostButton/CreatePostButton";
// import SQL queries
import { selectEvent } from '../../Models/queries';

// Test selecting data from DB and console log it
async function fetchData() {
  try {
    const data = await selectEvent();
    return data;
  } catch (error) {
    console.error(error);
  }
}
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
            color="#FC786E"
            location={card.location}
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