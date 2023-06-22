// import css
import './Navbar.css';
// import react dependencies
import { useState } from 'react';
import { Link } from "react-router-dom";
// import Supabase functions
import { signOut } from '../../../Models/client';
// import MaterialUI dependencies
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { MenuItem, Button, Menu, InputBase, Typography, IconButton, Toolbar, Box, AppBar, Avatar } from "@mui/material";

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

export default function SearchAppBar({ isSignedIn, setIsSignedIn, setFilter, filter }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSearchOpen, setSearchOpen] = useState(false);

  // Vary components displayed in dropdown menu depending on whether user is signed in using css
  let idSignedinVariable;
  let idSignedoutVariable;
  if(isSignedIn === true) {
    idSignedinVariable = "dropdown-menu-signedin";
    idSignedoutVariable = "dropdown-menu-signedin-toggle"
  }
  else {
    idSignedinVariable = "dropdown-menu-signedin-toggle";
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (event) => { 
    setFilter(event.target.value);
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
                onChange={handleSearchChange}
                id="search-input"
                placeholder="Search by location…"
                value={filter}
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
            <MenuItem onClick={handleClose}>
              <div id={idSignedinVariable}>
                {/* <Link id="dropdown-user-settings-link" to="">User Settings</Link>
                <Avatar id="dropdown-menu-avatar">??</Avatar> */}
                <Link id="dropdown-createapost-link" to="/src/pages/createpostform">Create a Post</Link>
                {/* <Link id="dropdown-createagroup-link" to="">Create a Group</Link> */}
                <Button id="dropdown-menu-signout-button" variant="contained" onClick={() => { signOut(); setIsSignedIn(false); }}>
                  Sign Out
                </Button>
              </div>
              <div id={idSignedoutVariable}>
                <Button variant="contained" id="dropdown-menu-susi-button">
                  <Link to="/src/pages/signsignup">
                    Sign Up / Sign In
                  </Link>
                </Button>
              </div>   
            </MenuItem>
          </Menu>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
