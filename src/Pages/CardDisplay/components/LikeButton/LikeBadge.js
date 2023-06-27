import { Badge } from "@mui/material";

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
            backgroundColor: "#D9D9D9",
            color: "black",
            // width: "26px",
            }}}>
        </Badge>
    )
}

export default LikeBadge;