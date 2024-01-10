import React from "react";
import Sidebar from "./Sidebar/SideBar";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";

const Screen = () => {
  return (
    <section className="flex w-full h-screen bg-cover bg-fixed bg-no-repeat bg-center bg-l_primary dark:bg-d_primary">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <main className="w-4/5">
        <Header />
        <div className="relative top-20">
          <Hero />
          <Projects />
        </div>
      </main>
    </section>
  );
};

export default Screen;
