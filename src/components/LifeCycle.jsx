import React from "react";

const cards = [
  {
    title: "UX-Driven Development",
    description:
      "We prioritize user experience in every project. Our designers and developers collaborate to ensure seamless, intuitive, and engaging digital experiences.",
    imgSrc: "/Rocket_perspective_matte.png",
    bgColor: "bg-black",
  },
  {
    title: "Agile Methodology",
    description:
      "Our team follows agile practices, enabling flexibility, iterative development, and quick adaptation to changing project requirements.",
    imgSrc: "/Code_perspective_matte.png",
    bgColor: "bg-gradient-to-r from-[#FF3D9A] to-[#FF92AE]",
  },
  {
    title: "Scalable Solutions",
    description:
      "We design and develop software with scalability in mind, ensuring your digital solutions grow effortlessly with your business.",
    imgSrc: "/life/Heart_rate_perspective_matte.png",
    bgColor: "bg-gradient-to-r from-[#24E795] to-[#67E9F1]",
  },
  {
    title: "Security First",
    description:
      "Your data and intellectual property are our top priorities. We implement robust security measures to protect your digital assets.",
    imgSrc: "/life/Shield_perspective_matte.svg",
    bgColor: "bg-gradient-to-r from-[#F7936F] to-[#FFEF5E]",
  },
  {
    title: "Code Excellence",
    description:
      "We adhere to best practices in coding, ensuring clean, maintainable, and efficient code for every project.",
    imgSrc: "/life/Success_perspective_matte.png",
    bgColor: "bg-gradient-to-r from-[#57007B] to-[#F76680]",
  },
  {
    title: "Quality Assurance",
    description:
      "Our rigorous testing processes ensure your software is bug-free, reliable, and ready to deliver exceptional performance.",
    imgSrc: "/life/Padlock_perspective_matte.png",
    bgColor: "bg-gradient-to-r from-[#509CF5] to-[#68DBF2]",
  },
];

function LifeCycle() {
  return (
    <div  className=" max-w-[1200px] mx-auto my-10">
      <div className="w-full flex flex-col items-center gap-y-16">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-y-3">
          <hr className="w-1/3 sm:w-1/4 md:w-1/5 h-0.5 bg-gradient-to-r from-pink-500 to-violet-900 mt-3 border-none" />
          <div className="flex flex-col gap-y-6">
            <h3 className="font-light text-3xl sm:text-4xl">Our Design and</h3>
            <h2 className="font-bold text-4xl sm:text-5xl">Development Approach</h2>
          </div>
          <p className="text-[#4A5568] max-w-[800px] mt-4">
            At Cloud Fusion, we follow a proven workflow to deliver innovative, scalable, and secure digital solutions. Here’s how we elevate your digital realm:
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 justify-center max-sm:px-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-fit border-2 h-fit sm:h-[220px] bg-white border-[#E7DAED] p-6 flex max-sm:flex-col max-sm:gap-y-6 sm:pt-12 sm:px-8 gap-x-6"
            >
              {/* Icon */}
              <div className={`flex justify-center items-center ${card.bgColor} h-16 w-16 rounded-lg`}>
                <img src={card.imgSrc} className="object-contain" alt={card.title} />
              </div>

              {/* Content */}
              <div className="sm:max-w-[450px] w-fit flex flex-col gap-y-3">
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