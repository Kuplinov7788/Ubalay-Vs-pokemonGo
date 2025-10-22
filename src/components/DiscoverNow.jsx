import React from "react";
import "@fontsource/cardo";
import "@fontsource/cardo/700.css";
import background from "../assets/bg.png";

const DiscoverNow = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-screen flex flex-col items-center mt-[30px] pt-[200px]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <p className="font-sans font-bold text-[27px] text-white w-[807px] text-center ">
          Furniture designed to live in harmony, creating distinctive and
          timeless spaces
        </p>
        <button className="border-[2px] border-white text-white text-[20px] font-cardo  py-[8px] px-[40px] mt-[30px] hover:bg-[white] hover:text-black transition-all ">
          Discover now
        </button>
      </section>
    </div>
  );
};

export default DiscoverNow;
