import { Badge } from "@mui/material";

function LikeBadge({ count }) {
    return (
        <Badge 
            data-testid="like-badge"
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