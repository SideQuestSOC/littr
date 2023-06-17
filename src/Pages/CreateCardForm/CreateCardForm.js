// import css
import "./CreateCardForm.css";
// import React dependencies
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // useNavigate() is used to redirect to a different page
// import Components
import SearchAppBar from "../Components/Navbar/Navbar";
// import Material UI dependencies
import { Stack, Typography, TextField, Divider, Checkbox, FormGroup, FormControlLabel, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro/SingleInputTimeRangeField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import supabase functions
import { supabaseEventInsert } from "../../Models/queries";
import { getCurrentUserId } from "../../Models/client";



const jankTheme = createTheme({
  palette: {
    primary: {
      main: "#6AAF88",
    },
  },
});

// Get the current users ID
async function UserID() {
  let userId = await getCurrentUserId();
  return userId.id;
}
// Set the current users ID to a variable to be inserted into the PostData object
let creatorUserID = await UserID();
console.log(` User ID: ${creatorUserID}`);



export default function CreateCardForm({ isSignedIn, setIsSignedIn }) {
  // Initialize the navigate object using the useNavigate 'hook'
  const navigate = useNavigate();
  // Redirect to Card display page if a user is not logged in
  useEffect(() => {
    if (!isSignedIn) {
      navigate('/src/pages/carddisplay');
    }
  }, [isSignedIn, navigate]);

  

  const [postTitle, setPostTitle] = useState("");
  const [locationAddress, setLocationAddress] = useState("");
  const [locationPostcode, setLocationPostcode] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");
  const [recommendedEquipment, setRecommendedEquipment] = useState("");
  const [disposalMethod, setDisposalMethod] = useState("");
  const [date, setDate] = useState(null);

  const handlePostTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  const handleLocationAddressChange = (event) => {
    setLocationAddress(event.target.value);
  };


  const handleLocationPostcodeChange = (event) => {
    setLocationPostcode(event.target.value);
  };

  const handleAdditionalInformationChange = (event) => {
    setAdditionalInformation(event.target.value);
  };

  const handleRecommendedEquipmentChange = (event) => {
    setRecommendedEquipment(event.target.value);
  };

  const handleDisposalMethodChange = (event) => {
    setDisposalMethod(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleCreatePost = async () => {
    const PostData = {
      creator_user_id: creatorUserID,
      location: locationAddress,
      postcode: locationPostcode,
      created_at: new Date(),
      likes: 0,
      is_flagged: false,
      post_introduction: additionalInformation,
      title: postTitle,
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
      <SearchAppBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>
      <ThemeProvider theme={jankTheme}>
        <Typography variant="h4" id="create-card-title">
          Create a Post
        </Typography>
        <Stack spacing={2} direction="column" id="create-card-form-container">
          <TextField
            id="post-title"
            placeholder="Title of Post"
            variant="standard"
            value={postTitle}
            onChange={handlePostTitleChange}
          />
          <TextField
            id="location-address"
            placeholder="Address"
            variant="standard"
            value={locationAddress}
            onChange={handleLocationAddressChange}
          />
          <TextField
            id="location-postcode"
            placeholder="Postcode"
            variant="standard"
            value={locationPostcode}
            onChange={handleLocationPostcodeChange}
          />
           <TextField
            id="additional-information"
            className="multi-line-input"
            placeholder="Describe Your Event"
            multiline
            rows={3}
            variant="standard"
            value={additionalInformation}
            onChange={handleAdditionalInformationChange}
          />
          <Divider />
          <Typography id="date-time-title" variant="h6">
            Date and Time
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="date-picker"
              label="Date of Your Event"
              value={date}
              onChange={handleDateChange}
              TextField={(params) => <TextField {...params} />}
              className="custom-date-picker" 
              format="DD/MM/YYYY"
            />
         <SingleInputTimeRangeField
         id="time-range"
  slotProps={{
    textField: ({ position }) => ({
          label: "Start Time - End Time (24-Hour-Format)",
          className: "time-range-field",
          ampm: false,
        }),
      }}
    />

          </LocalizationProvider>
         
          <Divider />
          <Typography id="accessibility-title" variant="h6">
            Accessibility information
          </Typography>
          {/* Accessibility checkboxes */}
          <FormGroup id="accessibility-checkboxes">
            <FormControlLabel
              control={<Checkbox id="checkbox-bathrooms" />}
              className="checkbox"
              label="Nearby Bathrooms"
            />
            <FormControlLabel
              control={<Checkbox id="checkbox-uneven-ground" />}
              className="checkbox"
              label="Uneven ground"
            />
            <FormControlLabel
              control={<Checkbox id="checkbox-remote-location" />}
              className="checkbox"
              label="Remote location"
            />
            <FormControlLabel
              control={<Checkbox id="checkbox-parking" />}
              className="checkbox"
              label="Nearby Parking"
            />
          </FormGroup>
          <Divider />
          {/* Disposal method */}
          <FormControl fullWidth>
            <InputLabel id="disposal-method">Disposal Method</InputLabel>
            <Select
              labelId="disposal-method"
              id="disposal-select"
              value={disposalMethod}
              label="method"
              onChange={handleDisposalMethodChange}
            >
              <MenuItem value={"Pickers must dispose of their own litter"}>
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
          <Typography id="recommended-equipment-title" variant="h6">
            Recommended equipment
          </Typography>
          <TextField
            className="multi-line-input"
            id="recommended-equipment"
            multiline
            placeholder="e.g. gloves, pickers, water"
            rows={3}
            variant="standard"
            value={recommendedEquipment}
            onChange={handleRecommendedEquipmentChange}
          />

          {/* Buttons */}
          <Stack spacing={2} direction="row" id="create-card-button-container">
            <Button id="discard-button" variant="contained">
            <Link id="link" variant="contained"  to="/src/pages/carddisplay">
              Discard
              </Link>
            </Button>
            <Button id="create-button" variant="contained" onClick={() => { handleCreatePost(); alert("Post created, thank you."); navigate('/src/pages/carddisplay'); }}>
              Create Post
            </Button>
          </Stack>
        </Stack>
      </ThemeProvider>
    </div>
  );
}