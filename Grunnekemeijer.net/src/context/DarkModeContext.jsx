import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

   useEffect(() => {
     const isDarkMode = localStorage.getItem("darkMode") === "false";
     setDarkMode(isDarkMode);
     document.body.classList.toggle("dark", isDarkMode);
   }, []);

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
       document.body.classList.add("dark");
     }
   }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, handleToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};