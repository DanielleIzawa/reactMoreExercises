import React, { useState, useContext, createContext, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }: Props) {
  const [darkTheme, setDarkTheme] = useState();

  function toggleTheme(value: boolean) {
    setDarkTheme((prevDarkTheme) => console.log(prevDarkTheme));
    return !value;
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
