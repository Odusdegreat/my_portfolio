import React from "react";
import SectionTitle from "../../../components/Typography/SectionTitle";
import SectionHead from "../../../components/Typography/SectionHead";

const AboutMe = () => {
  const props = {
    img: "https://cdn.lordicon.com/bhfjfgqz.json",
    text: "About Me",
  };
  return (
    <section id="about" className="mb-16">
      <SectionTitle props={props} />
      <SectionHead>
        Every successful career is built on
        <span className="text-primary"> passion</span>; it’s the driving force
        that transforms curiosity into expertise and aspirations into
        milestones.
      </SectionHead>

      <p className="text-accent max-w-[800px]">
        My journey into software engineering began with a passion for intuitive
        design and real-world problem-solving. I specialize in front-end
        development using HTML, CSS, JavaScript, and frameworks like React,
        Next.js, Angular, and React Native. With a strong focus on performance
        and user experience, I’ve built responsive web and mobile apps like a
        GitHub user search tool, a Deezer-powered music player, and a
        Dropbox-style file storage system. I also work with TypeScript, Tailwind
        CSS, Firebase, and integrate tools like Clerk, Dojah, and various
        RESTful APIs. Skilled in Figma, I design clean interfaces and bring them
        to life through code. Recently, I’ve been exploring AI and Web3
        interested in how they’re reshaping the future of software development.
        Whether solo or on a team, I’m driven to create accessible, impactful
        digital experiences.
      </p>
      <div className="flex">
        <a
          href="https://docs.google.com/document/d/1exbVtHR29vz7ALWcVdRg4xx_qeFrnw60fgA_pReKmmE/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="hover:text-primary transition duration-300 text-lg flex gap-2 items-center uppercase icon mt-10">
            <lord-icon
              target="button"
              src="https://cdn.lordicon.com/egiwmiit.json"
              trigger="hover"
              class="current-color"
              style={{ width: "24px", height: "24px" }}
            ></lord-icon>
            Get my CV
          </button>
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
