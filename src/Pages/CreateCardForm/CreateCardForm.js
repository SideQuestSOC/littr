import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
// Import SQL queries
import { supabaseEventInsert } from "../../Models/queries";
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
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro/SingleInputTimeRangeField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

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


  const handleDisposalMethodChange = (event) => {
    setDisposalMethod(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleCreatePost = async () => {
    const PostData = {
      creator_user_id: "XXX",
      location: locationAddress,
      address: locationPostcode,
      created_at: new Date(),
      likes: 0,
      is_flagged: false,
      post_introduction: postTitle,
      has_uneven_ground:
        document.getElementById("checkbox-uneven-ground")?.checked || false,
      has_bathrooms:
        document.getElementById("checkbox-bathrooms")?.checked || false,
      has_parking: document.getElementById("checkbox-parking")?.checked || false,
      is_remote_location:
        document.getElementById("checkbox-remote-location")?.checked || false,
      disposal_method: disposalMethod,
      equipment: recommendedEquipment,
      date_timestamp: new Date(date),
    };

    // Call function to run SQL query for public.Events table insertion
    supabaseEventInsert(PostData);
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

            placeholder="Title"
            variant="standard"
            value={postTitle}
            onChange={handlePostTitleChange}
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

              id="date-picker"
              label="Date"
              value={date}
              onChange={handleDateChange}
              TextField={(params) => <TextField {...params} />}
              className="custom-date-picker" 
            />
            <SingleInputTimeRangeField 
              id="time-range"
              slotProps={{
                textField: ({ position }) => ({
                label:"Start Time - End Time",
                className: "time-range-field"
                }),
              }}
            />

          </LocalizationProvider>
          <Typography id="additional-information-title" variant="h8">
          </Typography>
          <TextField
            id="additional-information"
            className="multi-line-input"
            placeholder="Additional information"
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

              <MenuItem value={"Council pick-up"}>Council pick-up</MenuItem>
              <MenuItem value={"On-site Refuse disposal"}>
                On-site Refuse disposal
              </MenuItem>
              <MenuItem value={"Literal dumpster fire"}>
                Literal dumpster fire
              </MenuItem>
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
            <Link id="link" variant="contained"  to="/src/pages/carddisplay">
              Discard
              </Link>
            </Button>
            <Button id="create-button" variant="contained"  onClick={handleCreatePost}>
              Create Post
            </Button>
          </Stack>
        </Stack>
      </ThemeProvider>
    </div>
  );
}
