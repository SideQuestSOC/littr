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
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchData();

function CardDisplay( { isSignedIn, setIsSignedIn } ) {
  return (
    <div>
      <SearchAppBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <div id="card-display-outer-container">
        <Card
          header="Let's clean up Pentewan beach!"
          color="#FC786E"
          body={`Hi guys!
    You've likely noticed the horrific state of our beloved beach as of late!
    Let's do something about it! If I can get some of you to assist me, I can provide gloves and bin bags!`}
        />
        <Card
          header="Let's clean up Pentewan beach!"
          color="#55DADB"
          body={`Hi guys!
    You've likely noticed the horrific state of our beloved beach as of late!
    Let's do something about it! If I can get some of you to assist me, I can provide gloves and bin bags!`}
        />
        <Card
          header="Let's clean up Pentewan beach!"
          color="#6AAF88"
          body={`Hi guys!
    You've likely noticed the horrific state of our beloved beach as of late!
    Let's do something about it! If I can get some of you to assist me, I can provide gloves and bin bags!`}
        />
        <Card
          header="Let's clean up Pentewan beach!"
          color="#F5BB02"
          body={`Hi guys!
    You've likely noticed the horrific state of our beloved beach as of late!
    Let's do something about it! If I can get some of you to assist me, I can provide gloves and bin bags!`}
        />
        <Card
          header="Let's clean up Pentewan beach!"
          color="#FC786E"
          body={`Hi guys!
    You've likely noticed the horrific state of our beloved beach as of late!
    Let's do something about it! If I can get some of you to assist me, I can provide gloves and bin bags!`}
        />
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