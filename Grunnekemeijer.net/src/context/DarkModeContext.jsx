import React, { createContext, useContext, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, handleToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return {
      darkMode,
      toggleDarkMode,
    };
 
};