import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Stack from "./Stack";
import Services from "./Services";
import LifeCycle from "./LifeCycle";
import HireBanner from "./HireBanner";
import Footer from "./Footer";
import Projects from "./Projects";
import About from "./About";
import ContactUs from "./Contact";

function Home() {
  return (
    <>
      <Navbar />
      
      <section id="home" className="border-y border-[#E7DAED] fade-in md:py-10">
        <LandingPage />
      </section>
      
      <section id="about" className="fade-in">
        <About />
      </section>

      <section id="service" className="border-y border-[#E7DAED] fade-in">
        <Services />
      </section>

      <section id="approach" className="border-y border-[#E7DAED] bg-[#F7F7FA] fade-in">
        <LifeCycle />
      </section>

      <section id="projects" className="bg-[#F7F7FA] fade-in">
        <Projects />
      </section>

      <section id="stack" className="border-y border-[#E7DAED] fade-in">
        <Stack />
      </section>

      <section className="border-y border-[#E7DAED] fade-in">
        <HireBanner />
      </section>

      <section id="contact" className="fade-in">
        <ContactUs />
      </section>
      
      <Footer />
    </>
  );
}

export default Home;
