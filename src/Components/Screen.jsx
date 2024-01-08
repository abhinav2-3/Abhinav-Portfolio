import React from "react";
import Sidebar from "./SideBar";

const Screen = () => {
  return (
    <section className="flex w-screen h-screen bg-cover bg-fixed bg-no-repeat bg-center bg-[url('/src/Assets/bg-image.jpg')]">
      <div className="w-1/5 ">
        <Sidebar />
      </div>
      <main className="w-4/5">Main Screen</main>
    </section>
  );
};

export default Screen;
