import React from 'react'
import logos from '../assets/logos2.png'
import plantedIMG from '../assets/img1.png'
import starsIMG_Logo from '../assets/img2.png'
import fscIMG from '../assets/img3.png'

const Footer = () => {
    return (
        <div>

            <footer className='bg-[#E9E9E9] mt-[120px]'>

                <div className="footer-wrapper py-[45px] px-[150px]">

                    <div className="footer-top flex items-start justify-between">

                        <div className="cards flex gap-[150px]">

                            <div className="list w-fit flex flex-col items-center gap-[25px]">
                                <p style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[21px] text-black '>ABOUT</p>
                                <ul className='flex flex-col gap-[15px] items-center'>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">About Us</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Design</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Sustainability</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">We plant trees</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Our Story</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Awards</a></li>
                                </ul>
                            </div>

                            <div className="list w-fit flex flex-col items-center gap-[25px]">
                                <p style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[21px] text-black '>Help</p>
                                <ul className='flex flex-col gap-[15px] items-center'>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Holiday Offers FAQ</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">FAQ</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Warranty</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Shipments</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Returns & Claims</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Contact us</a></li>
                                </ul>
                            </div>

                            <div className="list w-fit flex flex-col items-center gap-[25px]">
                                <p style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[21px] text-black '>More</p>
                                <ul className='flex flex-col gap-[15px] items-center'>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Where to find us</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Woodendot Family</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Press</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Affiliates</a></li>
                                    <li><a style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black' href="">Video Lifestyle</a></li>
                                </ul>
                            </div>


                        </div>

                        <div className="right flex flex-col items-center gap-[20px]">

                            <p style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] text-black'>Don’t miss any news and exclusive offers!</p>
                            <button style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[15px] w-[237px] h-[25px] border-[2px] border-black bg-[white]'>Newsletter subscription</button>

                            <div className='flex'>
                                <img src={fscIMG} alt="" />
                                <img src={plantedIMG} alt="" />
                            </div>

                            <img src={starsIMG_Logo} alt="" />

                        </div>


                    </div>

                    <div className="footer-bottom flex justify-between items-center pt-[30px]">

                        <p style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[12px] text-black'>© Copyright – WOODENDOT 2021</p>

                        <img src={logos} alt="" />

                        <p style={{ fontFamily: 'cardo', fontWeight: 400 }} className='text-[12px] text-black'>Terms & Conditions | Privacy Policy & Cookies</p>

                    </div>

                </div>

            </footer>

        </div>
    )
}

export default Footer