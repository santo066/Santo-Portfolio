import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from "../../assets/Group 1 (1).png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../../App.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Link } from 'react-scroll';


export default function ProjectSlider() {
    return (
        <div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='md:p-5 py-5 px-2 bg-[#303433] rounded-2xl md:rounded-4xl'>
                        <img src={project1} alt="" />
                        <div className='mt-5'>
                            <a href="https://procus-master-react-two.vercel.app/" target="_blank" rel="noopener noreferrer" className='4'>
                                <h4 className='text-2xl md:font-bold font-normal mb-2.5 md:text-4xl underline hover:text-[#cf1f1f] transition-all duration-500'>Frontend Project</h4>
                            </a>
                            <p className='md:text-[18px]/[115%] text-[16px]/[115%] font-normal'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illum molestiae. Rerum asperiores fuga, esse et saepe error maiores corrupti.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
               
                
            </Swiper>
        </div>
    )
}