import React, { createContext, useContext } from "react";
import { useTheme } from "../hooks";

const initialState = {
  theme: "dark",
  toggleTheme: () => {},
};

export const ThemeContext = createContext(initialState);

export const ThemeStateProvider = ({ children }) => {
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
