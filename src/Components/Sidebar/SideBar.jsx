import React from "react";
import Menu from "./Menu";
import Theme from "./Theme";

const Sidebar = () => {
  return (
    <aside className="border-[1px] flex flex-col">
      <Theme />
      <Menu />
    </aside>
  );
};

export default Sidebar;
