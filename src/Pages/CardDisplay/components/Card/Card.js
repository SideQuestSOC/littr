import React, { useState } from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { IconButton, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

export default function Card(props) {
  const [open, setOpen] = useState(false);
  //placeholder thumbs up state
  const [thumbsUp, setThumbsUp] = useState(0);

  const handleExpand = () => {
    setOpen(!open);
  };

  //placeholder thumbs up function

  const handleThumbsUp = () => {
    setThumbsUp(thumbsUp + 1);

  };

  const falseReport = () => {
    alert("This post has been reported. Thank you for your feedback.");
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
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: 0,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            marginY: 0,
          }}
        >
          ^^
        </Typography>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <h5
            style={{
              backgroundColor: "#D9D9D9",
              borderRadius: 5,
              marginTop: 0,
              marginBottom: 0,
              padding: 5,
              width: "300px",
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.35)",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {props.header}
          </h5>
        </div>
        <Stack
          direction="row"
          spacing={2}
          padding={2}
          sx={{ display: "flex", justifyContent: "space-around" }}
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
            /* marginLeft: "10px", */
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
              <ThumbUpOffAltIcon />
            </Button>
          </Badge>
          <Button
            onClick={falseReport}
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
            <FlagOutlinedIcon />
          </Button>
        </Stack>
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
                wordBreak: "break-word",
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
