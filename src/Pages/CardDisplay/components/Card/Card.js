import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";

export default function Card4(props) {
  const [open, setOpen] = useState(false);
  const [thumbsUp, setThumbsUp] = useState(0);

  const handleExpand = () => {
    setOpen(!open);
  };

  const handleThumbsUp = () => {
    setThumbsUp(thumbsUp + 1);
  };

  return (
    <div
      style={{
        width: 480,
        backgroundColor: props.color,
        borderRadius: "10px",
        border: "none",
        boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.55)",
        marginBottom: "10px",
        marginTop: "10px",
        paddingBottom: 0,
      }}
    >
      <List component="nav" aria-labelledby="nested-list-subheader">
        <h2
          style={{
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          ^^
        </h2>
        <h4
          style={{
            backgroundColor: "#D9D9D9",
            borderRadius: "5px",
            margin: "0 25px 10px",
            padding: "10px",
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.35)",
          }}
        >
          {props.header}
        </h4>
        <Button
          onClick={handleExpand}
          variant="contained"
          sx={{
            bgcolor: "#2F3E46",
            color: "#D9D9D9",
            boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.55)",
            borderRadius: "5px",
            fontSize: "12px",
            fontWeight: "bold",
            width: "90px",
            height: "30px",
            alignContent: "left",
            marginRight: "auto",
            ":hover": {
              backgroundColor: "#D9D9D9",
              color: "#2F3E46",
              boxShadow: "2px 2px 1px 0px rgba(0, 0, 0, 0.55)",
              transition: "0.2s",
            },
            ":active": {
              backgroundColor: "#D9D9D9",
              color: "#2F3E46",
              transform: "translate(2px, 2px)",
              boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.55)",
              transition: "0.1s",
            },
          }}
        >
          Details
        </Button>
        <Badge
          badgeContent={thumbsUp}
          color="primary"
          sx={{
            marginLeft: "10px",
            
          }}
        >
          <Button
            onClick={handleThumbsUp}
            variant="contained"
            sx={{
              bgcolor: "#2F3E46",
              color: "#D9D9D9",
              boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.55)",
              borderRadius: "5px",
              fontSize: "12px",
              fontWeight: "bold",
              width: 30,
              height: 30,
              minWidth: 0,
              padding: 0,
              "& .MuiButton-label": {
                width: "100%",
              },
              ":hover": {
                backgroundColor: "#D9D9D9",
                color: "#2F3E46",
                boxShadow: "2px 2px 1px 0px rgba(0, 0, 0, 0.55)",
                transition: "0.2s",
              },
              ":active": {
                backgroundColor: "#D9D9D9",
                color: "#2F3E46",
                transform: "translate(2px, 2px)",
                boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.55)",
                transition: "0.1s",
              },
            }}
          >
            +
          </Button>
        </Badge>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#2F3E46",
            color: "#D9D9D9",
            boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.55)",
            borderRadius: "5px",
            fontSize: "12px",
            fontWeight: "bold",
            width: 30,
            height: 30,
            minWidth: 0,
            padding: 0,
            marginLeft: "10px",
            "& .MuiButton-label": {
              width: "100%",
            },
            ":hover": {
              backgroundColor: "#D9D9D9",
              color: "#2F3E46",
              boxShadow: "2px 2px 1px 0px rgba(0, 0, 0, 0.55)",
              transition: "0.2s",
            },
            ":active": {
              backgroundColor: "#D9D9D9",
              color: "#2F3E46",
              transform: "translate(2px, 2px)",
              boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.55)",
              transition: "0.1s",
            },
          }}
        >
          !
        </Button>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              bgcolor: "#D9D9D9",
              height: "100%",
              maxHeight: 500,
              borderRadius: "5px",
              border: "none",
              zIndex: 1,
            }}
          >
            <ListItemText
              primary={props.body}
              sx={{
                padding: "10px",
                marginBottom: "0px",
              }}
            />
          </List>
        </Collapse>
      </List>
    </div>
  );
}
