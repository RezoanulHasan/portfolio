import React from "react";
import { Fade } from "react-awesome-reveal";
import Cards from "./Cards";
import Skills from "./Skills";

const AboutTouch = () => {
  return (
    <div id="about">
      <div className="">
        <div className="lg:flex lg:flex-col justify-center items-center">
          <div className="inline w-[50vw]">
            <div className="flex justify-center lg:justify-center items-center">
              <div className="w-36 border-t-2 border-white"></div>

              <h2
                className="text-lightSlate  text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-gradient-to-r from-violet-500 to-violet-200"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Keep on touch
              </h2>
            </div>
            <p className="py-6 text-Slate   text-white text-justify">
              I am working in this field from last two year. Back one years ago
              i found that i am interested to work with website,build something
              new and give it a attractive look.So i started to Learning things
              to make my dream true.And now i can build Full stack Projects!
            </p>
          </div>

          <Fade direction="down">
            <div className=" lg:relative h-auto p-8">
              <Cards></Cards>
              <div className="lg:absolute  top-16 lg:top-24 left-48">
                <Skills></Skills>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutTouch;
