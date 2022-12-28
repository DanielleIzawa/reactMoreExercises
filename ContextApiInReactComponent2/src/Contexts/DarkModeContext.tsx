import React, { createContext, ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
}

export const DarkModeContext = createContext<string[]>([]);

function DarkModeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
}

export default DarkModeProvider;
