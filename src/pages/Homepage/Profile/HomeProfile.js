import React from "react";
import profile from "../../../assets/images/oduspic.jpg";
import SocialLinks from "../../../components/SocialLinks";

const HomeProfile = () => {
  return (
    <div className="w-full px-4 lg:hidden flex md:flex-row items-center flex-col py-6">
      <div className="md:w-1/2 w-full flex md:flex-col flex-row justify-center items-center mb-6">
        <div className="flex md:flex-col flex-row justify-between md:h-28 h-auto md:w-auto w-full">
          <h2 className="text-white text-4xl font-bold ">Oluwatobi</h2>
          <h2 className="text-white leading-[20px]">Software Engineer</h2>
        </div>
        <div className="md:mt-6 md:mb-6 mt-4">
          <SocialLinks />
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={profile}
          alt="Oluwatobi Odubote"
          className="h-[250px] w-[250px] object-cover rounded-3xl md:ml-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default HomeProfile;
