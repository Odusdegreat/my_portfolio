import React from "react";
import odus from "../../../assets/images/oduspic.jpg";
import SocialLinks from "../../../components/SocialLinks";

const Profile = () => {
  return (
    <div className="lg:w-[380px] border-[1px] border-[#bbb] rounded-3xl px-6 py-10 sticky top-16">
      <div className="flex justify-between mb-6">
        <h2 className="text-white text-4xl font-bold text-[#03C988]">
          Oluwatobi
        </h2>
        <h2 className="text-white leading-[20px]">Software Engineer</h2>
      </div>
      {/* <p className='text-center text-[8rem]'>👨🏽‍💻</p> */}
      <img
        src={odus}
        alt=""
        className="h-[250px] w-[250px] object-cover rounded-3xl mx-auto"
      />
      <div className="flex flex-col items-center">
        <h2 className="text-white text-lg  mt-8">tobiodubote@gmail.com</h2>
        <h2 className="text-white text-lg  mt-2 mb-6">Lagos, Nigeria</h2>

        {/* SOCIAL MEDIA ICONS */}
        <SocialLinks />
        <a href="#contact">
          <button className="btn btn-wide btn-primary mt-8">Hire Me</button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
