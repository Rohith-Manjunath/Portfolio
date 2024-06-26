import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/ContactMe";

const Home = () => {
  return (
    <div>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
