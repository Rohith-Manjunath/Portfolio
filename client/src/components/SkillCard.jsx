import React from "react";

const SkillCard = ({ img, title }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 text-center transition-all duration-300 hover:scale-110 hover:cursor-pointer">
      <img src={img} alt="Skill Icon" className="w-24 h-24 object-contain" />
      <span className="font-semibold">{title}</span>
    </div>
  );
};

export default SkillCard;
