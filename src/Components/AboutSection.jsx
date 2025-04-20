import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import MyProfile from "../image/profile1.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-10 md:mt-14 px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="w-full md:w-7/12 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">
            I'm Egbe Job
          </h1>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {["Web Developer", "UI Designer", "Graphics Designer"].map((role, index) => (
              <span
                key={index}
                className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm sm:text-base"
              >
                {role}
              </span>
            ))}
          </div>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            A creative and detail-oriented developer with a passion for crafting seamless user experiences and impactful visual designs.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-md text-base font-medium hover:bg-yellow-600">
              Explore My Work
            </button>

            <div className="flex space-x-6 py-2">
              {[FaLinkedin, FaInstagram, FaTwitter, FaGithub].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-yellow-500 text-xl hover:text-yellow-600"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

{/* Right Section */}
<div className="flex justify-center md:justify-end md:w-4/12">
  <div className="relative w-40 sm:w-52 md:w-64 aspect-square mx-auto">
    {/* Top Right Gray Circle */}
    <div className="w-32 h-32 bg-white opacity-[.06] rounded-full absolute top-[-10%] -right-[10%] z-0" />

    {/* Bottom Left Gray Circle */}
    <div className="w-32 h-32 bg-white opacity-[.06] rounded-full absolute -bottom-[10%] -left-[10%] z-0" />

    {/* Profile Image Circle */}
    <div className="w-full h-full rounded-full border-4 border-yellow-500 overflow-hidden z-10 relative">
      <img
        src={MyProfile}
        alt="profile"
        className="w-full h-full object-cover object-center"
      />
    </div>
  </div>
</div>


      </div>
      <hr className="w-11/12 mx-auto border-t border-gray-600 opacity-20" />
    </>
  );
};

export default HeroSection;
