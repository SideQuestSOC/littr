import React, { useState } from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

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
        width: 350,
        backgroundColor: props.color,
        borderRadius: 10,
        border: "none",
        boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.55)",
        margin: 10,
        paddingBottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <List component="nav" aria-labelledby="nested-list-subheader">
        <h3
          style={{
            marginTop: 0,
            marginBottom: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          ^^
        </h3>
        <h5
          style={{
            backgroundColor: "#D9D9D9",
            borderRadius: 5,
            marginTop: 0,
            marginBottom: 0,
            padding: 5,
            width: 300,
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.35)",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {props.header}
        </h5>
        <div
          className="button-div"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5px",
            padding: "5px",
          }}
        >
          <Button
            onClick={handleExpand}
            variant="contained"
            sx={{
              bgcolor: "#2F3E46",
              color: "#D9D9D9",
              boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.55)",
              borderRadius: "5px",
              fontSize: "12px",
              fontWeight: "semi-bold",
              width: "90px",
              height: "30px",
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
                marginLeft: "60px",
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
              fontSize: 12,
              fontWeight: "bold",
              width: 30,
              height: 30,
              minWidth: 0,
              padding: 0,
              marginLeft: "30px",
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
        </div>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{ overflow: "hidden" }}
        >
          <List
            component="div"
            disablePadding
            sx={{
              bgcolor: "#D9D9D9",
              width: 350,
              borderRadius: "5px",
              border: "none",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                width: 350,
                height: "auto",
                display: "flex",
                justifyContent: "center",
                wordWrap: "break-word",
              }}
            >
              {props.body}
            </Typography>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
