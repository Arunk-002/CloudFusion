import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Stack from "./Stack";
import Services from "./Services";
import LifeCycle from "./LifeCycle";
import HireBanner from "./HireBanner";
import Footer from "./Footer";
import Projects from "./Projects";
import ContactUs from "./Contact";
function Home() {
  return (
    <>
      <Navbar />
      <section>
        <LandingPage />
      </section>
      <section className="border-y border-[#E7DAED]">
        <Services />
      </section>
      <section className="border-y border-[#E7DAED] bg-[#F7F7FA]">
        <LifeCycle />
      </section>
      <section className="bg-[#F7F7FA]">
        <Projects />
      </section>
      <section className="border-y border-[#E7DAED]">
        <Stack />
      </section>
      <section className="border-y border-[#E7DAED]">
        <HireBanner/>
      </section>
      <section>
         <ContactUs  />
      </section>
      <Footer/>
    </>
  );
}

export default Home;
