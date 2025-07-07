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
        My journey into software engineering began with a passion for creating
        intuitive user interfaces and solving real-world problems through
        technology. What started as an early interest in web design gradually
        evolved into a strong focus on front-end development and building
        scalable, user-friendly applications across the web and mobile. I
        specialize in core web technologies—HTML, CSS, and JavaScript—and have
        grown my skills through real-world projects that emphasize performance,
        accessibility, and clean architecture. Over time, I’ve built with
        frameworks and tools like React, Next.js, Angular, TypeScript, Tailwind
        CSS, and Firebase, using them to craft dynamic and responsive user
        interfaces that solve actual problems. Some of my favorite projects
        include a GitHub user search tool, a music player powered by the Deezer
        API, and a Dropbox-like file storage app (Droply) . I also work with
        React Native to build cross-platform mobile apps that maintain native
        performance and seamless user experience. With hands-on experience using
        Figma, I design intuitive interfaces and bring them to life through
        pixel-perfect implementations. I’m also comfortable integrating
        third-party services like Clerk, Dojah, and various RESTful APIs to
        support authentication flows and real-time functionality. Lately, I’ve
        been exploring how Artificial Intelligence can transform the developer
        experience—from writing smarter code to enhancing UI logic and creating
        more personalized user interactions. I’m equally curious about Web3, and
        the potential of decentralized apps to reshape ownership, identity, and
        access on the internet. Driven by a mindset of continuous learning, I
        love experimenting with new tools, contributing to open-source, and
        staying ahead of industry trends. Whether working solo or within a team,
        my mission is to build useful, accessible, and human-centered digital
        experiences. When I’m not coding, I’m either sketching new ideas in
        Figma, studying product design, diving into tech communities, or
        discovering how emerging technologies like AI and Web3 can shape the
        future of software.
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
