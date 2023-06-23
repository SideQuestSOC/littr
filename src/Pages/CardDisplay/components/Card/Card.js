// import css
import "./Card.css";
// import React dependencies
import React, { useState, useEffect } from "react";
// import Material UI dependencies
import { Typography, Checkbox, FormControlLabel, FormGroup, List, Collapse, Badge, Button, Stack } from "@mui/material";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import VolunteerButton from "../VolunteerButton/VolunteerButton";
import VolunteersBadge from "../VolunteersBadge/VolunteersBadge";
// import Components
import Map from "../../components/Map/Map";
import eyesHappy from "../../../../Assets/eyesHappy.svg";
import LikeButton from "../LikeButton/LikeButton";



// Function to render a checked or not checked checkbox depending on whether the prop is true or false
// Sorry this is so long, it wouldn't let me insert a ternary operator into an element tag
function checkBoolean(booleanProp, checkLabel) {
  let checkboxCheck = booleanProp
    ? (
      <FormControlLabel 
        control={
          <Checkbox id="accessibility-checkbox" 
            disabled 
            defaultChecked 
            sx={{
              "& .css-j204z7-MuiFormControlLabel-root": { color: "black" },
              "& .MuiFormControlLabel-label.Mui-disabled": { color: "black" }
            }}
          /> 
        }
        label={checkLabel} 
      />
    )
    : 
    <FormControlLabel 
    control={
      <Checkbox id="accessibility-checkbox" 
        disabled 
        sx={{
          "& .css-j204z7-MuiFormControlLabel-root": { color: "black" },
          "& .MuiFormControlLabel-label.Mui-disabled": { color: "black" }
        }}
      /> 
    }
    label={checkLabel} 
  />;
  return checkboxCheck;
}

export default function Card(props) {
  const [open, setOpen] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleExpand = () => {
    setOpen(!open);
  };

  const falseReport = () => {
    const reason = prompt("Please explain why you would like to report this post, and press OK to proceed.");
    if (reason) {
    alert(`You have reported this post.\nReason: ${reason}\n\nThank you for your feedback.`);
    }
  };


  
  return (
    <div id="card-outer-container" data-testid="card-display">
      <List id="MUInav" component="nav" aria-labelledby="nested-list-subheader">
        <Stack id="eyes-container" direction="row">
          <img
            id="eyes"
            src={eyesHappy}
            alt="eyesHappy"
          />
        </Stack>
        <div id="title-container">
          <h5 id="card-title" data-testid="card-title">{props.header}</h5>
        </div>
        <Stack
          id="card-button-container"
          direction="row"
          spacing={2}
          padding={2}
        >
          <Button
            id="details-button"
            onClick={handleExpand}
            variant="contained"
            aria-label="Expand or close post" // aria-label for accessibility
          >
            Details
          </Button>
          
         
          
          {/* Added data-testid to test the like button */}
            <LikeButton event_id={props.event_id} isSignedIn={props.isSignedIn} />
         
          <Button id="report-button" onClick={falseReport} variant="contained" aria-label="Report post">
            <FlagOutlinedIcon />
          </Button>
        </Stack>
        <Collapse id="collapsed-card" in={open} timeout="auto" unmountOnExit>
          <List id="collapsed-card-container" component="div">
            <Typography component={'div'} id="card-content-container">
              {/* CARD CONTENT */}
              <Map location={props.location} postcode={props.postcode} />
              <div className="card-content-space"         data-testid="card-location">
                <h4>Location:</h4>
                {props.location}, {props.postcode}
              </div>
              <div className="card-content-space card-content-row" data-testid="card-date">
                <h4><pre>Date: </pre></h4>{props.date}
              </div>
              <div className="card-content-space card-content-row" data-testid="card-time">
                <h4><pre>Time: </pre></h4>{props.time} - {props.end_time}
              </div>
              <div className="card-content-space card-content-row" id="card-content-row-creator">
                <div className="card-content-row" data-testid="card-creator"><h4><pre>Creator: </pre></h4>{props.creatorname}</div>
                <VolunteersBadge count={props.count}/>
              </div>
              <div className="card-content-space" data-testid="card-details">
                <h4>Details:</h4>
                {props.introduction}
              </div>
              
              {/* Render checkboxes based on the accessibility boolean props */}
              <FormGroup className="card-content-space" data-testid="card-checkboxes">
                {checkBoolean(props.hasUnevenGround, "Uneven Ground")}
                {checkBoolean(props.hasBathrooms, "Nearby Bathrooms")}
                {checkBoolean(props.hasParking, "Nearby Parking")}
                {checkBoolean(props.isRemoteLocation, "Remote Location")}
              </FormGroup>

              <div className="card-content-space">
                <h4>Disposal Method:</h4>
                {props.disposalMethod}
              </div>
              <div className="card-content-space">
                <h4>Recommended Equipment:</h4>
                {props.equipment}
              </div>
            </Typography>
            <div id="volunteer-button-container">
            <VolunteerButton event_id={props.event_id} setUpdateVolunteerBadge={props.setUpdateVolunteerBadge} isSignedIn={props.isSignedIn} />
            </div>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
