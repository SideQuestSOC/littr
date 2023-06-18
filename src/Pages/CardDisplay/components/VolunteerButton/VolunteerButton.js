import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import "./VolunteerButton.css";
import { Badge } from '@mui/material';

// Make MUI button for users to be be able to volunteer
// I will need to export the button for use in other components
// The button should be set to zero and increment by one for every button press
// Button should be limited to one click per user
    
// const VolunteerButton = () => {
//     const [clickCount, setClickCount] = useState(0);
//     const [isButtonDisabled, setButtonDisabled] = useState(false);

//     const handleButtonClick = () => {
//         setClickCount(clickCount + 1);
//         console.log(clickCount);
//         // setButtonDisabled(true);
//     };

//     return (
//         <div>
//             <Button 
//             id="volunteer-button"
//             variant="contained" 
//             color="primary" onClick={handleButtonClick} disabled={isButtonDisabled}>
//                 Volunteer
//             </Button>
//             {/* <p>Number of Volunteers: {clickCount}</p> */}
//         </div>
//     );
// };

// export default VolunteerButton;

// Create button that takes in increment by one clicks with maximum of 5 clicks. 
// Button will offer reset option after 5 clicks
// Button will be disabled after 5 clicks

function VolunteerButton(props) {
    const { initialCount = 0, maxClicks = 5 } = props;
  
    const countRef = useRef(initialCount);
    const handleClick = () => {
      countRef.current++;
      setCount(countRef.current);
    };
  
    const handleReset = () => {
      countRef.current = initialCount;
      setCount(initialCount);
    };
  
    const [count, setCount] = useState(initialCount);
    const tooMany = count >= maxClicks;
  
    useEffect(() => {
      countRef.current = count;
    }, [count]);

    let resetButton = null;
    if (tooMany) {
        resetButton = <Button onClick={handleReset} sx={{ color: 'var(--navyBlue)' }}>Reset</Button>;
    }
  
    return (
      <div>
      <Badge id="volunteer-button"
                  badgeContent={count}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#2F3E46",
                color: "var(--offWhite)",
              },
            }}
>
        <Button onClick={handleClick} disabled={tooMany} sx={{ color: 'var(--navyBlue)' }}>
          Volunteer
        </Button>
      </Badge>
      <div>{resetButton}</div>
      </div>
    );
  }
  
  export default VolunteerButton;  
  
  
  
  
  
  
