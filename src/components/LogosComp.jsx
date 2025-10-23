<<<<<<< HEAD
import React from "react";
import logos from "../assets/logos.png";

const LogosComp = () => {
  return (
    <div>
      <p
        style={{ fontFamily: "cardo", fontWeight: 400 }}
        className="text-[20px] text-center text-[#454545] pt-[120px]"
      >
        Those who are talking about us...
      </p>
=======
import React from 'react'
import logos from '../assets/logos.png'

const LogosComp = () => {
    return (
        <div>

            <p style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[20px] text-center text-[#454545] pt-[120px]'>Those who are talking about us...</p>

            <img className='object-cover w-[100%] pt-[30px]' src={logos} alt="" />
        </div>
    )
}
>>>>>>> 3c6381e (final)

      <img className="object-cover w-[100%] pt-[30px]" src={logos} alt="" />
    </div>
  );
};

export default LogosComp;
