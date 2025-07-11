// Theme utilities for managing dark/light mode

// Theme constants
export const THEME_STORAGE_KEY = 'saas-theme-preference';
export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

// Get the user's theme preference from localStorage or system preference
export const getInitialTheme = () => {
  // Check if theme is stored in localStorage
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme) {
    return storedTheme;
  }
  
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return DARK_THEME;
  }
  
  // Default to light theme
  return LIGHT_THEME;
};

// Save theme preference to localStorage
export const saveThemePreference = (theme) => {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

// Apply theme to document
export const applyTheme = (theme) => {
  const root = document.documentElement;
  
  if (theme === DARK_THEME) {
    root.classList.add('dark-mode');
    root.classList.remove('light-mode');
  } else {
    root.classList.add('light-mode');
    root.classList.remove('dark-mode');
  }
};

// Toggle between light and dark themes
export const toggleTheme = (currentTheme) => {
  const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
  saveThemePreference(newTheme);
  applyTheme(newTheme);
  return newTheme;
};