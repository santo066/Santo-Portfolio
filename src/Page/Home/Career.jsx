import { FaLaptopCode } from "react-icons/fa6";
import bg_img from "../../assets/imgi_4_2.jpg"
import TitleLine from "../Include/TitleLine";



export default function Career() {
    return (
        <div className="md:py-[100px] py-[60px] bg-center bg-cover bg-fixed relative"
            style={{ backgroundImage: `url(${bg_img})` }}
        >
            <div className="h-[70px] w-[100%] absolute top-0 left-0 bg-linear-to-t from-transparent to-[#171a1d]"></div>
            <div className="h-[70px] w-[100%] absolute bottom-0 left-0 bg-linear-to-t from-[#171a1d] to-transparent"></div>
            <div className="container-sm lg:px-0 px-5">
                <h2 className="text-center md:text-[48px]/[100%] text-[38px]/[100%] font-bold capitalize text-[#7a7878]">Career Objective</h2>
                <TitleLine></TitleLine>
                <FaLaptopCode className="text-[#cf1f1f] md:text-7xl text-5xl my-5" />
                <p className="md:text-[32px]/[130%] text-[24px]/[120%]">As a junior full-stack developer, my aim is to apply my strong skills in React, JavaScript, HTML5, CSS, Bootstrap, and Laravel to contribute significantly to an organization's success. I have a track record of excelling in challenging projects and am dedicated to continuous learning and delivering high-quality code. My enthusiasm for adopting emerging technologies, along with my collaborative nature, is geared towards creating user-friendly web solutions. My career objective revolves around driving innovation, refining my skills, and fostering team growth</p>
            </div>
        </div>
    )
}