import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css";

const Footer = () => {
    return (
            <footer className="footer">
              <a href="https://www.facebook.com/"target= "_blank" rel="noopener noreferrer"><FacebookIcon className="icon" /></a>
              <a href="https://www.linkedin.com/"target= "_blank" rel="noopener noreferrer"><LinkedInIcon className="icon" /></a>
            </footer> 
           );
};

export default Footer;
