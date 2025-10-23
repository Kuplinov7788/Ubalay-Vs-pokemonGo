import React from 'react'
import albaimg from '../assets/alba.png'
import ulliki from '../assets/uluchuntugilgan.png'
const Alba = () => {
    return (
        <>
            <div className='flex items-center justifiy-start mt-[30px] gap-[40px]'>
                <img className='w-[1300px]' src={albaimg} alt="" />
                <div>
                    <h1 className='text-5xl'><b>Alba Collection</b></h1>
                    <p className='pt-[12px] pb-[12px]'>Modular bedside table & shelf</p>
                    <p>From
                        $
                        272</p>
                    <p className='pt-[12px] w-[437px]'>A versatile and modular piece with a sculptural touch that can be used as a wall shelf or as a bedside table with concealed storage.</p>
                    <p className='opacity-31 pt-[14px]'>+ 6 color finishes, infinite combinations</p>
                    <p className="pt-[60px]">
                        <a href="">shop now</a>
                    </p>
                    <ul className='mt-[40px]'>
                        <li><img src={ulliki} alt="" /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Alba