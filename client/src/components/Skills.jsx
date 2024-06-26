import React from "react";
import HTML from "../assets/html5-logo-31813.png";
import TAILWIND from "../assets/icons8-tailwind-css-480.png";
import JS from "../assets/javascript-39417.png";
import REACT from "../assets/1174949_js_react js_logo_react_react native_icon.png";
import TS from "../assets/typescript.svg";
import NEXTJS from "../assets/NEXTT.svg";
import SkillCard from "./SkillCard";
import CSS from "../assets/pngwing.com.png";
import REDUX from "../assets/redux.svg";
import NODE from "../assets/node-js-seeklogo.svg";
import EXPRESS from "../assets/pngwing.com (1).png";
import MONGODB from "../assets/pngwing.com (2).png";
import MONGOOSE from "../assets/mongoose.png";
import JAVA from "../assets/Java.png";
import C from "../assets/icons8-c-programming-480.png";
import MUI from "../assets/pngwing.com (3).png";
import POSTMAN from "../assets/pngwing.com (4).png";
import FIREBASE from "../assets/pngwing.com (5).png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
    },
    {
      id: 3,
      src: JS,
      title: "JAVASCRIPT",
    },
    {
      id: 5,
      src: TS,
      title: "TYPESCRIPT",
    },
    {
      id: 4,
      src: REACT,
      title: "REACT JS",
    },
    {
      id: 6,
      src: NEXTJS,
      title: "NEXT JS",
    },
    {
      id: 7,
      src: TAILWIND,
      title: "TAILWIND CSS",
    },
    {
      id: 15,
      src: MUI,
      title: "MATERIAL UI",
    },
    {
      id: 8,
      src: REDUX,
      title: "REDUX TOOLKIT",
    },
    {
      id: 9,
      src: NODE,
      title: "NODE JS",
    },
    {
      id: 10,
      src: EXPRESS,
      title: "EXPRESS JS",
    },
    {
      id: 11,
      src: MONGODB,
      title: "MONGODB",
    },
    {
      id: 17,
      src: FIREBASE,
      title: "FIREBASE",
    },
    {
      id: 12,
      src: MONGOOSE,
      title: "MONGOOSE",
    },
    {
      id: 16,
      src: POSTMAN,
      title: "POSTMAN",
    },
    {
      id: 13,
      src: JAVA,
      title: "JAVA",
    },
    {
      id: 14,
      src: C,
      title: "C PROGRAMMING",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-center text-4xl md:text-5xl font-semibold">
        My <span className="text-secondary">Skills</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center my-20">
        {skills.map((skill) => (
          <SkillCard key={skill.id} img={skill.src} title={skill.title} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
