import { Link } from "react-router-dom";
import Header from "../Include/Header";
import Hero from "./Hero";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import About from "./About";
import Career from "./Career";
import WhatIDo from "./WhatIDo";
import Experience from "./Experience";
import Skill from "./Skill";
import Project from "./Project";
import Resume from "./Resume";
import Counter from "./Counter";
import Contact from "./Contact";
import Footer from "../Include/Footer";




export default function Home() {

    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Career></Career>
            <WhatIDo></WhatIDo>
            <Experience></Experience>
            <Skill></Skill>
            <Project></Project>
            <Resume></Resume>
            <Counter></Counter>
            <Contact></Contact>
            <Footer></Footer>
            <div className="fixed left-7 items-center top-[50%] flex-col gap-5 translate-y-[-50%] lg:flex hidden">
                <div className="flex flex-col gap-2">
                    <Link className="block text-[18px] text-[#cf1f1f] cursor-pointer"><FaFacebook /></Link>
                    <Link className="block text-[18px] text-[#cf1f1f] cursor-pointer"><FaLinkedin /></Link>
                    <Link className="block text-[18px] text-[#cf1f1f] cursor-pointer"><FaGithub /></Link>
                </div>
                <span className="block mt-4 rotate-[-90deg]  text-[#747474e7]">Follow Me</span>
            </div>
        </div>
    )
}