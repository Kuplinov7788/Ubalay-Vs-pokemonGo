import React, { useEffect } from 'react'

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const SwiperSect = () => {
    return (
        <div>

            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide flex flex-col gap-[30px] py-[50px]">
                        <p style={{ fontFamily: 'cardo', fontWeight: 400 }} className=' text-[20px] text-center w-[1190px] mx-auto'>"The team from Woodendot has displayed utmost professionalism from order to deliver and customer support. We placed an order to the UK and would definitely recommend friends to order from Woodendot!"</p>
                        <p style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-center'>R. Aoun, United Kingdom </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SwiperSect