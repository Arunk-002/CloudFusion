import React from "react";

function HireBanner() {
  return (
    <div className=" max-w-[1200px] mx-auto sm:my-15 ">
      <div className="w-full p-10 bg-gradient-to-r from-[#F1F1F5] to-[#E4ECF7] flex flex-col md:flex-row items-center rounded-xl justify-between h-auto md:h-[350px]">
        <div className="md:px-10 text-center md:text-left">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#29272E] max-w-[550px]">
            Hire the best developers and designers around!
          </p>
        </div>
        <div className="md:relative flex flex-col items-center justify-center mt-6 md:mt-0">
          <img className="md:absolute md:block hidden" src="/Group 40.png" alt="" />
          <a href="#contact" className="bg-gradient-to-r from-[#F16063] to-[#FFC656]  px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 text-white font-semibold w-full rounded-sm text-sm sm:text-base md:text-lg">
            Hire Top Developers
          </a>
        </div>
      </div>
    </div>
  );
}

export default HireBanner;
