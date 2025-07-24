import TitleLine from "../Include/TitleLine";
import { FaReact } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";




export default function WhatIDo() {
    return (
        <div className="md:py-[100px] px-[20px] sm:px-0">
            <div className="container-sm">
                <h2 className="text-center text-[38px] font-bold">What I Do</h2>
                <TitleLine></TitleLine>
                <div className="md:flex justify-between">
                    <div className="sm:px-8 px-5 py-5 sm:py-10 border-l text-center border-l-[#8a8686]">
                        <FaReact  className="text-5xl text-[#cf1f1f]"/>
                        <h3 className="md:text-[28px] text-2xl font-bold my-5">Front End</h3>
                        <p className="text-[16px] text-[#8a8686]">I am a web developer proficient in front-end technologies such as React.js, HTML, CSS, and popular frameworks including Tailwind CSS and Bootstrap. Skilled in creating dynamic and responsive websites using a variety of plugins and libraries.</p>
                    </div>
                    <div className="sm:px-8 px-5 py-5 sm:py-10 border-l text-center border-l-[#8a8686]">
                        <FaTools  className="text-5xl text-[#cf1f1f]"/>
                        <h3 className="md:text-[28px] text-2xl font-bold my-5">Backend</h3>
                        <p className="text-[16px] text-[#8a8686]">Proficient in connecting to MongoDB databases and developing robust backend solutions with Node.js and Express.js. Specialized in building RESTful APIs to facilitate seamless communication between client and server.</p>
                    </div>
                    <div className="sm:px-8 px-5 py-5 sm:py-10 border-l text-center border-l-[#8a8686]">
                        <FaUnlockAlt  className="text-5xl text-[#cf1f1f]"/>
                        <h3 className="md:text-[28px] text-2xl font-bold my-5">authentication</h3>
                        <p className="text-[16px] text-[#8a8686]">Demonstrated expertise in implementing strong authentication systems using Firebase and generating JWT tokens with AxiosJS. Committed to staying updated with the latest trends and technologies in web development.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}