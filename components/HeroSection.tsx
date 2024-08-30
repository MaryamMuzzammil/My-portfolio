import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-[#000000] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 overflow-hidden">
      {/* Purple filled circles */}
      <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#6200753c] rounded-full opacity-70 blur-xl"></div>
      <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-[#6200753c] rounded-full opacity-70 blur-xl"></div>

      {/* Text Content */}
      <div className="text-white md:w-1/2 space-y-4 z-10">
        <p className="text-xl">Hello I am</p>
        <p className="text-3xl font-bold text-[#d89be4]">Maryam Muzzammil</p>
        <p className="text-5xl font-bold">FULL STACK</p>
        <p className="text-5xl font-bold ml-20">DEVELOPER</p>
        <p className="text-lg">
          I am a passionate and skilled front-end and back-end developer
          specializing in Laravel and PHP. Additionally, I am a certified Canva
          designer.
        </p>
        <button className="relative inline-flex  ml-20 items-center justify-center p-[4px] bg-gradient-to-r from-[#b969c5] via-[#6c0087] to-[#ffff] rounded-3xl overflow-hidden">
          <span className="flex items-center   justify-center bg-[#10090e] text-white rounded-3xl px-6 py-2">
            Download Resume
          </span>
        </button>
      </div>

      {/* Image */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center z-10 ml-20">
        <img
          src="/maryampic.png"
          alt="Maryam Muzzammil"
          className="max-w-xs md:max-w-md object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;