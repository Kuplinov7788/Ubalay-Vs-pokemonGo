import React from 'react'
import batoo from '../assets/bateasila.png'
const Batea = () => {
  return (
    <>
      <div className='flex items-center justify-end mt-[30px] gap-[40px]'>
        <div className='text-end+'>
          <p className='text-5xl'><b>Batea Collection</b></p>
          <p className='pt-[12px] pb-[12px]'>Tables with storage & tray tables</p>
          <p>From
            $
            272</p>
          <p className='pt-[12px] w-[437px]'>Composed of clean and rounded lines, the Batea Collection includes unique tables with extra functionality like a removable tray, and hidden storage.</p>
          <p className='opacity-31 pt-[14px]'>+ 3 sizes, + 6 color finishes</p>
          <p className="pt-[60px]">
            <a href="">shop now</a>
          </p>
        </div>
        <img className='w-[1300px]' src={batoo} alt="" />
      </div>
    </>
  )
}

export default Batea