import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleOpenMenu = () => {
    setShow(true);
  };
  const handleCloseMenu = () => {
    setShow(false);
  };

  return (
    <>
      <div className="p-8 flex items-center justify-between gap-6 w-full px-20 font-semibold fixed top-0 left-0 right-0 bg-primary">
        {!show && (
          <RxHamburgerMenu
            onClick={handleOpenMenu}
            className="text-3xl block md:hidden hover:cursor-pointer hover:scale-110 active:scale-90 transition-all duration-300"
          />
        )}

        <div>
          <a className="text-2xl ">Portfolio</a>
        </div>

        <div className="hidden md:flex items-center justify-center gap-16">
          <a className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-secondary after:rounded-lg after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-secondary">
            Home
          </a>
          <a
            href={"#about"}
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-secondary after:rounded-lg after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-secondary"
          >
            About
          </a>
          <a
            href="#skills"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-secondary after:rounded-lg after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-secondary"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-secondary after:rounded-lg after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-secondary"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-secondary after:rounded-lg after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-secondary"
          >
            Contact
          </a>
        </div>
      </div>

      <div
        className={`fixed top-0 bg-primary left-0 w-full h-full flex md:hidden items-center justify-center gap-16 flex-col transition-transform duration-300 ${
          !show ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <RiCloseLargeFill
          onClick={handleCloseMenu}
          className="text-2xl block md:hidden hover:cursor-pointer hover:scale-110 active:scale-90 transition-all duration-300 absolute top-8 right-4"
        />

        <a
          onClick={handleCloseMenu}
          href="/"
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-secondary after:rounded-lg after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-secondary"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={handleCloseMenu}
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-secondary after:rounded-lg after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-secondary"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={handleCloseMenu}
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-secondary after:rounded-lg after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-secondary"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={handleCloseMenu}
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-secondary after:rounded-lg after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-secondary"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={handleCloseMenu}
          className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-secondary after:rounded-lg after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-secondary"
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
