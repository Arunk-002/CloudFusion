import React from "react";

const servicesData = [
  {
    icon: "/programmer.png",
    title: "Web Design & Development",
    description:
      "We create stunning, responsive websites that captivate your audience and drive results. From sleek designs to powerful functionality, we ensure your digital presence stands out.",
  },
  {
    icon: "/application-setting.png",
    title: "Mobile App Development",
    description:
      "Transform your ideas into intuitive, high-performance mobile apps. We build apps for iOS and Android that deliver seamless user experiences and elevate your brand.",
  },
  {
    icon: "https://img.icons8.com/pastel-glyph/100/228BE6/cloud-development--v1.png",
    title: "Cloud Solutions",
    description:
      "Harness the power of the cloud with our scalable, secure, and efficient solutions. We help you streamline operations, reduce costs, and future-proof your business.",
  }
];

function Services() {
  return (
    <div  className="w-full my-26">
      <div className="flex flex-col justify-center items-center gap-y-22">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Services We Offer</h1>
          <p className="mt-4 text-[#4A5568] text-center max-w-[800px] px-4">
            At Cloud Fusion, we specialize in delivering innovative digital solutions to help you elevate your digital realm. Explore our services below:
          </p>
        </div>
        <div className="grid grid-cols-1 place-items-center  md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1400px] px-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group shadow-2xl border-2 border-transparent px-6 py-8 flex flex-col max-w-[500px] w-full gap-y-10 rounded-lg transition-transform transform hover:translate-y-2 hover:text-[#A02F7D]"
            >
              <div className="flex flex-col gap-y-6">
                <div className="  group-hover:border-[#0353A4] rounded-full w-[70px] h-[70px] p-1 flex justify-center items-center">
                  <img src={service.icon} className="object-contain grayscale group-hover:grayscale-0" alt="" />
                </div>
                <h2 className="group-hover:text-primary-color text-[#2D3748] bg-clip-text font-medium text-2xl">
                  {service.title}
                </h2>
              </div>
              <div>
                <p className="text-[#4A5568] text-justify">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;