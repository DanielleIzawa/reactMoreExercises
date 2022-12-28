import React, { useContext } from "react";
import { DarkModeContext } from "./Contexts/DarkModeContext";
import off from "./img/lightswitch-off.png";
import on from "./img/lightswitch-on.png";
import img from "./App.css";

export default function Lightswitch() {
  const { darkMode, toggleDarkMode } = useContext<any>(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <div className="Lightswitch">
      {darkMode ? (
        <img
          src={off}
          alt="Lightswitch off"
          onClick={handleClick}
          style={{ width: "50px" }}
        />
      ) : (
        <img
          src={on}
          alt="Lightswitch on"
          onClick={handleClick}
          style={{ width: "50px" }}
        />
      )}
    </div>
  );
}
