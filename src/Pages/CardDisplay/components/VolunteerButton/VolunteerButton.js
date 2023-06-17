import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./VolunteerButton.css";

// Make MUI button for users to be be able to volunteer
// I will need to export the button for use in other components
// The button should be set to zero and increment by one for every button press
// Button should be limited to one click per user
    
const VolunteerButton = () => {
    const [clickCount, setClickCount] = useState(0);
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleButtonClick = () => {
        setClickCount(clickCount + 1);
        console.log(clickCount);
        // setButtonDisabled(true);
    };

    return (
        <div>
            <Button 
            id="volunteer-button"
            variant="contained" 
            color="primary" onClick={handleButtonClick} disabled={isButtonDisabled}>
                Volunteer
            </Button>
            {/* <p>Number of Volunteers: {clickCount}</p> */}
        </div>
    );
};

export default VolunteerButton;
