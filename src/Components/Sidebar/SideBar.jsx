import React from "react";
import Menu from "./Menu";
import Theme from "./Theme";

const Sidebar = () => {
  return (
    <aside className="flex relative flex-col h-screen w-full">
      <Theme />
      <Menu />
    </aside>
  );
};

export default Sidebar;
