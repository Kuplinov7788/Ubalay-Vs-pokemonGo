import React from "react";
import image1 from "../assets/IMAGE-2.png";
import image2 from "../assets/IMAGE.png";
import image3 from "../assets/IMAGE-3.png";
import image4 from "../assets/IMAGE-1.png";
import banner from "../assets/banner.png";
import "swiper/css";

import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Advantages = () => {
  return (
    <div>
      <section>
        <div className="max-w-[100%] w-[95%] mx-auto">
          <div className="main-wrapper-2 flex items-center justify-between py-[50px]">
            <div className="flex items-center gap-[22px] p-[20px]">
              <img src={image1} alt="" />
              <p className="font-sans font-medium text-[15px]">Free Shipping</p>
            </div>

            <div className="flex items-center gap-[22px] p-[20px]">
              <img src={image2} alt="" />
              <p className="font-sans font-medium text-[15px]">
                Awarded Product Design
              </p>
            </div>

            <div className="flex items-center gap-[22px] p-[20px]">
              <img src={image3} alt="" />
              <p className="font-sans font-medium text-[15px]">
                Ecofriendly Approach
              </p>
            </div>

            <div className="flex items-center gap-[22px] p-[20px]">
              <img src={image4} alt="" />
              <p className="font-sans font-medium text-[15px]">
                Crafted in Spain
              </p>
            </div>

            <p className="font-sans font-medium text-[15px] text-[black]">
              4.8 Star Reviews
            </p>
          </div>
        </div>
      </section>
      <img className="w-[100%] object-cover" src={banner} alt="" />
    </div>
  );
};

export default Advantages;
