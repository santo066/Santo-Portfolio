import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




export default function Footer() {
    return (
        <div className="py-[20px] border-y border-[#aaaaaa]">
            <div className="container-sm">
                <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
                    <Link className="text-[#aaaaaa]">© Copyright 2025 - Santo by Designesia</Link>
                    <div className="flex gap-4">
                        <Link className="w-[40px] h-[40px] flex items-center justify-center hover:bg-white rounded-full hover:text-[#171a1d] transition ease-in">
                            <FaFacebookF/>
                        </Link>
                        <Link to={'https://www.linkedin.com/in/santo-mitro-6a63722a0/'} className="w-[40px] h-[40px] flex items-center justify-center hover:bg-white rounded-full hover:text-[#171a1d] transition ease-in">
                            <FaLinkedinIn/>
                        </Link>
                        <Link to={'https://github.com/santo066'} className="w-[40px] h-[40px] flex items-center justify-center hover:bg-white rounded-full hover:text-[#171a1d] transition ease-in">
                            <FaGithub/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}