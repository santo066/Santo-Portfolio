import { Link } from "react-router-dom"
import logo from "../../assets/logo.png";

export default function Header() {
    const navLink = <>
        {/* <li className="group">
            <Link className="flex flex-col gap-0 overflow-hidden p-0 m-0" to={"#about_section"}>
                <span>About Me</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </Link>
        </li> */}
        <li className="group cursor-pointer">
            <button
                onClick={() => {
                    document
                        .getElementById("about_section")
                        ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex flex-col gap-0 overflow-hidden p-0 m-0"
            >
                <span>About Me</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </button>
        </li>
        <li className="group cursor-pointer">
            <button
                onClick={() => {
                    document
                        .getElementById("what_i_do")
                        ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex flex-col gap-0 overflow-hidden p-0 m-0"
            >
                <span>What I Do</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </button>
        </li>
        <li className="group cursor-pointer">
            <button
                onClick={() => {
                    document
                        .getElementById("experience_section")
                        ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex flex-col gap-0 overflow-hidden p-0 m-0"
            >
                <span>Experience</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </button>
        </li>
        <li className="group cursor-pointer">
            <button
                onClick={() => {
                    document
                        .getElementById("my_skill_section")
                        ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex flex-col gap-0 overflow-hidden p-0 m-0"
            >
                <span>My Skill</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </button>
        </li>
        <li className="group cursor-pointer">
            <button
                onClick={() => {
                    document
                        .getElementById("projects_section")
                        ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex flex-col gap-0 overflow-hidden p-0 m-0"
            >
                <span>Projects</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </button>
        </li>
        <li className="group cursor-pointer">
            <button
                onClick={() => {
                    document
                        .getElementById("resume_section")
                        ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex flex-col gap-0 overflow-hidden p-0 m-0"
            >
                <span>My Resume</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </button>
        </li>
    </>
    const navLinkMobile = <>
        <li className="group">
            <Link className="flex flex-col gap-0 overflow-hidden p-0 m-0 sm:text-2xl text-[18px]">
                <span>About Me</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </Link>
        </li>
        <li className="group">
            <Link className="flex flex-col gap-0 overflow-hidden p-0 m-0 sm:text-2xl text-[18px]">
                <span>What I Do</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </Link>
        </li>
        <li className="group">
            <Link className="flex flex-col gap-0 overflow-hidden p-0 m-0 sm:text-2xl text-[18px]">
                <span>Experience</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </Link>
        </li>
        <li className="group">
            <Link className="flex flex-col gap-0 overflow-hidden p-0 m-0 sm:text-2xl text-[18px]">
                <span>My Skill</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </Link>
        </li>
        <li className="group">
            <Link className="flex flex-col gap-0 overflow-hidden p-0 m-0 sm:text-2xl text-[18px]">
                <span>Projects</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </Link>
        </li>
        <li className="group">
            <Link className="flex flex-col gap-0 overflow-hidden p-0 m-0 sm:text-2xl text-[18px]">
                <span>My Resume</span>
                <div className="w-full h-[2px] bg-white translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-0"></div>
            </Link>
        </li>
    </>
    return (
        <div className="bg-transparent w-full">
            <div className="navbar container-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#171a1d] flex flex-col items-start gap-3 z-1 w-[100vw] h-[100vh] mt-3 pl-4 pt-7">
                            {
                                navLinkMobile
                            }
                        </ul>
                    </div>
                    <Link className="cursor-pointer"><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-[20px]">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="#contact_section" className="py-2.5 px-5 border rounded hover:bg-white duration-700 hover:text-black">Contact Me</a>
                </div>
            </div>
        </div>
    )
}