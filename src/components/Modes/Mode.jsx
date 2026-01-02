import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Mode.css";

function Mode() {
  const [mode, setMode] = useState("dark-mode");

  const toggle = () => {
    setMode(mode === "dark-mode" ? "light-mode" : "dark-mode");
  };

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) root.className = mode;
  }, [mode]);

  return (
    <button className="mode-toggle" onClick={toggle}>
      {mode === "dark-mode" ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default Mode;