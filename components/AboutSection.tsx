import React from "react";

const AboutSection = () => {
  return (
    <div className="relative bg-[#10090e] flex items-center justify-center px-6 md:px-20 py-10 overflow-hidden">
      {/* Purple filled circles */}
      <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#620075] rounded-full opacity-70 blur-xl"></div>
      <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-[#620075] rounded-full opacity-70 blur-xl"></div>

      <div className="flex items-center justify-center text-5xl text-white font-bold">
        About Me
      </div>
    </div>
  );
};

export default AboutSection;