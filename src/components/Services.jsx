import React from "react";

const servicesData = [
  {
    icon: "/Code_perspective_matte.png",
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "/Mobile_app_perspective_matte.png",
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "/Dashboard_perspective_matte.png",
    title: "Web Hosting Services",
    description:
      "Reliable and secure hosting solutions that ensure your website is always online, fast, and protected. We provide scalable hosting options tailored to your business needs, with 99.9% uptime guarantee and robust security measures.",
  },
];

function Services() {
  return (
    <div id="service" className="w-full my-26">
      <div className="flex flex-col justify-center items-center gap-y-22">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Services We Offer</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1400px]  px-4">
          {servicesData.map((service, index) => (
         <div 
         key={index}
         className="group shadow-2xl border-2 border-transparent px-6 py-8 flex flex-col max-w-[500px] w-full gap-y-10 rounded-lg transition-transform transform hover:translate-y-2  hover:text-[#A02F7D]"
       >
         <div className="flex flex-col gap-y-6">
           <div className="border-2 border-[#A02F7D] rounded-full w-[70px] h-[70px] p-1 flex justify-center items-center">
             <img
               src={service.icon}
               className="object-contain"
               alt=""
             />
           </div>
           
           <h2 className="group-hover:bg-gradient-to-r from-pink-500 to-fuchsia-900 text-[#2D3748] group-hover:text-transparent bg-clip-text font-medium text-2xl">
             {service.title}
           </h2>
         </div>
         <div>
           <p className="text-[#4A5568]">
             {service.description}
           </p>
         </div>
       </div>
       
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
