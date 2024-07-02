import React from "react";
import Image from "../assets/my-image_upscaled.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src={Image}
            className="w-full max-w-[380px] rounded-full border-4 border-purple-600 shadow-lg shadow-purple-400"
            loading="lazy"
            alt="Profile"
          />
        </motion.div>
        <motion.div
          className="space-y-6 text-white"
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold ">
            About{" "}
            <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Me
            </span>
          </h2>
          <h4 className="capitalize font-semibold text-2xl text-gray-300">
            Full Stack Web Developer
          </h4>
          <p className="text-gray-300 leading-relaxed">
            I am an enthusiastic Full Stack Web Developer known for my creative
            approach and dedication to crafting seamless user experiences.
            Proficient in both front-end and back-end technologies, I possess
            the skillset to transform innovative concepts into functional,
            elegant, and responsive web solutions.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My passion for innovation drives me to convert abstract ideas into
            tangible digital realities. My portfolio showcases a diverse array
            of projects that exemplify my commitment to developing web
            applications that resonate with users while aligning with business
            objectives.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
