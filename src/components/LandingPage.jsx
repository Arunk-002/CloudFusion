import React from "react";

function LandingPage() {
  return (
    <div className=" max-w-[1200px] mx-auto px-4">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center min-h-[calc(100vh-100px)]">
        {/* Left Content Section */}
        <div className="flex flex-col justify-center lg:w-1/2 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start w-full gap-y-8">
            <div className="text-3xl sm:text-5xl/20 font-bold text-amber-600 leading-tight">
              <span className="font-light text-black">Great </span>Product{" "}
              <span className="text-black font-light">
                is <br/>
              </span>
              <span className="font-extrabold text-black sm:text-6xl">built by great</span>{" "}
              teams
            </div>
            <p className="text-[#4A5568] w-[90%] sm:w-[80%]">
              We help build and manage a team of world-class developers to bring
              your vision to life.
            </p>
            <button className="bg-[#3D63EA] mt-4 py-3 px-6 text-white rounded-lg hover:bg-blue-700 transition-all">
              Let's Get Started!
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden  lg:w-1/2 lg:flex justify-center mt-8 lg:mt-0">
          <img
            src="/landing.jpg"
            alt="Landing"
            className="max-w-full h-auto w-[80%] lg:w-[90%] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
