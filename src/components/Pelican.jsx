import React from 'react'
import left from '../assets/satoru.png'

const Pelican = () => {
    return (
        <div>

            <section>

                <div className="main-wrapper flex gap-[50px] justify-start items-center pt-[150px]">



                    <div className="main-right">
                        <img src={left} alt="" />
                    </div>

                    <div className="main-left flex flex-col items-start gap-[20px]">

                        <p className='font-sans font-bold text-black text-[33px]'>Cloe</p>
                        <p className='font-sans font-medium text-black text-[18px]'>Modular Storage System</p>
                        <p className='font-sans font-medium text-black text-[15px]'>From $1.176</p>
                        <p className='font-sans font-light text-black text-[18px] w-[437px] text-start'>
                            An expansive way to furnish your space exactly how you need it and like it.
                            Transform it in exactly what you need like a bookshelf, tv stand or show rack, you pick.
                        </p>

                        <p className='font-sans font-light text-[16px] text-[#54595F]'>+ 3 sizes, + 5 color finishes</p>

                        <button className='bg-transparent border-none text-[17px] text-black underline cursor-pointer' type='button'>Shop now</button>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default Pelican