import React from "react";
import Navbar from "../Navbar/Navbar";
import "./CreateCardForm.css";
import {
  Stack,
  Typography,
  TextField,
  Divider,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// This was the only way I could change the colour of the text field highlight
const jankTheme = createTheme({
  palette: {
    primary: {
      main: "#6AAF88"
    }
  }
});

export default function CreateCardForm() {
  return (
    
    <div id="create-card-outer-container">
      <Navbar />
      <ThemeProvider theme={jankTheme}>
      <Typography variant="h4" id="create-card-title">
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

        {/* Somewhere here we can add a date/time picker or some individual ones */}
        <Divider />
        <Typography id="accessability-title" variant="h6">
          Accessability information
        </Typography>
        {/* Accessability checkboxes */}
        <FormGroup id="accessability-checkboxes">
          <FormControlLabel control={<Checkbox />} label="Nearby Bathrooms" />
          <FormControlLabel control={<Checkbox />} label="Uneven ground" />
          <FormControlLabel control={<Checkbox />} label="Remote location" />
          <FormControlLabel
            //  I added a defaultChecked prop to the checkbox to show how it works
            control={<Checkbox defaultChecked />}
            label="Nearby Parking"
          />
        </FormGroup>
        <Divider />
        <Typography id="recommended-equipment-title" variant="h8">
          Recommended equipment
        </Typography>
        {/* The below text field does not like being styled */}
        <TextField
          id="recommended-equipment"
          multiline
          rows={3}
          variant="standard"
        />
        <TextField
          id="disposal-method"
          label="How will litter be disposed of?"
          defaultValue=""
          variant="filled"
        />
        <Typography id="additional-information-title" variant="h8">
          Additional information
        </Typography>
        <TextField
          id="additional-information"
          multiline
          rows={3}
          variant="standard"
        />

        <Stack spacing={2} direction="row" id="create-card-button-container">
          <Button id="discard-button" variant="contained">
            Discard
          </Button>
          <Button id="create-button" variant="contained">
            Create Post
          </Button>
        </Stack>
      </Stack>
      </ThemeProvider>
    </div>
    
  );
}
