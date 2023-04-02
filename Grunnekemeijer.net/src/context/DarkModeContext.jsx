import React, { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "false";
    document.body.classList.toggle("dark", isDarkMode);
    return isDarkMode;
  });

  DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired 
  }
  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true" || storedDarkMode === "false") {
      const isDarkMode = storedDarkMode === "true";
      setDarkMode(isDarkMode);
      document.body.classList.toggle("dark", isDarkMode);
    } else {
      const isDarkMode = true;
      setDarkMode(isDarkMode);
      localStorage.setItem("darkMode", isDarkMode);
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, handleToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

