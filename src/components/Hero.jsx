import React from "react";
import "animate.css";

const Hero = () => {
  return (
    <div className="text-white h-screen md:h-full px-10 bg-black bg-opacity-60 text-left flex items-center">
      <div className="w-full">
        <div className="max-w-2xl lg:max-w-5xl mx-auto pt-0 md:pt-44 pb-0 md:pb-40 text-center sm:text-left animate__animated animate__fadeInUpBig">
          <h4 className="sm:text-xl mb-2 text-gray-400 font-normal">
            WELCOME TO GLINT
          </h4>
          <h1 className="max-w-2xl font-bold text-3xl leading-snug md:leading-normal sm:text-4xl md:text-5xl">
            We are a creative group of people who design influential brands and
            digital experiences.
          </h1>
          <div className="flex flex-col mt-12 lg:mt-20 font-mono font-semibold sm:flex-row">
            <button className="border-2 px-8 py-3 md:py-4 mb-4 sm:mb-0 sm:mr-7 tracking-widest text-xs md:text-sm hover:bg-white hover:text-black duration-300">
              START A PROJECT
            </button>
            <button className="border-2 px-8 py-3 md:py-4 mb-4 sm:mb-0 sm:mr-7 tracking-widest text-xs md:text-sm hover:bg-white hover:text-black duration-300">
              MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
