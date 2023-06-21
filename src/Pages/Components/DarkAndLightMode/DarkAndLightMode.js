import React, { useState, useEffect } from "react";
import "./DarkAndLightMode.css";

const DarkLightMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <button className="switch-button" onClick={handleToggleMode}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default DarkLightMode;
