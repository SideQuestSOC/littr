
import { Badge } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';

function LikeBadge({ count }) {
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
        </Badge>
    )
}

export default LikeBadge;