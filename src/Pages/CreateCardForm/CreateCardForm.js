// import css
import "./CreateCardForm.css";
// import React dependencies
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // useNavigate() is used to redirect to a different page
// import Components
import SearchAppBar from "../Components/Navbar/Navbar";
// import Material UI dependencies
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
// import supabase functions
import { supabaseEventInsert, fetchData } from "../../Models/queries";
import { getCurrentUserId } from "../../Models/client";
import { isValid } from "postcode";
import Footer from "../Components/Footer/footer";

const jankTheme = createTheme({
  palette: {
    primary: {
      main: "#6AAF88",
    },
  },
});

export default function CreateCardForm({
  isSignedIn,
  setIsSignedIn,
  setCardData,
  setFilter
}) {

  // Initialize the navigate object using the useNavigate 'hook'
  const navigate = useNavigate();
  // Redirect to Card display page if a user is not logged in
  useEffect(() => {
    if (!isSignedIn) {
      navigate("/src/pages/carddisplay");
    }
  }, [isSignedIn, navigate]);

  const [postTitle, setPostTitle] = useState("");
  const [locationAddress, setLocationAddress] = useState("");
  const [locationPostcode, setLocationPostcode] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");
  const [recommendedEquipment, setRecommendedEquipment] = useState("");
  const [disposalMethod, setDisposalMethod] = useState("");
  const [date, setDate] = useState(null);
  const [Time, setTime] = useState(null);
  const [currentUserID, setcurrentUserID] = useState();

  // Get the current users ID
  async function UserID() {
    let userId = await getCurrentUserId();
    setcurrentUserID(userId);
    console.log(userId);
  }
  UserID();
  console.log(currentUserID);

  const handlePostTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  const handleLocationAddressChange = (event) => {
    setLocationAddress(event.target.value);
  };

  const [isPostcodeValid, setIsPostcodeValid] = useState(true);

  const handleLocationPostcodeChange = (event) => {
    const postcode = event.target.value;
    setLocationPostcode(postcode);

    // Validate the postcode
    const isValidPostcode = isValid(postcode);
    setIsPostcodeValid(isValidPostcode);
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

  const handleTimeChange = (Time) => {
    setTime(Time);
  };

  const handleCreatePost = async () => {
    if (
      postTitle === "" ||
      locationAddress === "" ||
      locationPostcode === "" ||
      additionalInformation === "" ||
      disposalMethod === "" ||
      date === null ||
      Time === null
    ) {
      alert("Please fill it all in!");
      return;
    } else if (!isPostcodeValid) {
      alert("Please enter a valid postcode!");
      return;
    } else {
      alert("Post created, thank you.");
      navigate("/src/pages/carddisplay");
    }

    let startDateTime = new Date(date);
    startDateTime.setHours(Time[0].hour(), Time[0].minute());

    let endDateTime = new Date(date);
    endDateTime.setHours(Time[1].hour(), Time[1].minute());

    const PostData = {
      creator_user_id: currentUserID,
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
      has_parking:
        document.getElementById("checkbox-parking")?.checked || false,
      is_remote_location:
        document.getElementById("checkbox-remote-location")?.checked || false,
      disposal_method: disposalMethod,
      equipment: recommendedEquipment,
      date_timestamp: startDateTime,
      end_time: endDateTime,
    };

    // Call function to run SQL query for public.Events table insertion
    // Rerender the page when a new card is added to database
    if (supabaseEventInsert(PostData)) {
      setCardData(await fetchData());
    }
  };

  return <>
    <div id="create-card-outer-container" data-testid="create-card-form">
      <SearchAppBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setFilter={setFilter} />
      <ThemeProvider theme={jankTheme}>
        <Typography variant="h4" id="create-card-title">
          Create a Post
        </Typography>
        <Stack spacing={2} direction="column" id="create-card-form-container">
          <TextField
            id="post-title"
            placeholder="Title of Post"
            multiline
            rows={1}
            InputLabelProps={{ shrink: true }}
            variant="standard"
            value={postTitle}
            onChange={handlePostTitleChange}
            inputProps={{ maxLength: 50 }}
            label={
              postTitle.length < 5 && postTitle.length >= 1
                ? "Title must be at least 5 characters"
                : `${postTitle.length}/50`
            }
            error={postTitle.length < 5 && postTitle.length >= 1}
            data-testid="post-title-input"
          />
          <TextField
            id="location-address"
            placeholder="Address"
            multiline
            rows={1}
            variant="standard"
            value={locationAddress}
            onChange={handleLocationAddressChange}
            inputProps={{ maxLength: 255 }}
          />
          <TextField
            id="location-postcode"
            placeholder="Postcode"
            multiline
            rows={1}
            variant="standard"
            value={locationPostcode}
            onChange={handleLocationPostcodeChange}
            error={!isPostcodeValid}
            helperText={!isPostcodeValid ? "Invalid postcode" : ""}
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
            inputProps={{ maxLength: 500 }}
            label={
              additionalInformation.length < 20 &&
              additionalInformation.length >= 1
                ? "This section must be at least 20 characters"
                : `${additionalInformation.length}/500`
            }
            error={
              additionalInformation.length < 20 &&
              additionalInformation.length >= 1
            }
            InputLabelProps={{ shrink: true }}
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
              data-testid="time-input"
              slotProps={{
                textField: ({ position }) => ({
                  label: "Start Time - End Time (24-Hour-Format)",
                  className: "time-range-field",
                  value: Time,
                  onChange: handleTimeChange,
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
            InputLabelProps={{ shrink: true }}
            value={recommendedEquipment}
            inputProps={{ maxLength: 255 }}
            label={`${recommendedEquipment.length}/255`}
            onChange={handleRecommendedEquipmentChange}
          />

          {/* Buttons */}
          <Stack spacing={2} direction="row" id="create-card-button-container">
            <Button id="discard-button" variant="contained">
              <Link id="link" variant="contained" to="/src/pages/carddisplay">
                Discard
              </Link>
            </Button>
            <Button
              id="create-button"
              variant="contained"
              onClick={() => {
                handleCreatePost();
              }}
            >
              Create Post
            </Button>
          </Stack>
        </Stack>
      </ThemeProvider>
    </div>
    <Footer />
  </>
}