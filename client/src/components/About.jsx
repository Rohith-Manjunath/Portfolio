import Image from "../assets/my-image_upscaled.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-16 mx-auto grid grid-cols-1 lg:grid-cols-2 my-28 gap-10"
    >
      <div className="flex items-center justify-start lg:justify-center">
        <img
          src={Image}
          className="w-full max-w-[380px] rounded-full"
          loading="lazy"
          alt=""
        />
      </div>
      <div className="space-y-3">
        <h2 className="text-4xl font-bold py-2">
          About <span className="text-secondary">Me</span>
        </h2>
        <h4 className="capitalize font-semibold text-2xl">
          Full Stack web developer
        </h4>
        <p>
          I am an enthusiastic Full Stack Web Developer known for my creative
          approach and dedication to crafting seamless user experiences.
          Proficient in both front-end and back-end technologies, I possess the
          skillset to transform innovative concepts into functional, elegant,
          and responsive web solutions. My focus lies in merging captivating
          user interfaces with robust server-side applications to deliver
          holistic web experiences.
          <br />
          <br />
          My passion for innovation drives me to convert abstract ideas into
          tangible digital realities. My portfolio showcases a diverse array of
          projects that exemplify my commitment to developing web applications
          that resonate with users while aligning with business objectives.
          Armed with a strong grasp of programming languages, frameworks, and
          development methodologies, I am well-prepared to navigate the
          complexities of modern web development and contribute to projects that
          require both technical expertise and creative finesse.
        </p>
      </div>
    </div>
  );
};

export default About;
