import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from "../../assets/Group 1 (1).png"
import project2 from "../../assets/project_image.png"
import project3 from "../../assets/project_image2.png"
import project4 from "../../assets/project_image3.png"
import project5 from "../../assets/project_image4.png"

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
                            <p className='md:text-[18px]/[115%] text-[16px]/[115%] font-normal'>This project is a responsive and visually clean frontend application developed with React.js and Tailwind CSS. It features modular components, smooth navigation, and consistent design patterns. The UI is optimized for mobile, tablet, and desktop devices, ensuring accessibility and performance while maintaining a modern look and feel.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:p-5 py-5 px-2 bg-[#303433] rounded-2xl md:rounded-4xl'>
                        <img src={project2} alt="" />
                        <div className='mt-5'>
                            <a href="https://procus-master-react-two.vercel.app/" target="_blank" rel="noopener noreferrer" className='4'>
                                <h4 className='text-2xl md:font-bold font-normal mb-2.5 md:text-4xl underline hover:text-[#cf1f1f] transition-all duration-500'>Frontend Project</h4>
                            </a>
                            <p className='md:text-[18px]/[115%] text-[16px]/[115%] font-normal'>This project is a responsive and visually clean frontend application developed with React.js and Tailwind CSS. It features modular components, smooth navigation, and consistent design patterns. The UI is optimized for mobile, tablet, and desktop devices, ensuring accessibility and performance while maintaining a modern look and feel.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:p-5 py-5 px-2 bg-[#303433] rounded-2xl md:rounded-4xl'>
                        <img src={project3} alt="" />
                        <div className='mt-5'>
                            <a href="https://procus-master-react-two.vercel.app/" target="_blank" rel="noopener noreferrer" className='4'>
                                <h4 className='text-2xl md:font-bold font-normal mb-2.5 md:text-4xl underline hover:text-[#cf1f1f] transition-all duration-500'>Frontend Project</h4>
                            </a>
                            <p className='md:text-[18px]/[115%] text-[16px]/[115%] font-normal'>This project is a responsive and visually clean frontend application developed with React.js and Tailwind CSS. It features modular components, smooth navigation, and consistent design patterns. The UI is optimized for mobile, tablet, and desktop devices, ensuring accessibility and performance while maintaining a modern look and feel.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:p-5 py-5 px-2 bg-[#303433] rounded-2xl md:rounded-4xl'>
                        <img src={project4} alt="" />
                        <div className='mt-5'>
                            <a href="https://procus-master-react-two.vercel.app/" target="_blank" rel="noopener noreferrer" className='4'>
                                <h4 className='text-2xl md:font-bold font-normal mb-2.5 md:text-4xl underline hover:text-[#cf1f1f] transition-all duration-500'>Frontend Project</h4>
                            </a>
                            <p className='md:text-[18px]/[115%] text-[16px]/[115%] font-normal'>This project is a responsive and visually clean frontend application developed with React.js and Tailwind CSS. It features modular components, smooth navigation, and consistent design patterns. The UI is optimized for mobile, tablet, and desktop devices, ensuring accessibility and performance while maintaining a modern look and feel.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:p-5 py-5 px-2 bg-[#303433] rounded-2xl md:rounded-4xl'>
                        <img src={project5} alt="" />
                        <div className='mt-5'>
                            <a href="https://procus-master-react-two.vercel.app/" target="_blank" rel="noopener noreferrer" className='4'>
                                <h4 className='text-2xl md:font-bold font-normal mb-2.5 md:text-4xl underline hover:text-[#cf1f1f] transition-all duration-500'>Frontend Project</h4>
                            </a>
                            <p className='md:text-[18px]/[115%] text-[16px]/[115%] font-normal'>This project is a responsive and visually clean frontend application developed with React.js and Tailwind CSS. It features modular components, smooth navigation, and consistent design patterns. The UI is optimized for mobile, tablet, and desktop devices, ensuring accessibility and performance while maintaining a modern look and feel.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}