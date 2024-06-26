import Image from "../assets/my-image_upscaled.jpg";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <div className="px-10 md:px-16 w-full mt-28 lg:mt-20 lg:h-[100vh]  grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex items-start justify-center flex-col gap-4">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Hello, It's me
        </span>
        <h2 className="capitalize text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold">
          Rohith Manjunath
        </h2>
        <p className="font-semibold text-xl sm:text-2xl md:text-3xl">
          And I'm a{" "}
          <ReactTyped
            style={{
              width: "100%",
            }}
            strings={[
              "Frontend Developer.",
              "Backend Developer.",
              "Full Stack developer.",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          >
            <input
              type="text"
              className="bg-transparent outline-none border-none text-secondary"
            />
          </ReactTyped>
        </p>
        <p className="leading-[22px] text-[16px]">
          Passionate Full Stack Web Developer with a creative mindset and a
          knack for crafting seamless user experiences. Proficient in front-end
          and back-end technologies, I transform innovative ideas into
          functional, elegant, and responsive web solutions.
        </p>

        <a
          href="/client/src/assets/ROHITH MANJUNATH RESUME.pdf"
          download="ROHITH MANJUNATH RESUME.pdf"
          className="shadow p-3 bg-ctc font-semibold rounded-full text-black "
        >
          Download Resume
        </a>

        <a
          className="p-3 bg-ctc font-semibold rounded-full text-black shadow"
          href="#about"
        >
          More About Me
        </a>
      </div>
      <div className="flex items-center justify-start lg:justify-center">
        <img src={Image} className="w-full max-w-[380px] rounded-full" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
