// import css
import "./VolunteerButton.css";
// import React dependencies
import React, { useState, useEffect } from 'react';
// import Material UI dependencies
import Button from '@mui/material/Button';
// import SQL queries/functions
import { insertEventVolunteer } from "../../../../Models/queries";
import { getCurrentUserId } from "../../../../Models/client";

// import { Badge } from '@mui/material';

const VolunteerButton = ({ event_id, setUpdateVolunteerBadge }) => {
    // const [clickCount, setClickCount] = useState(0);
   // const [isButtonDisabled, setButtonDisabled] = useState(false);

    // const handleButtonClick = () => {
    //     setClickCount(clickCount + 1);
    //     console.log(clickCount);
    //     // setButtonDisabled(true);
    // };

    const [userID, setUserID] = useState("");

    useEffect(() => {
        async function getUserID() {
          setUserID(await getCurrentUserId());
        }
    
        getUserID();
    }, []);

    return (
        <div>
            <Button 
            id="volunteer-button"
            variant="contained" 
            color="primary" 
            // onClick={handleButtonClick}
            onClick={ async function insertVolunteer() {await insertEventVolunteer(userID.id, event_id); setUpdateVolunteerBadge(true) } }
            // disabled={isButtonDisabled}
            >
                Volunteer
            </Button>
            {/* <p>Number of Volunteers: {clickCount}</p> */}
        </div>
    );
};

export default VolunteerButton;

// Create button that takes in increment by one clicks with maximum of 5 clicks. 
// Button will offer reset option after 5 clicks
// Button will be disabled after 5 clicks

// function VolunteerButton(props) {
//     const { initialCount = 0, maxClicks = 5 } = props;
  
//     const countRef = useRef(initialCount);
//     const handleClick = () => {
//       countRef.current++;
//       setCount(countRef.current);
//     };
  
//     const handleReset = () => {
//       countRef.current = initialCount;
//       setCount(initialCount);
//     };
  
//     const [count, setCount] = useState(initialCount);
//     const tooMany = count >= maxClicks;
  
//     useEffect(() => {
//       countRef.current = count;
//     }, [count]);

//     let resetButton = null;
//     if (tooMany) {
//         resetButton = <Button onClick={handleReset} sx={{ color: 'var(--navyBlue)' }}>Reset</Button>;
//     }
  
//     return (
//       <div>
//       <Badge id="volunteer-button"
//                   badgeContent={count}
//             sx={{
//               "& .MuiBadge-badge": {
//                 backgroundColor: "#2F3E46",
//                 color: "var(--offWhite)",
//               },
//             }}
// >
//         <Button onClick={handleClick} disabled={tooMany} sx={{ color: 'var(--navyBlue)' }}>
//           Volunteer
//         </Button>
//       </Badge>
//       <div>{resetButton}</div>
//       </div>
//     );
//   }
  
//   export default VolunteerButton;  
  
  
  
  
  
  
