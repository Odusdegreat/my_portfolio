import React from "react";
import SectionTitle from "../../../components/Typography/SectionTitle";
import { HiOutlineDatabase } from "react-icons/hi";
import { FiCode, FiUploadCloud } from "react-icons/fi";
import SectionHead from "../../../components/Typography/SectionHead";

const Services = () => {
  const services = [
    {
      id: 1,
      service: "Web Development",
      details:
        "I build full-stack web applications with React, Next.js, and TypeScript, crafting responsive UIs with Tailwind CSS and Framer Motion. On the backend, I work with Node.js, NestJS, and Python, designing RESTful APIs and managing data with both PostgreSQL and MongoDB.",
    },
    {
      id: 2,
      service: "Mobile App Development",
      details:
        "I’ve built fast, user-friendly apps with React Native and Expo, turning ideas into smooth, engaging mobile experiences. I use tools like NativeWind, TypeScript, React Navigation, and Expo APIs to create clean, high-performing apps focused on great design, performance, and innovation.",
    },
    {
      id: 3,
      service: "Database Management",
      details:
        "I’ve worked with Firebase (Firestore and Realtime Database) for real-time syncing and auth in mobile and web apps. I also use Supabase for scalable relational data, and have experience with SQLite, MongoDB, and PostgreSQL for flexible backend solutions based on project needs.",
    },
  ];
  const props = {
    img: "https://cdn.lordicon.com/ofwpzftr.json",
    text: "Services",
  };
  return (
    <section id="services" className="mb-32">
      <SectionTitle props={props} />
      <SectionHead>
        My <span className="text-primary">Specializations</span>
      </SectionHead>
      <div className="services">
        {services.map(({ service, details }, index) => (
          <div
            key={index}
            className="hover:text-primary hover:border-primary border-[1px] border-accent p-6 rounded-2xl"
            data-aos="fade-up"
            data-aos-delay={`${(index % 6) * 100 + 100}`}
          >
            {index === 0 && <FiCode className="text-[40px]" />}
            {index === 1 && <HiOutlineDatabase className="text-[40px]" />}
            {index === 2 && <FiUploadCloud className="text-[40px]" />}
            <div>
              <h2 className="lg:text-2xl md:text-2xl text-xl mt-3 lg:font-normal md:font-normal font-bold">
                {service}
              </h2>
              <p className="text-accent mt-3 text-sm">{details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
