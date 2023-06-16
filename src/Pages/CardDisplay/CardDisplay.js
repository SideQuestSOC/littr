// import { Link } from "react-router-dom";
import "./CardDisplay.css";

import React from "react";
import Card from "./components/Card/Card.js";
import SearchAppBar from "../Components/Navbar/Navbar";
import CreatePostButton from "./components/CreatePostButton/CreatePostButton";


function CardDisplay() {
  return (
    <div>
      <SearchAppBar />
      <div id="card-display-outer-container" data-testid="card-display">
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
      <div className="create-post-container">
        <CreatePostButton />
      </div>
    </div>
  );
}

export default CardDisplay;
