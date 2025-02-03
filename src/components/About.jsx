import React from "react";

function About() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 my-20">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-12">
        {/* Left Section: Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/10791990_4567319.svg" // Replace with your image path
            alt="About Us"
            className="rounded-lg shadow-lg w-full max-w-[500px]"
          />
        </div>

        {/* Right Section: Content */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About <span className="text-primary-color">Cloud Fusion</span>
          </h2>
          <p className="text-[#4A5568]">
            At Cloud Fusion, we’re passionate about helping businesses thrive in the digital age. Our mission is to <span className="font-semibold text-[#33415C]">elevate your digital realm</span> by delivering innovative, tailored solutions that drive results.
          </p>
          <p className="text-[#4A5568]">
            With years of experience in web design, cloud solutions, and digital transformation, we’ve partnered with businesses across industries to create impactful digital experiences. Whether you’re a startup or an established enterprise, we’re here to bring your vision to life.
          </p>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
            <ul className="list-disc list-inside text-[#4A5568]">
              <li><span className="font-semibold text-[#33415C]">Innovation:</span> We stay ahead of the curve to bring you the latest in digital solutions.</li>
              <li><span className="font-semibold text-[#33415C]">Collaboration:</span> Your vision, our expertise—together, we create something extraordinary.</li>
              <li><span className="font-semibold text-[#33415C]">Excellence:</span> We’re committed to delivering top-notch quality in every project.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;