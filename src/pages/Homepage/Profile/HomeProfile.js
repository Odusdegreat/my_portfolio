import React from "react";
import profile from "../../../assets/images/oduspic.jpg";
import SocialLinks from "../../../components/SocialLinks";

const HomeProfile = () => {
  return (
    <div className="w-full px-4 lg:hidden flex md:flex-row items-center flex-col py-6 gap-8">
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start gap-3">
        <h2 className="text-white text-4xl font-bold">Oluwatobi</h2>
        <h2 className="text-white leading-[20px]">Software Engineer</h2>
        <div className="my-2">
          <SocialLinks />
        </div>
        <p className="text-white text-sm text-center md:text-left">
          tobiodubote@gmail.com · Lagos, Nigeria
        </p>
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