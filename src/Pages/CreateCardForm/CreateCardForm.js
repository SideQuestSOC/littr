import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
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
          id="first-name"
          label="First name"
          defaultValue=""
          variant="filled"
          sx={{ "& .MuiFilledInput-input:focus": { backgroundColor: "#D9D9D9", color: "black"} }}
        />
        <TextField
          //   required
          id="second-name"
          label="Surname"
          defaultValue=""
          variant="filled"
        />
      </Stack>

    </div>
  );
}
