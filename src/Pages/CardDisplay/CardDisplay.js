// import { Link } from "react-router-dom";
import Card from "./components/Card/Card.js";

function CardDisplay() {
  return (
    <Card
      header="Let's clean up Pentewan beach!"
      color="#FC786E"
      body="Hi guys!
  You've likely noticed the horrific state of our beloved beach as of late!
  Let's do something about it! If I can get some of you to assist me, I can provide gloves and bin bags!"
    />
  );
}

export default CardDisplay;
