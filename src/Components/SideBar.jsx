import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex flex-col h-screen w-full ">
      <div className="text-white h-12 flex gap-2 p-5 pl-10">
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </div>
      <div className="m-2 p-8 bg-slate-800 scroll-auto h-full">
        <div className="flex border-[1px] flex-col p-8 gap-5">
          <a href="/">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </div>
        <div>
          <a
            href="https://github.com/abhinav2-3"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhinav28/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://leetcode.com/abhinav2-3/"
            target="_blank"
            rel="noreferrer"
          >
            Leetcode
          </a>
          <a
            href="https://instagram.com/cse.verse/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
