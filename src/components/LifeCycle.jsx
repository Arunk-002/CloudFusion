import React from "react";

const cards = [
  {
    title: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    imgSrc: "/Rocket_perspective_matte.png",
    bgColor: "bg-black",
  },
  {
    title: "Developing Shared Understanding",
    description:
      "Our team follows agile methodologies, ensuring a flexible and iterative approach to development that adapts to changing requirements.",
    imgSrc: "/Code_perspective_matte.png",
    bgColor: "bg-gradient-to-r from-[#509CF5] to-[#68DBF2]",
  },
  {
    title: "Proven Experience and Expertise",
    description:
      "We design software with scalability in mind, allowing your application to grow efficiently with your business needs.",
    imgSrc: "/life/Heart_rate_perspective_matte.png",
    bgColor: "bg-gradient-to-r from-[#FF3D9A] to-[#FF92AE]",
  },
  {
    title: "Security & Intellectual Property (IP)",
    description:
      "We design software with scalability in mind, allowing your application to grow efficiently with your business needs.",
    imgSrc: "/life/Shield_perspective_matte.svg",
    bgColor: "bg-gradient-to-r from-[#24E795] to-[#67E9F1]",
  },
  {
    title: "Code Reviews",
    description:
      "We design software with scalability in mind, allowing your application to grow efficiently with your business needs.",
    imgSrc: "/life/Success_perspective_matte.png",
    bgColor: "bg-gradient-to-r from-[#F7936F] to-[#FFEF5E]",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "We design software with scalability in mind, allowing your application to grow efficiently with your business needs.",
    imgSrc: "/life/Padlock_perspective_matte.png",
    bgColor: "bg-gradient-to-r from-[#57007B] to-[#F76680]",
  },
  
];

function LifeCycle() {
  return (
    <div id="approach" className=" max-w-[1200px] mx-auto my-10">
      <div className="w-full flex flex-col items-center gap-y-16">
        <div className="flex flex-col items-center text-center gap-y-3">
          <hr className="w-1/3 sm:w-1/4 md:w-1/5 h-0.5 bg-gradient-to-r from-pink-500 to-violet-900 mt-3 border-none" />
          <div className="flex flex-col gap-y-6">
            <h3 className="font-light text-3xl sm:text-4xl">Our design and</h3>
            <h2 className="font-bold text-4xl sm:text-5xl">development approach</h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center max-sm:px-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-fit border-2 h-fit sm:h-[220px] bg-white border-[#E7DAED] p-6 flex max-sm:flex-col max-sm:gap-y-6 sm:pt-12 sm:px-8 gap-x-6"
            >
              <div className={`flex justify-center items-center ${card.bgColor} h-16 w-16 rounded-lg`}>
                <img src={card.imgSrc} className="object-contain" alt={card.title} />
              </div>
              <div className=" sm:max-w-[450px] w-fit flex flex-col gap-y-3">
                <h2 className="text-[#1A202C] text-xl font-semibold">{card.title}</h2>
                <p className="text-[#4A5568] sm:w-[350px] text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LifeCycle;
