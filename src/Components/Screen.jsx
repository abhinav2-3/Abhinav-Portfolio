import React from "react";
import Sidebar from "./Sidebar/SideBar";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Screen = () => {
  return (
    <section className="flex w-screen">
      <div className="fixed h-screen fixed border-[1px] sm:w-[300px] z-30">
        <Sidebar />
      </div>
      <main className="flex-1 pl-0 lg:pl-[300px]">
        <Header />
        <div className="relative w-full top-20">
          <Hero />
          <Projects />
          <Skills />
        </div>
      </main>
    </section>
  );
};

export default Screen;
