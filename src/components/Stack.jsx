import React from "react";

function Stack() {
  const techStack = [
    { src: "/icons8-css3-144.png", alt: "CSS3" },
    { src: "/icons8-django-150.png", alt: "Django" },
    { src: "/icons8-express-js-150.png", alt: "Express.js" },
    { src: "/icons8-html-5-144.png", alt: "HTML5" },
    { src: "/icons8-nextjs-144.png", alt: "Next.js" },
    { src: "/icons8-python-144.png", alt: "Python" },
    { src: "/icons8-react-160.png", alt: "React" },
    { src: "/icons8-tailwind-css-144.png", alt: "Tailwind CSS" },
    {
      src: "/kisspng-mysqli-php-database-linux-coding-5ac4824a2e87e0 1.png",
      alt: "MySQLi",
    },
    { src: "/icons8-docker-144.png", alt: "Docker" },
    { src: "/icons8-aws-144.png", alt: "AWS" },
    { src: "/icons8-js-144.png", alt: "JavaScript" },
    { src: "/icons8-material-ui-144.png", alt: "Material UI" },
    { src: "/icons8-node-js-144.png", alt: "Node.js" },
    {
      src: "/mongodb-logo-freelogovectors.net_-1292461998.png",
      alt: "MongoDB",
    },
  ];
  return (
    <>
      <div  className=" max-w-[1200px]  mx-auto px-4 my-12">
        <div className="flex flex-col items-center gap-y-16">
          <div className="flex flex-col items-center text-center gap-y-3">
            <hr className="w-1/3 sm:w-1/4 md:w-1/5 h-0.5 bg-gradient-to-r from-pink-500 to-violet-900 mt-3 border-none" />
            <div className=" flex flex-col gap-y-6">
              <h3 className="font-light text-3xl sm:text-4xl">Our</h3>
              <h2 className="font-bold text-4xl sm:text-5xl">Tech Stack</h2>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6  sm:gap-10 md:gap-12 lg:gap-x-20 max-w-5xl">
            {techStack.map((tech, index) => (
              <img
                key={index}
                src={tech.src}
                alt={tech.alt}
                className="w-14 sm:w-18 md:w-18 lg:w-20"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Stack;
