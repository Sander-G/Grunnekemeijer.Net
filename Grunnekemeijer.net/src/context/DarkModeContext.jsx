import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

   useEffect(() => {
     document.body.classList.add("dark");
     return () => {
       document.body.classList.remove("dark");
     };
   }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, handleToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};