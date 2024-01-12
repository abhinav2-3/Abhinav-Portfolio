import React from "react";
import { techStack } from "./utils/data";
import TechCard from "./Card/TechCard";

const TechStacks = () => {
  const data = techStack;
  const { skills } = data;
  console.log(skills);
  return (
    <div className="border-[1px] h-96 py-8">
      <h1 className="text-d_primary dark:text-l_primary text-xl font-bold">
        What I Know
      </h1>
      <div className="border-[1px] h-80 grid gap-6 grid-cols-5 p-8">
        <TechCard
          title={"Frontend"}
          tech={["HTML5", "CSS", "SASS", "Tailwind", "Javascript", "React Js"]}
        />
        <TechCard title={"Backend"} tech={["Node Js", "Express Js", "Auth0"]} />
        <TechCard title={"Database"} tech={["MongoDB"]} />
        <TechCard title={"Tools"} tech={["GitHub", "Postman"]} />
        <TechCard title={"Language"} tech={["Java"]} />
      </div>
    </div>
  );
};

export default TechStacks;
