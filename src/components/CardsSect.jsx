import React from "react";
import designIMG from "../assets/Frame.svg";
import footprintIMG from "../assets/yMnHKp.tif.svg";
import madeIMG from "../assets/Frame-1.svg";
import woodIMG from "../assets/Frame-2.svg";


const CardsSect = () => {
  return (
    <div>
      <section>
        <div className="main-wrapper flex items-center justify-between pt-[70px]">
          <div className="card bg-white w-[360px] h-[370px] flex flex-col items-center justify-center">
            <img src={designIMG} alt="" />
            <p
              style={{ fontFamily: "cardo", fontWeight: 400 }}
              className="text-[24px] text-black"
            >
              DESIGN
            </p>
            <p
              style={{ fontFamily: "cardo", fontWeight: 400 }}
              className="text-[15px] text-center w-[285px] mx-auto pt-3"
            >
              We create furniture pieces with personality, designed to transform
              your space.
            </p>
            <p
              style={{ fontFamily: "cardo", fontWeight: 400 }}
              className="text-[15px] text-center underline text-black pt-[30px]"
            >
              Learn More
            </p>
          </div>

          <div className="card bg-transparent w-[360px] h-[370px] flex flex-col items-center justify-center">
            <img src={footprintIMG} alt="" />
            <p
              style={{ fontFamily: "cardo", fontWeight: 400 }}
              className="text-[24px] text-black"
            >
              DESIGN
            </p>
            <p
              style={{ fontFamily: "cardo", fontWeight: 400 }}
              className="text-[15px] text-center w-[285px] mx-auto pt-3"
            >
              We create furniture pieces with personality, designed to transform
              your space.
            </p>
            <p
              style={{ fontFamily: "cardo", fontWeight: 400 }}
              className="text-[15px] text-center underline text-black pt-[30px]"
            >
              Learn More
            </p>
          </div>

          <div className="card bg-white w-[360px] h-[370px] flex flex-col items-center justify-center">
            <img src={madeIMG} alt="" />
            <p
              style={{ fontFamily: "cardo", fontWeight: 400 }}
              className="text-[24px] text-black"
            >
              DESIGN
            </p>
            <p
              style={{ fontFamily: "cardo", fontWeight: 400 }}
              className="text-[15px] text-center w-[285px] mx-auto pt-3"
            >
              We create furniture pieces with personality, designed to transform
              your space.
            </p>
            <p
              style={{ fontFamily: "cardo", fontWeight: 400 }}
              className="text-[15px] text-center underline text-black pt-[30px]"
            >
              Learn More
            </p>
          </div>

          <div className="card bg-transparent w-[360px] h-[370px] flex flex-col items-center justify-center">
            <img src={woodIMG} alt="" />
            <p
              style={{ fontFamily: "cardo", fontWeight: 400 }}
              className="text-[24px] text-black"
            >
              DESIGN
            </p>
            <p
              style={{ fontFamily: "cardo", fontWeight: 400 }}
              className="text-[15px] text-center w-[285px] mx-auto pt-3"
            >
              We create furniture pieces with personality, designed to transform
              your space.
            </p>
            <p
              style={{ fontFamily: "cardo", fontWeight: 400 }}
              className="text-[15px] text-center underline text-black pt-[30px]"
            >
              Learn More
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardsSect;
