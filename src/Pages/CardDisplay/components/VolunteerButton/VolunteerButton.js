// import css
import "./VolunteerButton.css";
// import React dependencies
import React, { useState, useEffect } from 'react';
// import Material UI dependencies
import Button from '@mui/material/Button';
// import SQL queries/functions
import { insertEventVolunteer } from "../../../../Models/queries";
import { getCurrentUserId } from "../../../../Models/client";

const VolunteerButton = ({ event_id, setUpdateVolunteerBadge, isSignedIn }) => {
    const [userID, setUserID] = useState("");

    useEffect(() => {
        if (isSignedIn) {
          async function getUserID() {
            setUserID(await getCurrentUserId());
          }
      
          getUserID();
        }
      }, [isSignedIn]);
      

    const handleInsertVolunteer = async () => {
        await insertEventVolunteer(userID.id, event_id);
        setUpdateVolunteerBadge(true);
      };

    return (
        <div>
            <Button 
            id="volunteer-button"
            variant="contained" 
            color="primary" 
            aria-label="Volunteer" // adding aria-label for accessibility
            onClick={
                isSignedIn 
                    ? () => { 
                        handleInsertVolunteer(); 
                        alert("Thank you for volunteering!"); 
                    }
                    : () => alert("Please Sign In to Volunteer!")
            }>
                Volunteer
            </Button>
        </div>
    );
};

export default VolunteerButton;