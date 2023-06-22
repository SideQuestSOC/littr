import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Footer.css";

const Footer = () => {
    return (
            <footer className="footer">
              <a href="https://www.facebook.com/"target= "_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon className="icon" /></a>
              <a href="https://www.linkedin.com/"target= "_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon className="icon" /></a>
              <a href="https://github.com/"target= "_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon className="icon" /></a>
            </footer> 
           );
};

export default Footer;
