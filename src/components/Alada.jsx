import React from 'react'
import ada from '../assets/alda.png'
const Alada = () => {
    return (
        <>
            <div className="flex items-center justify-end mt-[115px] text-end gap-[30px]">
                <div>
                    <p className="text-[#BC1414] pb-[12px]">New Favorite!</p>
                    <p className="text-5xl">
                        <b>Alada</b>
                    </p>
                    <p className="pt-[12px] pb-[12px]">Floating folding desk</p>
                    <p>From $534</p>
                    <p className="pt-[12px] w-[437px]">
                        A timeless and discreet folding desk that seamlessly transforms
                        into a decorative shelf in seconds.
                    </p>
                    <p className="opacity-31 pt-[14px]">+ 4 color finishes</p>

                    <p className="pt-[60px]">
                        <a href="">shop now</a>
                    </p>
                </div>
                <img className='w-[2000px]' src={ada} alt="" />

            </div>
            
        </>
    )
}

export default Alada
