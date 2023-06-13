import React, { useState } from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

// import css
import './Card.css';


export default function Card(props) {
  const [open, setOpen] = useState(false);
  // placeholder thumbs up state
  const [thumbsUp, setThumbsUp] = useState(0);

  const handleExpand = () => {
    setOpen(!open);
  };

  // placeholder thumbs up function
  const handleThumbsUp = () => {
    setThumbsUp(thumbsUp + 1);
  };

  const falseReport = () => {
    alert("This post has been reported. Thank you for your feedback.");
  };

  return (
    <div id="card-outer-container" style={{backgroundColor: props.color}}>
      <List id="MUInav" component="nav" aria-labelledby="nested-list-subheader">
        <Typography id="eyes" variant="h5" component="div">^^</Typography>
        <div id="title-container">
          <h5 id="card-title">{props.header}</h5>
        </div>
        <Stack id="card-button-container" direction="row" spacing={2} padding={2}>
          <Button id="details-button" onClick={handleExpand} variant="contained">
            Details
          </Button>
          <Badge badgeContent={thumbsUp} sx={{ "& .MuiBadge-badge": { backgroundColor: "#D9D9D9", color: "black"} }}>
            <Button id="like-button" onClick={handleThumbsUp} variant="contained">
              <ThumbUpOffAltIcon />
            </Button>
          </Badge>
          <Button id="report-button" onClick={falseReport} variant="contained">
            <FlagOutlinedIcon />
          </Button>
        </Stack>
        <Collapse id="collapsed-card" in={open} timeout="auto" unmountOnExit>
          <List id="collapsed-card-container" component="div">
            <Typography id="card-content-container">
              {/* INSERT DETAILS COMPONENTS HERE */}
              {props.body}
            </Typography>
          </List>
        </Collapse>
      </List>
    </div>
  );
}