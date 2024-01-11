import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Theme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="h-10 w-full border-[1px] flex place-items-center justify-center">
      <button
        className="text-l_textColor dark:text-d_textColor"
        onClick={themeHandler}
      >
        {theme === "light" ? <FiMoon size={25} /> : <FiSun size={25} />}
      </button>
    </div>
  );
};

export default Theme;
