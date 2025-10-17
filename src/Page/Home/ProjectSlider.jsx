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
                    <div className='p-5 bg-[#333137] rounded-4xl'>
                        <img src={project1} alt="" />
                        <div className='mt-5'>
                            <a href="https://procus-master-react-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <h4 className='text-4xl mb-5 underline hover:text-[#cf1f1f] transition-all duration-500'>Frontend Project</h4>
                            </a>
                            <p className='text-[18px]/[115%] font-normal'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illum molestiae. Rerum asperiores fuga, esse et saepe error maiores corrupti.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 bg-[#333137] rounded-4xl'>
                        <img src={project1} alt="" />
                        <div className='mt-5'>
                            <a href="https://procus-master-react-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <h4 className='text-4xl mb-5 underline  hover:text-[#cf1f1f] transition-all duration-500'>Frontend Project</h4>
                            </a>
                            <p className='text-[18px]/[115%] font-normal'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illum molestiae. Rerum asperiores fuga, esse et saepe error maiores corrupti.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 bg-[#333137] rounded-4xl'>
                        <img src={project1} alt="" />
                        <div className='mt-5'>
                            <a href="https://procus-master-react-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <h4 className='text-4xl mb-5 underline  hover:text-[#cf1f1f] transition-all duration-500'>Frontend Project</h4>
                            </a>
                            <p className='text-[18px]/[115%] font-normal'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illum molestiae. Rerum asperiores fuga, esse et saepe error maiores corrupti.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 bg-[#333137] rounded-4xl'>
                        <img src={project1} alt="" />
                        <div className='mt-5'>
                            <a href="https://procus-master-react-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <h4 className='text-4xl mb-5 underline  hover:text-[#cf1f1f] transition-all duration-500'>Frontend Project</h4>
                            </a>
                            <p className='text-[18px]/[115%] font-normal'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illum molestiae. Rerum asperiores fuga, esse et saepe error maiores corrupti.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 bg-[#333137] rounded-4xl'>
                        <img src={project1} alt="" />
                        <div className='mt-5'>
                            <a href="https://procus-master-react-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <h4 className='text-4xl mb-5 underline  hover:text-[#cf1f1f] transition-all duration-500'>Frontend Project</h4>
                            </a>
                            <p className='text-[18px]/[115%] font-normal'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illum molestiae. Rerum asperiores fuga, esse et saepe error maiores corrupti.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}