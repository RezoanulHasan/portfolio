import React from "react";
import "./style/animation.css";
const Cards = () => {
  return (
    <div className="">
      <div className="  rounded-lg  lg:h-48 sm:w-[80vw] lg:w-96  shadow-xl image-full sm:-rotate-[15deg] sm:mt-16 lg:-rotate-[19deg] ">
        <div className="card-body  mx-15">
          <h2 className="card-title text-white ">
            Full Stack Software Developer
          </h2>
          <p
            className="text-2xl bg-gradient-to-r from-violet-500 to-violet-200 font-black  text-white "
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rezoanul Hasan RIAD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
