import React from "react";

const Card = ({ title, hrefURL, imgSrc, techStack }) => {
  return (
    <a
      href={hrefURL || "/"}
      target="_blank"
      className="h-auto rounded-lg transition-transform duration-300 hover:-translate-y-2 bg-d_secondary dark:bg-l_secondary text-d_textColor dark:text-l_textColor"
      rel="noreferrer"
    >
      <div className="flex flex-col overflow-hidden gap-2 overflow-ellipsis">
        <img
          width={700}
          height={700}
          className="object-cover rounded-t-lg aspect-video"
          src={imgSrc}
          alt={title}
        />
        <div className="flex flex-col px-4 py-2 h-24">
          <figcaption className="font-bold text-xl">{title}</figcaption>
          <p className="text-sm">{techStack}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
