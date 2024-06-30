import React from "react";
//import img1 from '../../assets/img/js.png'
import img1 from "../../../public/assets/img/js.png";
import img2 from "../../../public/assets/img/html.png";
import img3 from "../../../public/assets/img/M.png";
import img4 from "../../../public/assets/img/c.png";
import img5 from "../../../public/assets/img/n.png";
import img6 from "../../../public/assets/img/e.png";
import img7 from "../../../public/assets/img/logo192.png";
import img8 from "../../../public/assets/img/t.png";
import "./style/animation.css";

const Skills = () => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
    >
      <div className="  bg-lightSlate rounded-lg  mx-auto h-48 lg:w-96 shadow-xl mt-8 lg:mt-24 image-full sm:-rotate-[15deg] lg:-rotate-[19deg]">
        <div className="card-body  grid grid-cols-4 gap-3">
          <div className="rounded-full">
            <img src={img7} className="w-[48px] spiner"></img>
          </div>
          <div className="rounded-full">
            <img src={img3} className="w-[48px] spiner"></img>
          </div>
          <div className="rounded-full">
            <img src={img5} className="w-[64px] spiner"></img>
          </div>
          <div className="rounded-full">
            <img src={img6} className="w-[52px] spiner"></img>
          </div>
          <div className="rounded-full">
            <img src={img8} className="w-[48px] spiner"></img>
          </div>
          <div className="rounded-full">
            <img src={img1} className="w-[85px] spiner"></img>
          </div>
          <div className="rounded-full">
            <img src={img4} className="w-[48px] spiner"></img>
          </div>
          <div className="rounded-full">
            <img src={img2} className="w-[48px] spiner"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
