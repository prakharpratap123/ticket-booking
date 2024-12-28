import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

// Define the shape of your context state
const ThemeContext = createContext();

// Define your ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Define PropTypes for the ThemeProvider component
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is required and should be a valid React node
};

// Custom hook for using theme context
const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useThemeContext };
