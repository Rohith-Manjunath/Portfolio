import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectsCard = ({ project }) => {
  return (
    <motion.div
      className="hover:cursor-pointer relative overflow-hidden rounded-lg shadow-lg group h-[530px] lg:h-[450px] border-2 border-purple-500 hover:border-purple-300 transition-colors duration-300"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-6 text-white"
          initial={{ y: 0, opacity: 1 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-2xl font-bold mb-2 text-white">
            {project.title}
          </h4>
          <p className="text-white mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex space-x-4">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt size={24} />
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={24} />
              </motion.a>
            )}
            {project.github2 && (
              <motion.a
                href={project.github2}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={24} />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
