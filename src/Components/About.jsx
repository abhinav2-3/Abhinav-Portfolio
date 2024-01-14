import React from "react";
import { FaUser } from "react-icons/fa6";
import video from "./utils/video.mp4";

const About = () => {
  return (
    <div id="about" className="my-4 h-full grid place-items-center relative">
      <video
        src={video}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute aspect-video inset-0 -z-0"
      ></video>
      <div className="z-10 p-16 px-8 bg-white/30">
        <h1 className="text-3xl font-black tracking-widest underline-offset-8 text-l_textColor  underline text-center uppercase">
          About Me
        </h1>
        <div className="flex mt-8 gap-8 p-4 flex-col md:flex-row place-items-center justify-around">
          <img
            className="w-56 h-56 rounded-full shadow-lg shadow-slate-900 transition-all duration-300 hover:-translate-y-8"
            src="/image/avatar.png"
            alt="Profile"
          />

          <div className="lg:w-2/4 flex flex-col gap-4 text-l_textColor ">
            <h1 className="text-3xl font-extrabold ">
              Hii, I'M Abhinav Maurya
            </h1>

            <span className="text-md tracking-widest text-l_textColor font-bold">
              MERN Stack Developer
            </span>

            <div className="text-sm tracking-wider text-ellipsis text-wrap">
              I'm a BCA(II) Student at AIMT, Lucknow. <br /> Frontend skills
              like <b>HTML, CSS, Javascript, and React Js.</b>
              <br />
              Backend technologies such as{" "}
              <b>Exprss.js, Node.js and MongoDB .</b> <br />{" "}
              <hr className="w-auto my-2" />
            </div>

            <span className="text-md font-semibold">
              Let's start a conversation! Reach out to discuss your project or
              product, and let's make it happen together 🎉
            </span>

            <a
              href="mailto:abhinavmaurya476@gmail.com"
              className="transform transition-transform py-2 px-4 w-40 rounded gap-2 place-items-center font-bold duration-300 hover:-translate-y-1 flex bg-d_primary dark:bg-l_primary text-d_textColor dark:text-l_textColor hover:bg-d_secondary hover:dark:bg-l_secondary"
            >
              Contact Me <FaUser size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
