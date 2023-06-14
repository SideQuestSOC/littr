// import css
import './Navbar.css';
// import react dependencies
import { useState } from 'react';
import { Link } from "react-router-dom";
// import MaterialUI dependencies
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { MenuItem, Button, Menu, InputBase, Typography, IconButton, Toolbar, Box, AppBar } from "@mui/material";

// Initialise MUI search component
const Search = styled("div")(({ theme }) => ({}));

// Initialise MUI search input component
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    [theme.breakpoints.up("xs")]: {
      width: "17ch",
      "&:focus": {
        width: "17ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <Box id="navbar-outer-container" >
      <AppBar id="navbar-header-container" position="static">
        <Toolbar>

          {/* SEARCH */}
          <Search id="navbar-search-container">
            <IconButton 
              id="search-icon"
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleSearchClick}>
                <SearchIcon />
            </IconButton>
            {isSearchOpen && (
              <StyledInputBase
                id="search-input"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}/>
            )}
          </Search>
          
          {/* LOGO/TITLE */}
          <Typography id="navbar-title"
            variant="h5"
            noWrap
            component="div">
              <Link to="/">LITTR</Link>
          </Typography>

          {/* BURGER MENU */}
          <IconButton 
            id="burger-icon"
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}>
              <MenuIcon />
          </IconButton>

          {/* DROPDOWN MENU */}
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            paperprops={{
              elevation: 1,
            }}>
            {/* DROPDOWN MENU */}
            {/* TODO: Change the Content here based on whether user is logged in or not */}
            <MenuItem id="dropdown-menu" onClick={handleClose}>
              <Link to="/src/pages/createpostform">Create a Post</Link>
              <Button variant="contained">
                FIX THIS BUTTON
              </Button>
            </MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
