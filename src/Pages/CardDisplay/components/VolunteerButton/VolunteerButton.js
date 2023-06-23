// import css
import "./VolunteerButton.css";
// import React dependencies
import React, { useState, useEffect } from 'react';
// import Material UI dependencies
import Button from '@mui/material/Button';
// import SQL queries/functions
import { insertEventVolunteer, checkIfVolunteer, deleteEventVolunteer } from "../../../../Models/queries";
import { getCurrentUserId } from "../../../../Models/client";

const VolunteerButton = ({ event_id, setUpdateVolunteerBadge, isSignedIn, setDeleteVolunteersBadge }) => {
    const [userID, setUserID] = useState("");
    const [isVolunteer, setIsVolunteer] = useState(0);

    useEffect(() => {
        if (isSignedIn) {
          async function getUserID() {
            setUserID(await getCurrentUserId());
          }
      
          getUserID();
        }
    }, [isSignedIn, userID]);

    // Check if the current user is already volunteering for this event
    useEffect(() => {
      if (isSignedIn) {
        async function checkIfVolunteered() {
          setIsVolunteer(await checkIfVolunteer(event_id));
        }
        checkIfVolunteered();
    }
    }, [event_id, isSignedIn])
      
    const handleInsertVolunteer = async () => {
        console.log(userID.id);
        await insertEventVolunteer(userID, event_id);
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
                    if (isVolunteer) {
                      deleteEventVolunteer(event_id);
                      setIsVolunteer(false);
                      setDeleteVolunteersBadge(true);
                      alert("You have cancelled your volunteering.");
                    } else {
                      handleInsertVolunteer();
                      setIsVolunteer(true);
                      setDeleteVolunteersBadge(true);
                      alert("Thank you for volunteering!");
                    }
                  }
                : () => alert("Please Sign In to Volunteer!")
                    }>
              {isVolunteer ? "Cancel" : "Volunteer"}
            </Button>
        </div>
    );
};

export default VolunteerButton;