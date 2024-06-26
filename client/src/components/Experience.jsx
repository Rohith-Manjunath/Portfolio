import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      company: "Transfi",
      title: "Full Stack Developer Intern",
      date: "Feb 2024 - Apr 2024",
      description: `Developed and optimized user interfaces using React.js and UI libraries, ensuring responsive design and
seamless API integrations.
Engineered high-performance CRUD backend APIs using Node.js and Express.js, integrated MongoDB,
which enhanced data retrieval efficiency.
Enhanced the admin dashboard for improved user experience and data handling, collaborating with
cross-functional teams to deliver high-quality solutions.`,
      icon: FaCode,
      color: "bg-green-500",
    },
    {
      company: "Q-Spiders",
      title: "Java Developer Intern",
      date: "Dec 2022 - Feb 2023",
      description:
        "Acquired expertise in Java and Object-Oriented Programming (OOP) principles through training. Developed SGPA and CGPA calculator for VTU students, implementing Java and OOP principles.",

      icon: FaBriefcase,
      color: "bg-yellow-500",
    },
  ];

  return (
    <motion.div
      id="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Professional{" "}
          <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Experience
          </span>
        </motion.h2>
        <motion.h3
          className="text-2xl md:text-3xl font-semibold text-center mb-16 text-purple-400"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          My Path in the Tech World
        </motion.h3>

        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-400"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-16 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
            >
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                }`}
              >
                <motion.div
                  className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 ${exp.color} rounded-full flex items-center justify-center mr-4`}
                      >
                        <exp.icon className="text-2xl text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-purple-400">
                        {exp.company}
                      </h3>
                    </div>
                    <h4 className="text-lg md:text-xl font-medium text-gray-300 mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-4">{exp.date}</p>
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </div>
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
