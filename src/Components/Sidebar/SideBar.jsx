import React from "react";
import Menu from "./Menu";
import Theme from "./Theme";

const Sidebar = () => {
  return (
    <aside className="flex flex-col">
      <Theme />
      <Menu />
    </aside>
  );
};

export default Sidebar;
