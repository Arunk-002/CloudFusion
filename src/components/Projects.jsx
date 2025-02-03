import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      name: "CloudSync",
      description: "A cloud storage solution for seamless file management.",
      links: [{ name: "View Project", link: "https://github.com/Janees1010?tab=repositories" }],
      banner: "/projectBanners/cloudy.png",
    },
    {
      name: "E-Commerce Platform",
      description: "A scalable e-commerce platform with advanced analytics.",
      links: [{ name: "View Project", link: "https://github.com/Janees1010?tab=repositories" }],
      banner: "/projectBanners/hoolio.png",
    },
    {
      name: "FormFlow",
      description: "An intuitive form builder for businesses and individuals.",
      links: [{ name: "View Project", link: "https://github.com/Janees1010?tab=repositories" }],
      banner: "/projectBanners/formBuilder.png",
    },
  ];

  return (
    <div  className="max-w-[1200px] my-10 mx-auto px-4">
      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-y-3">
        <hr className="w-1/3 sm:w-1/4 md:w-1/5 h-0.5 bg-gradient-to-r from-pink-500 to-violet-900 mt-3 border-none" />
        <div className="flex flex-col gap-y-6">
          <h3 className="font-light text-3xl sm:text-4xl">Our</h3>
          <h2 className="font-bold text-4xl sm:text-5xl">Projects</h2>
        </div>
        <p className="text-[#4A5568] max-w-[800px] mt-4">
          At Cloud Fusion, we’ve helped businesses elevate their digital realm with innovative solutions. Here are some of our standout projects:
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col lg:flex-row gap-6 items-center mt-10 w-full justify-center">
        {projects?.map((p, i) => (
          <div
            key={i}
            className="relative shadow-md md:w-[70%] lg:w-[45%] sm:w-[70%] w-[90%] h-[240px] rounded-md overflow-hidden group flex flex-col justify-center items-center"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-all duration-300 group-hover:blur-md"
              style={{ backgroundImage: `url(${p.banner})` }}
            ></div>

            {/* Overlay to ensure text remains readable */}
            <div className="absolute inset-0 group-hover:bg-black/70 transition-all duration-300"></div>

            {/* Content (Initially Hidden) */}
            <div className="relative opacity-0 p-6 h-full w-full flex flex-col justify-center items-center text-white translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-center">
              <p className="text-xl font-semibold">{p.name}</p>
              <p className="text-gray-300 mt-2">{p.description}</p>
              <div className="flex gap-4 mt-4 absolute right-5 bottom-[10px]">
                {p.links.map((l, i) => (
                  <a
                    key={i}
                    className="py-2 px-4 rounded-md flex gap-2 items-center text-white hover:text-blue-300 transition"
                    href={l.link}
                  >
                    {l.name} <FaArrowRight />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;