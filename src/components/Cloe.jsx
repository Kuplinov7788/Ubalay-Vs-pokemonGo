import React from 'react'
import right from '../assets/gojo.png'

const Cloe = () => {
    return (
        <div>

            <section>

                <div className="main-wrapper flex gap-[50px] justify-end items-center pt-[150px]">

                    <div className="main-left flex flex-col items-end gap-[20px]">

                        <p className='font-sans font-bold text-black text-[33px]'>Cloe</p>
                        <p className='font-sans font-medium text-black text-[18px]'>Modular Storage System</p>
                        <p className='font-sans font-medium text-black text-[15px]'>From $1.176</p>
                        <p className='font-sans font-light text-[#54595F] text-[18px] w-[437px] text-end'>
                            An expansive way to furnish your space exactly how you need it and like it.
                            Transform it in exactly what you need like a bookshelf, tv stand or show rack, you pick.
                        </p>

                        <button className='bg-transparent border-none text-[17px] text-black underline cursor-pointer' type='button'>Shop now</button>

                    </div>

                    

                    <div className="main-right">
                        <img src={right} alt="" />
                    </div>

                </div>

            </section>

        </div>
    )
}

export default Cloe