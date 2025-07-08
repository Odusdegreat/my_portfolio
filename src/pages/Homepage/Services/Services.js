import React from "react";
import SectionTitle from "../../../components/Typography/SectionTitle";
import { HiOutlineDatabase } from "react-icons/hi";
import { FiCode, FiUploadCloud } from "react-icons/fi";
import SectionHead from "../../../components/Typography/SectionHead";

const Services = () => {
  const services = [
    {
      id: 1,
      service: "Frontend Development",
      details:
        "I specialize in front-end development with React, Next.js, Angular, and React Native building fast, scalable web and mobile apps. With a strong foundation in HTML, CSS, JavaScript, and TypeScript, I write clean, maintainable code. I use Tailwind CSS for styling, Figma for UI design, and manage state with Redux Toolkit, Context API, and Angular Services to ensure performance and scalability.",
    },
    {
      id: 2,
      service: "Database Management",
      details:
        "I’ve worked with Firebase (Firestore and Realtime Database) for real-time syncing and auth in mobile and web apps. I also use Supabase for scalable relational data, and have experience with SQLite, MongoDB, and PostgreSQL for flexible backend solutions based on project needs.",
    },
    {
      id: 3,
      service: "Firebase",
      details:
        "I have expertise in working with Firebase to build robust, real-time mobile applications. I can effectively integrate Firebase services, such as Firestore, Firebase Authentication, and Cloud Functions, into Flutter applications to enhance functionality and user experience. My ability to design and implement scalable backend systems using Firebase ensures seamless data synchronization and user authentication. I write clean and efficient code, leveraging my understanding of data structures, algorithms, and system design to deliver performant, real-time applications.",
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
