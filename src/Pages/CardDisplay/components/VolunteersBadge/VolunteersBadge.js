// import Material UI dependencies
import { Badge } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';

function VolunteersBadge({ count }) {
    return (
        <Badge 
            badgeContent={count} 
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            sx={{
            "& .MuiBadge-badge": {
            backgroundColor: "#6AAF88",
            color: "black",
            width: "26px",
            }}}>
            <GroupsIcon />
        </Badge>
    )
}

export default VolunteersBadge;