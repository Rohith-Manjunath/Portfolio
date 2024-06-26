import React from "react";
import MIS from "../assets/Projects/Horizontal_logo.png";
import ECOM1 from "../assets/Projects/The-Ecommerce-Business-Model-Explained.jpg";
import ECOM2 from "../assets/Projects/ecom.jpg";
import NETFLIX from "../assets/Projects/Netflix.png";
import Movie from "../assets/Projects/Joker.jpg";
import Movie2 from "../assets/Projects/movie-app.jpg";
import MINIPROJECTS from "../assets/Projects/WEB.jpg";
import SPOTIFY from "../assets/Projects/Spotify.jpg";
import ProjectsCard from "./ProjectsCard";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mysore international school",
      img: MIS,
      github: "https://github.com/Rohith-Manjunath/school-web",
      link: "https://www.mysoreinternationalschool.com/",
      description: `Developed a modern, responsive website for Mysore International School using the MERN stack. The site features comprehensive academic information, secure student/parent portals, and an online admission system. It includes an intuitive admin dashboard for content management and real-time updates. This project streamlines school operations while providing an engaging, user-friendly experience for the school community.`,
    },
    {
      id: 2,
      title: "E-Commerce Site",
      img: ECOM2,
      github: "https://github.com/Rohith-Manjunath/Ecommerce",
      link: "https://ecommerce20.netlify.app/",
      description: `Developed a robust MERN stack eCommerce platform, enabling users to explore a diverse product catalog, securely manage their accounts, and complete seamless transactions. Implemented features such as user authentication, a dynamic shopping cart, and an intuitive admin panel. Utilized technologies like React, Redux Toolkit, Node.js, and MongoDB for a responsive and scalable application.`,
    },
    {
      id: 3,
      title: "Spotify Frontend Clone",
      img: SPOTIFY,
      github:
        "https://github.com/Rohith-Manjunath/Mini-projects/tree/master/Spotify%20Clone",
      link: "https://spotify-clone-net.netlify.app/",
      description: `Welcome to the Spotify Clone project! This is a web application built to replicate the user interface and functionalities of the popular music streaming service Spotify. The project is implemented using HTML, CSS, and JavaScript, providing users with an immersive outlook similar to Spotify's website.`,
    },
    {
      id: 6,
      title: "Netflix Clone",
      img: NETFLIX,
      github: "https://github.com/Rohith-Manjunath/Netflix-clone",
      link: "https://dancing-rolypoly-12ab0d.netlify.app/",
      description: `Welcome to the Netflix Clone project! This is a web application built to replicate the user interface and functionalities of the popular streaming service Netflix. The project is implemented using HTML, CSS, and JavaScript, providing users with an immersive outlook similar to Netflix's website.`,
    },
    {
      id: 4,
      title: "Movie Mania",
      img: Movie,
      github: "https://github.com/Rohith-Manjunath/MovieMania",
      link: "https://moviemania27.netlify.app/",
      description: `Welcome to Your Movie/Series Information App, a full-stack Next.js application that allows users to search and view information about movies and TV series. This project is integrated with the TMDB (The Movie Database) API to fetch comprehensive data about various titles. The app also features a sleek light and dark mode for enhanced user experience.`,
    },
    {
      id: 5,
      title: "Movie Buzz",
      img: Movie2,
      github: "https://github.com/Rohith-Manjunath/React-Movie-App",
      link: "https://movie-app-rohith.netlify.app/",
      description: `
A responsive and user-friendly movie app built with React, utilizing The Movie Database (TMDb) API to fetch and display movie information. Search for your favorite movies, explore details, and enjoy a seamless movie browsing experience.`,
    },
    {
      id: 7,
      title: "E-Commerce 1.0 (First MERN App)",
      img: ECOM1,
      github: "https://github.com/Rohith-Manjunath/MERN-e-commerce-website",
      link: "https://e-commerce-rohith.netlify.app/",
      description: `Welcome to our E-Commerce website built using the MERN stack! This is a full-stack web application that allows users to browse, search products online. The website provides an intuitive and user-friendly interface for customers to explore a wide range of products.`,
    },
    {
      id: 8,
      title: "Web Dev Mini Projects",
      img: MINIPROJECTS,
      github: "https://github.com/Rohith-Manjunath/Mini-projects2",
      github2: "https://github.com/Rohith-Manjunath/Mini-projects",
      description: `A collection of mini projects showcasing various web development skills.`,
    },
  ];

  return (
    <motion.div
      id="projects"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center font-bold text-4xl lg:text-5xl mb-16"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My{" "}
          <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Projects
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectsCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
