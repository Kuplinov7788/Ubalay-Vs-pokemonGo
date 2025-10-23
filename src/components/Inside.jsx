import React from 'react'
import france from '../assets/Frame.png'

const Inside = () => {
    return (
        <>
            <div className='mx-auto w-[70%] max-w-[100%]'>
                <h1 className='text-4xl text-center pt-[30px]'>Our pieces inside your home</h1>
                <p className='text-center pt-[30px]'>Get inspired by our products in real-life. Tag us and be featured!</p>
                <div className='mt-[30px]  '>
                    <img src={france} alt="" />

                </div>
            </div>
        </>
    )
}

export default Inside