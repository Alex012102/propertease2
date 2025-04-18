import React from "react";

const bgMap = {
  subtle: "bg-brand-subtle",
  "subtle-shade": "bg-brand-subtle-shade",
  "subtle-tint": "bg-brand-subtle-tint",
};

const Card = ({ title, color, style, children }) => {
  const backgroundClass = bgMap[color] ?? "bg-brand-gray-shade";

  return (
    <div
      className={`flex flex-col items-center ${backgroundClass} p-2 rounded-2xl w-full h-full ${style}`}
    >
      <h5 className="card-title">{title}</h5>
      {children}
    </div>
  );
};

export default Card;
