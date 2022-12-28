import React, { useContext } from "react";
import Content from "../Content";
import { DarkModeContext } from "../Contexts/DarkModeContext";
import Lightswitch from "../Lightswitch";

export default function Container() {
  const { darkMode } = useContext<any>(DarkModeContext);
  return (
    <div
      className={
        darkMode ? `Container Container-dark` : `Container Container-light`
      }
    >
      <Content />
      <Lightswitch />
    </div>
  );
}
