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
import UnblurOnScroll from "./UnblurOnScroll"; // Import the new component

function Home() {
  return (
    <>
      <Navbar />

      <UnblurOnScroll>
        <section id="home" className="border-y border-[#E7DAED] md:py-10">
          <LandingPage />
        </section>
      </UnblurOnScroll>

      <UnblurOnScroll>
        <section id="about">
          <About />
        </section>
      </UnblurOnScroll>

      <UnblurOnScroll>
        <section id="service" className="border-y border-[#E7DAED]">
          <Services />
        </section>
      </UnblurOnScroll>

      <UnblurOnScroll>
        <section id="approach" className="border-y border-[#E7DAED] bg-[#F7F7FA]">
          <LifeCycle />
        </section>
      </UnblurOnScroll>

      <UnblurOnScroll>
        <section id="projects" className="bg-[#F7F7FA]">
          <Projects />
        </section>
      </UnblurOnScroll>

      <UnblurOnScroll>
        <section id="stack" className="border-y border-[#E7DAED]">
          <Stack />
        </section>
      </UnblurOnScroll>

      <UnblurOnScroll>
        <section className="border-y border-[#E7DAED]">
          <HireBanner />
        </section>
      </UnblurOnScroll>

      <UnblurOnScroll>
        <section id="contact">
          <ContactUs />
        </section>
      </UnblurOnScroll>

      <Footer />
    </>
  );
}

export default Home;
