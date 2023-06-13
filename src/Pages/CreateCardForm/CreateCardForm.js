import React from "react";
import Navbar from "../Navbar/Navbar";
import "./CreateCardForm.css";
import { Stack, Typography, TextField } from "@mui/material";

export default function CreateCardForm() {
  return (
    <div id="create-card-outer-container">
      <Navbar />
      <Typography variant="h3" id="create-card-title">
        Create a Post
      </Typography>
      <Stack spacing={2} direction="column" id="create-card-form-container">
        <TextField
          //   required
          id="post-title"
          label="Title"
          defaultValue=""
          variant="filled"
          sx={{
            "& .MuiFilledInput-input:focus": {
              backgroundColor: "#D9D9D9",
              color: "black",
            },
          }}
        />
        <TextField
          //   required
          id="location-address"
          label="Location address"
          defaultValue=""
          variant="filled"
        />
        <TextField
          //   required
          id="location-postcode"
          label="Location Postcode"
          defaultValue=""
          variant="filled"
        />
        
        
      </Stack>
    </div>
  );
}
