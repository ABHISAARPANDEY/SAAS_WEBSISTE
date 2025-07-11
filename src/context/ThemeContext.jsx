import React, { createContext, useState, useEffect, useContext } from 'react';
import { getInitialTheme, saveThemePreference, applyTheme, toggleTheme, DARK_THEME, LIGHT_THEME } from '../utils/themeUtils';

// Create context
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LIGHT_THEME); // Default to light theme initially
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setIsThemeLoaded(true);
  }, []);

  // Handle theme toggle
  const handleToggleTheme = () => {
    const newTheme = toggleTheme(theme);
    setTheme(newTheme);
  };

  // Context value
  const value = {
    theme,
    isThemeLoaded,
    isDarkMode: theme === DARK_THEME,
    toggleTheme: handleToggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};