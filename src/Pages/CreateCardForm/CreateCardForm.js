import React from "react";
import Navbar from "../Navbar/Navbar";
import "./CreateCardForm.css";
import { Stack, Typography, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// This was the only way I could change the colour of the text field highlight
// const jankTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#55DADB" 
//     }
//   }
// });

export default function CreateCardForm() {
  return (
    // <ThemeProvider theme={jankTheme}> 
      <div id="create-card-outer-container">
        <Navbar />
        <Typography variant="h3" id="create-card-title">
          Create a Post
        </Typography>
        <Stack spacing={2} direction="column" id="create-card-form-container">
          <TextField
            id="post-title"
            label="Title"
            defaultValue=""
            variant="filled"
          />
          <TextField
            id="location-address"
            label="Location address"
            defaultValue=""
            variant="filled"
          />
          <TextField
            id="location-postcode"
            label="Location Postcode"
            defaultValue=""
            variant="filled"
          />
        </Stack>
      </div>
    // </ThemeProvider>
  );
}
