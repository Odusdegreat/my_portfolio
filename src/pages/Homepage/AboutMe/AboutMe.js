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
        <span className="text-primary"> passion</span>; it&apos;s the driving
        force that transforms curiosity into expertise and aspirations into
        milestones.
      </SectionHead>

      <p className="text-accent max-w-[800px]">
        A Software Engineer focused on building performant web and mobile
        applications using React, Next.js, React Native, Django, and Node.js. I
        care deeply about clean architecture, intuitive design, and scalable
        systems — and I&apos;m currently exploring AI and Web3 to build smarter
        digital experiences.
      </p>
      <div className="flex">
        <a
          href="https://docs.google.com/document/d/1exbVtHR29vz7ALWcVdRg4xx_qeFrnw60fgA_pReKmmE/preview"
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
