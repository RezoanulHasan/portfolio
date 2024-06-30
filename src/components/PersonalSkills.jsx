import React from "react";
import Lottie from "lottie-react";
import { Fade } from "react-awesome-reveal";

import office from "../../public/assets/office.json";

const PersonalSkills = () => {
  return (
    <div className=" overflow-hidden mx-10">
      <div className="mt-10 m-10">
        <h2
          className=" text-center text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-gradient-to-r from-violet-500 to-violet-200"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Personal Strengths & Skills
        </h2>

        <div className="flex lg:flex-row flex-col ">
          <div className=" w-full   lg:w-1/2  ">
            <Fade direction="left">
              <Lottie className="" animationData={office} loop={true} />
            </Fade>
          </div>

          {/*  personal Strengths & Skills  */}
          <div className=" w-full   lg:w-1/2  ">
            <Fade direction="right">
              <div className=" duration-500 m-3 sm:m-5 rounded-lg group relative lg:hover:scale-[1.15] hover:scale-[0.1]cursor-pointer flex gap-5  justify-center align-center ">
                <div className=" border border-white  shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500   mt-10">
                  <div className="   border border-white  shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500  grid w-full h-20 m-5 bg-secondary hover:text-black rounded text-primary-content place-content-center">
                    Good leadership
                  </div>
                  <div className="     grid  w-full h-20  m-5 bg-secondary hover:text-black    rounded bg-accent text-accent-content place-content-center">
                    Self-motivated{" "}
                  </div>
                  <div className="  grid w-full  h-20 rounded  m-5 bg-secondary hover:text-black  text-secondary-content place-content-center">
                    Hard working
                  </div>
                  <div className=" grid  w-full h-20 rounded   m-5 bg-secondary hover:text-black  text-warning-content place-content-center">
                    {" "}
                    Time management
                  </div>
                </div>

                <div className="  border border-white  shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500   mt-10">
                  <div className=" grid  w-full     m-5 bg-secondary hover:text-black h-20  rounded text-warning-content place-content-center">
                    Creativity{" "}
                  </div>
                  <div className="grid w-full  m-5 bg-secondary hover:text-black-20 rounded  h-20  text-primary-content place-content-center">
                    Attention details
                  </div>
                  <div className="grid  w-full   m-5 bg-secondary hover:text-black  h-20 rounded text-accent-content place-content-center">
                    Positive attitude{" "}
                  </div>
                  <div className="grid     w-full  m-5 bg-secondary hover:text-black h-20 rounded text-secondary-content place-content-center">
                    Critical thinking
                  </div>
                </div>

                <div className=" border border-white  shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500    mt-10">
                  <div className="grid   m-5 bg-secondary hover:text-black    w-full h-20 rounded  text-secondary-content place-content-center">
                    Critical thinking
                  </div>
                  <div className="grid    m-5 bg-secondary hover:text-black         w-full  h-20 rounded bg-warning text-warning-content place-content-center">
                    {" "}
                    Problem-solving{" "}
                  </div>

                  <div className="grid    m-5 bg-secondary hover:text-black         w-full  h-20 rounded bg-warning text-warning-content place-content-center">
                    Multitasking{" "}
                  </div>
                  <div className="grid  w-full   m-5 bg-secondary hover:text-black         h-20 rounded  text-accent-content place-content-center">
                    Negotiation skills{" "}
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalSkills;
