import React from "react";
import Card from "./Card/Card";

const Projects = ({ title, data }) => {
  return (
    <section id="projects" className="py-6 mb-5">
      <h1 className="text-xl font-bold text-l_primary">{title}</h1>
      <div className="px-4 mt-4 h-fit grid grid-cols-4 gap-4 ">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
              hrefURL={item.hrefURL}
              techStack={item.techStack}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
