import React from "react";
import { MdDownload } from "react-icons/md";

const Hero = () => {
  const resumeURL =
    "https://drive.google.com/file/d/1-uDMYHCAR5LxpnDzAmyi1-7vfByeQ-b6/view?usp=sharing";
  return (
    <div className="overflow-y-auto w-full h-40 bg-hero-cover bg-no-repeat bg-cover bg-center rounded-lg">
      <div className="flex w-full text-d_textColor h-full justify-around place-items-center bg-blur backdrop-filter backdrop-blur">
        <img
          className="w-28 h-28 rounded-full stroke-4"
          src={"../image/avatar.png"}
          alt="Abhinav"
        />
        <div className="text-d_textColor flex flex-col">
          <h1 className="uppercase font-bold text-3xl">Abhinav Maurya</h1>
          <span className="uppercase font-normal flex justify-center text-sm tracking-widest">
            Full Stack Developer [MERN]
          </span>
        </div>
        <a
          className="flex place-items-center gap-4 px-8 rounded py-2 font-semibold transition-transform duration-300 hover:-translate-y-2 p-1 text-l_textColor dark:text-d_textColor bg-l_secondary dark:bg-d_secondary"
          href={resumeURL}
          target="_blank"
          rel="noreferrer"
        >
          Resume <MdDownload size={20} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
