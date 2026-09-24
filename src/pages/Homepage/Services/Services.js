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
        "I build full-stack web apps with React, Next.js, and TypeScript, backed by Node.js, NestJS, and Python with PostgreSQL or MongoDB.",
    },
    {
      id: 2,
      service: "Mobile App Development",
      details:
        "I build fast, user-friendly apps with React Native and Expo, using NativeWind and TypeScript for polished, high-performing experiences.",
    },
    {
      id: 3,
      service: "Database Management",
      details:
        "I work with Firebase, Supabase, MongoDB, and PostgreSQL to deliver real-time syncing and scalable data solutions.",
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
