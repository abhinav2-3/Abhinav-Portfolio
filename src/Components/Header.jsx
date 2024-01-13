import React from "react";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  return (
    <nav
      style={{ width: "-webkit-fill-available" }}
      className="fixed flex z-50 place-items-center justify-between p-4 px-8 shadow-lg rounded bg-l_primary dark:bg-d_primary shadow-l_secondary/50 dark:shadow-d_secondary/50"
    >
      <div className="text-l_textColor dark:text-d_textColor text-sm font-bold">
        PORTFOLIO | ABHINAV
      </div>
      <a
        href="mailto:abhinavmaurya476@gmail.com"
        className="transform transition-transform py-2 px-4 rounded gap-2 place-items-center font-bold duration-300 hover:-translate-y-1 flex bg-d_primary dark:bg-l_primary text-d_textColor dark:text-l_textColor hover:bg-d_secondary hover:dark:bg-l_secondary"
      >
        Contact Me <FaUser size={18} />
      </a>
    </nav>
  );
};

export default Header;
