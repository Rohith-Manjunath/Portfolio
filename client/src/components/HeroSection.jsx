import React from "react";
import Image from "../assets/my-image_upscaled.jpg";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import PDF from "../assets/ROHITH_MANJUNATH _RESUME.pdf";

const HeroSection = () => {
  return (
    <div className="px-6 md:px-16 w-full sm:mt-0 min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="flex flex-col gap-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-2xl md:text-3xl font-semibold text-gray-300">
            Hello, It's me
          </span>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
            Rohith Manjunath
          </h1>
          <p className="text-2xl md:text-3xl font-semibold">
            And I'm a{" "}
            <ReactTyped
              strings={[
                "Frontend Developer.",
                "Backend Developer.",
                "Full Stack Developer.",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              className="text-secondary"
            />
          </p>
          <p className="text-gray-300 leading-relaxed max-w-xl">
            Passionate Full Stack Web Developer with a creative mindset and a
            knack for crafting seamless user experiences. Proficient in
            front-end and back-end technologies, I transform innovative ideas
            into functional, elegant, and responsive web solutions.
          </p>
          <div className="flex gap-4 mt-4">
            <motion.a
              href={PDF}
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#about"
              className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More About Me
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Image}
            className="w-full max-w-[400px] rounded-full border-4 border-purple-600 shadow-xl"
            loading="lazy"
            alt="Rohith Manjunath"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
