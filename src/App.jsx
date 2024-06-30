import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import StarCanvas from "./components/canvas/Stars";
import Footer from "./components/Footer";
import AboutTouch from "./components/Touch/AboutTouch";
import PersonalSkills from "./components/PersonalSkills";
import Blogs from "./components/Blogs/Blogs";
//import clickSound from "../public/soundEffect/clickSound.wav";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <div className="mt-28">{children}</div>
      </div>
      <About />
      <PersonalSkills />
      <Experience />
      <Tech />
      <Works />
      <AboutTouch />
      <Blogs></Blogs>
      <div className="relative z-0 mt-10">
        <Contact />
        <StarCanvas />
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Hero />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
