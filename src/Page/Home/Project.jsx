import { Link } from "react-router-dom";
import TitleLine from "../Include/TitleLine";
import project1 from "../../assets/Procus-Creative-Agency.png"
import project2 from "../../assets/Vite-Apps.png"
import project3 from "../../assets/Vite-React4.png"
import project4 from "../../assets/Ftontend-Starter.png"
import project5 from "../../assets/Bistro-Boss-Home.png"
import project6 from "../../assets/Rove-Creative-Agency.png"
import ProjectSlider from "./ProjectSlider";

export default function Project() {
    return (
        <div className="py-[100px]">
            <div className="container-sm px-[20px] md:px-0">
                <h2 className="text-center text-[38px] font-bold">Projects</h2>
                <TitleLine></TitleLine>
                <ProjectSlider></ProjectSlider>
                {/* <div className="flex gap-5 lg:flex-row flex-col">
                    <div className="flex flex-col gap-5">
                        <Link className="h-[600px] overflow-hidden relative group">
                            <div className="absolute bg-[#111111b6] top-0 left-0 right-0 bottom-0 z-10 group-hover:opacity-0 opacity-100 transition-opacity duration-500"></div>
                            <img src={project1} className="h-full w-full group-hover:scale-110 transition-all duration-500 object-cover object-top" alt="project Image" />
                        </Link>
                        <Link className="h-[250px] overflow-hidden relative group">
                            <div className="absolute bg-[#111111b6] top-0 left-0 right-0 bottom-0 z-10 group-hover:opacity-0 opacity-100 transition-opacity duration-500"></div>
                            <img src={project2} className="h-full w-full group-hover:scale-110 transition-all duration-500 object-cover object-top" alt="project Image" />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Link className="h-[250px] overflow-hidden relative group">
                            <div className="absolute bg-[#111111b6] top-0 left-0 right-0 bottom-0 z-10 group-hover:opacity-0 opacity-100 transition-opacity duration-500"></div>
                            <img src={project3} className="h-full w-full group-hover:scale-110 transition-all duration-500 object-cover object-top" alt="project Image" />
                        </Link>
                        <Link className="h-[600px] overflow-hidden relative group">
                            <div className="absolute bg-[#111111b6] top-0 left-0 right-0 bottom-0 z-10 group-hover:opacity-0 opacity-100 transition-opacity duration-500"></div>
                            <img src={project5} className="h-full w-full group-hover:scale-110 transition-all duration-500 object-cover object-top" alt="project Image" />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Link className="h-[600px] overflow-hidden relative group">
                            <div className="absolute bg-[#111111b6] top-0 left-0 right-0 bottom-0 z-10 group-hover:opacity-0 opacity-100 transition-opacity duration-500"></div>
                            <img src={project6} className="h-full w-full group-hover:scale-110 transition-all duration-500 object-cover object-top" alt="project Image" />
                        </Link>
                        <Link className="h-[250px] overflow-hidden relative group">
                            <div className="absolute bg-[#111111b6] top-0 left-0 right-0 bottom-0 z-10 group-hover:opacity-0 opacity-100 transition-opacity duration-500"></div>
                            <img src={project4} className="h-full w-full group-hover:scale-110 transition-all duration-500 object-cover object-top" alt="project Image" />
                        </Link>
                    </div>
                </div> */}
            </div>
        </div>
    )
} 