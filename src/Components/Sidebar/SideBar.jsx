import React from "react";
import Menu from "./Menu";
import Theme from "./Theme";

const Sidebar = () => {
  return (
    <aside className="toggle flex flex-col w-full">
      <Theme />
      <Menu />
    </aside>
  );
};

export default Sidebar;
