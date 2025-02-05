import { useEffect, useRef, useState } from "react";

const UnblurOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-5"
      }`}
    >
      {children}
    </div>
  );
};

export default UnblurOnScroll;
