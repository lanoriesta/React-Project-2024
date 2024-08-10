import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";

const LightDarkTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const hanldeToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);

  return (
    <div className="Parent h-screen text-center m-0 p-4 " data-theme={theme}>
      <div className="container">
        <h1 className="m-0 p-0">LightDarkTheme</h1>
        <button
          onClick={hanldeToggleTheme}
          className="btn-change p-2 px-4 my-3 rounded-lg"
          data-theme={theme}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default LightDarkTheme;
