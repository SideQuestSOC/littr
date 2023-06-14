import React, { useState } from "react";
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MultiInputTimeRangeField } from "@mui/x-date-pickers-pro/MultiInputTimeRangeField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// This was the only way I could change the colour of the text field highlight
const jankTheme = createTheme({
  palette: {
    primary: {
      main: "#6AAF88",
    },
  },
});

export default function CreateCardForm() {
  const [age, setAge] = useState(""); // Declare the 'age' state variable

  const handleChange = (event) => {
    setAge(event.target.value); // Define the 'handleChange' function
  };

  return (
    <div id="create-card-outer-container">
      <Navbar />
      <ThemeProvider theme={jankTheme}>
        <Typography variant="h4" id="create-card-title">
          Create a Post
        </Typography>
        {/* Top input fields */}
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
          {/* Date picker below */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of event"
              className="date-picker"
              format="DD/MM/YYYY"
              variant="inline"
            />
            <MultiInputTimeRangeField
              id="time-range"
              slotProps={{
                textField: ({ position }) => ({
                  label: position === "start" ? "Start time" : "End time",
                  className: "time-range-field",
                }),
              }}
            />
          </LocalizationProvider>
          <Typography id="additional-information-title" variant="h8">
            Details
          </Typography>
          <TextField
            id="additional-information"
            className="multi-line-input"
            multiline
            rows={3}
            variant="standard"
          />
          <Divider />
          <Typography id="accessability-title" variant="h6">
            Accessibility information
          </Typography>
          {/* Accessibility checkboxes */}
          <FormGroup id="accessibility-checkboxes">
            <FormControlLabel
              control={<Checkbox />}
              className="checkbox"
              label="Nearby Bathrooms"
            />
            <FormControlLabel
              control={<Checkbox />}
              className="checkbox"
              label="Uneven ground"
            />
            <FormControlLabel
              control={<Checkbox />}
              className="checkbox"
              label="Remote location"
            />
            <FormControlLabel
              //  I added a defaultChecked prop to the checkbox to show how it works
              control={<Checkbox defaultChecked />}
              className="checkbox"
              label="Nearby Parking"
            />
          </FormGroup>
          <Divider />
          {/* Disposal method */}
          <FormControl fullWidth>
            <InputLabel id="disposal-method">Disposal Method</InputLabel>
            <Select
              labelId="-select-label"
              id="disposal-select"
              value={age}
              label="method"
              onChange={handleChange}
            >
              <MenuItem value={1}>
                Pickers must dispose of their own litter
              </MenuItem>
              <MenuItem value={2}>Council pick-up</MenuItem>
              <MenuItem value={3}>On-site Refuse disposal</MenuItem>
              <MenuItem value={4}>Literal dumpster fire</MenuItem>
            </Select>
          </FormControl>
          <Typography id="recommended-equipment-title" variant="h8">
            Recommended equipment
          </Typography>
          <TextField
            className="multi-line-input"
            id="recommended-equipment"
            multiline
            rows={3}
            variant="standard"
          />

          {/* Buttons */}
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
