import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMenu = () => setShow(true);
  const handleCloseMenu = () => setShow(false);

  const NavLink = ({ href, children }) => (
    <motion.a
      href={href}
      className="relative text-lg hover:text-purple-500 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCloseMenu}
    >
      {children}
      <motion.span
        className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-600"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );

  return (
    <>
      <motion.nav
        className={`bg-gradient-to-r from-gray-900 to-gray-800 fixed top-0 left-0 right-0 z-50 p-6 md:px-16 flex items-center justify-between ${
          scrolled ? "bg-primary shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a
          href="/"
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.a>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <motion.button
          className="md:hidden text-3xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleOpenMenu}
        >
          <RxHamburgerMenu />
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-r from-gray-900 to-gray-800 z-50 flex flex-col items-center justify-center space-y-8"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <motion.button
              className="absolute top-6 right-6 text-3xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCloseMenu}
            >
              <RiCloseLargeFill />
            </motion.button>
            <NavLink href="/">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
