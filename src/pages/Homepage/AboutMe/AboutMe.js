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
        My journey into software engineering began with a passion for design and
        problem-solving. I specialize in Front-end and Mobile development using
        React, Next.js, and React Native. I’ve built projects like the Inveto
        investment app, a GitHub user search tool, a Deezer-powered music
        player, and a Dropbox-style file system. Skilled in TypeScript, Tailwind
        CSS, Firebase, and Figma, I focus on performance, usability, and clean
        design. Recently, I’ve been exploring AI and Web3 to build more
        innovative digital experiences.
      </p>
      <div className="flex">
        <a
          href="https://docs.google.com/document/d/1exbVtHR29vz7ALWcVdRg4xx_qeFrnw60fgA_pReKmmE/edit?tab=t.0"
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
