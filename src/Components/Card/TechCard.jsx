import React from "react";
import cn from "classnames";

const TechCard = ({ title, tech }) => {
  return (
    <div className="rounded-md text-d_primary dark:text-l_primary bg-l_secondary dark:bg-d_secondary">
      <h1 className="font-bold text-center tracking-wider py-4 opacity-80">
        {title}
      </h1>
      <div className="flex flex-wrap gap-2 p-2 place-items-center justify-center">
        {tech.map((item, i) => {
          return (
            <div
              key={i}
              className={cn(
                "rounded-md  text-xs bg-slate-100 dark:bg-slate-950 p-2",
                item === "Tailwind" && "border border-blue-500/60",
                item === "Javascript" && "border border-yellow-500/60",
                item === "React Js" && "border border-blue-500/60",
                item === "Node Js" && "border border-green-500/60",
                item === "Express Js" && "border border-gray-500/60",
                item === "MongoDB" && "border border-emerald-500/60",
                item === "Postman" && "border border-red-500/60",
                item === "Auth0" && "border border-red-500/60",
                item === "Java" && "border border-blue-500/60",
                item === "GitHub" && "border border-blue-500/60",
                item === "SASS" && "border border-blue-500/60"
              )}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechCard;
