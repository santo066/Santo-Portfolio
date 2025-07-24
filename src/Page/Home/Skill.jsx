import TitleLine from "../Include/TitleLine";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Flat, Heat, Nested } from '@alptugidin/react-circular-progress-bar'


export default function Skill() {
    return (
        <div className="md:pb-[100px] pb-11  md:px-0 px-[20px]">
            <div className="container-sm">
                <h2 className="text-center text-[38px] font-bold text-white">My Skill</h2>
                <TitleLine></TitleLine>
                <p className="max-w-[800px] text-center mx-auto">I am a website designer and developer from Dhaka, with a strong focus in Full Stack developer. I love to get new experiences and always learn from my surroundings. You can check it through portfolio section on this website. I looking forward to any opportunities and challenges.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-items-center mt-10 gap-x-[20px] gap-y-[50px]">
                    <div className="bg-[#4e4e4e] sm:h-[170px] h-[140px] sm:w-[170px] w-[140px] rounded-full flex items-center justify-center">
                        <div
                            className="radial-progress text-[#cf1f1f] relative z-0"
                            style={{ "--value": "60", "--size": "100%", "--thickness": "10px" }}
                            aria-valuenow={70} role="progressbar"
                        >
                            <div className="bg-[#171a1d] sm:h-[152px] p-2 sm:p-0 h-[122px] sm:w-[152px] w-[122px] rounded-full flex flex-col items-center justify-center gap-2 relative z-10">
                                <span className="block text-center text-white sm:text-[18px]/[100%] text-[16px]/[100%]">javascript react</span>
                                <span className="block text-center text-white sm:text-2xl text-[18px] font-bold"> 70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4e4e4e] sm:h-[170px] h-[140px] sm:w-[170px] w-[140px] rounded-full flex items-center justify-center">
                        <div
                            className="radial-progress text-[#cf1f1f] relative z-0"
                            style={{ "--value": "60", "--size": "100%", "--thickness": "10px" }}
                            aria-valuenow={70} role="progressbar"
                        >
                            <div className="bg-[#171a1d] sm:h-[152px] p-2 sm:p-0 h-[122px] sm:w-[152px] w-[122px] rounded-full flex flex-col items-center justify-center gap-2 relative z-10">
                                <span className="block text-center text-white sm:text-[18px]/[100%] text-[16px]/[100%]">javascript react</span>
                                <span className="block text-center text-white sm:text-2xl text-[18px] font-bold"> 70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4e4e4e] sm:h-[170px] h-[140px] sm:w-[170px] w-[140px] rounded-full flex items-center justify-center">
                        <div
                            className="radial-progress text-[#cf1f1f] relative z-0"
                            style={{ "--value": "60", "--size": "100%", "--thickness": "10px" }}
                            aria-valuenow={70} role="progressbar"
                        >
                            <div className="bg-[#171a1d] sm:h-[152px] p-2 sm:p-0 h-[122px] sm:w-[152px] w-[122px] rounded-full flex flex-col items-center justify-center gap-2 relative z-10">
                                <span className="block text-center text-white sm:text-[18px]/[100%] text-[16px]/[100%]">javascript react</span>
                                <span className="block text-center text-white sm:text-2xl text-[18px] font-bold"> 70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4e4e4e] sm:h-[170px] h-[140px] sm:w-[170px] w-[140px] rounded-full flex items-center justify-center">
                        <div
                            className="radial-progress text-[#cf1f1f] relative z-0"
                            style={{ "--value": "60", "--size": "100%", "--thickness": "10px" }}
                            aria-valuenow={70} role="progressbar"
                        >
                            <div className="bg-[#171a1d] sm:h-[152px] p-2 sm:p-0 h-[122px] sm:w-[152px] w-[122px] rounded-full flex flex-col items-center justify-center gap-2 relative z-10">
                                <span className="block text-center text-white sm:text-[18px]/[100%] text-[16px]/[100%]">javascript react</span>
                                <span className="block text-center text-white sm:text-2xl text-[18px] font-bold"> 70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4e4e4e] sm:h-[170px] h-[140px] sm:w-[170px] w-[140px] rounded-full flex items-center justify-center">
                        <div
                            className="radial-progress text-[#cf1f1f] relative z-0"
                            style={{ "--value": "60", "--size": "100%", "--thickness": "10px" }}
                            aria-valuenow={70} role="progressbar"
                        >
                            <div className="bg-[#171a1d] sm:h-[152px] p-2 sm:p-0 h-[122px] sm:w-[152px] w-[122px] rounded-full flex flex-col items-center justify-center gap-2 relative z-10">
                                <span className="block text-center text-white sm:text-[18px]/[100%] text-[16px]/[100%]">javascript react</span>
                                <span className="block text-center text-white sm:text-2xl text-[18px] font-bold"> 70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4e4e4e] sm:h-[170px] h-[140px] sm:w-[170px] w-[140px] rounded-full flex items-center justify-center">
                        <div
                            className="radial-progress text-[#cf1f1f] relative z-0"
                            style={{ "--value": "60", "--size": "100%", "--thickness": "10px" }}
                            aria-valuenow={70} role="progressbar"
                        >
                            <div className="bg-[#171a1d] sm:h-[152px] p-2 sm:p-0 h-[122px] sm:w-[152px] w-[122px] rounded-full flex flex-col items-center justify-center gap-2 relative z-10">
                                <span className="block text-center text-white sm:text-[18px]/[100%] text-[16px]/[100%]">javascript react</span>
                                <span className="block text-center text-white sm:text-2xl text-[18px] font-bold"> 70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4e4e4e] sm:h-[170px] h-[140px] sm:w-[170px] w-[140px] rounded-full flex items-center justify-center">
                        <div
                            className="radial-progress text-[#cf1f1f] relative z-0"
                            style={{ "--value": "60", "--size": "100%", "--thickness": "10px" }}
                            aria-valuenow={70} role="progressbar"
                        >
                            <div className="bg-[#171a1d] sm:h-[152px] p-2 sm:p-0 h-[122px] sm:w-[152px] w-[122px] rounded-full flex flex-col items-center justify-center gap-2 relative z-10">
                                <span className="block text-center text-white sm:text-[18px]/[100%] text-[16px]/[100%]">javascript react</span>
                                <span className="block text-center text-white sm:text-2xl text-[18px] font-bold"> 70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4e4e4e] sm:h-[170px] h-[140px] sm:w-[170px] w-[140px] rounded-full flex items-center justify-center">
                        <div
                            className="radial-progress text-[#cf1f1f] relative z-0"
                            style={{ "--value": "60", "--size": "100%", "--thickness": "10px" }}
                            aria-valuenow={70} role="progressbar"
                        >
                            <div className="bg-[#171a1d] sm:h-[152px] p-2 sm:p-0 h-[122px] sm:w-[152px] w-[122px] rounded-full flex flex-col items-center justify-center gap-2 relative z-10">
                                <span className="block text-center text-white sm:text-[18px]/[100%] text-[16px]/[100%]">javascript react</span>
                                <span className="block text-center text-white sm:text-2xl text-[18px] font-bold"> 70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4e4e4e] sm:h-[170px] h-[140px] sm:w-[170px] w-[140px] rounded-full flex items-center justify-center">
                        <div
                            className="radial-progress text-[#cf1f1f] relative z-0"
                            style={{ "--value": "60", "--size": "100%", "--thickness": "10px" }}
                            aria-valuenow={70} role="progressbar"
                        >
                            <div className="bg-[#171a1d] sm:h-[152px] p-2 sm:p-0 h-[122px] sm:w-[152px] w-[122px] rounded-full flex flex-col items-center justify-center gap-2 relative z-10">
                                <span className="block text-center text-white sm:text-[18px]/[100%] text-[16px]/[100%]">javascript react</span>
                                <span className="block text-center text-white sm:text-2xl text-[18px] font-bold"> 70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4e4e4e] sm:h-[170px] h-[140px] sm:w-[170px] w-[140px] rounded-full flex items-center justify-center">
                        <div
                            className="radial-progress text-[#cf1f1f] relative z-0"
                            style={{ "--value": "60", "--size": "100%", "--thickness": "10px" }}
                            aria-valuenow={70} role="progressbar"
                        >
                            <div className="bg-[#171a1d] sm:h-[152px] p-2 sm:p-0 h-[122px] sm:w-[152px] w-[122px] rounded-full flex flex-col items-center justify-center gap-2 relative z-10">
                                <span className="block text-center text-white sm:text-[18px]/[100%] text-[16px]/[100%]">javascript react</span>
                                <span className="block text-center text-white sm:text-2xl text-[18px] font-bold"> 70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4e4e4e] sm:h-[170px] h-[140px] sm:w-[170px] w-[140px] rounded-full flex items-center justify-center">
                        <div
                            className="radial-progress text-[#cf1f1f] relative z-0"
                            style={{ "--value": "60", "--size": "100%", "--thickness": "10px" }}
                            aria-valuenow={70} role="progressbar"
                        >
                            <div className="bg-[#171a1d] sm:h-[152px] p-2 sm:p-0 h-[122px] sm:w-[152px] w-[122px] rounded-full flex flex-col items-center justify-center gap-2 relative z-10">
                                <span className="block text-center text-white sm:text-[18px]/[100%] text-[16px]/[100%]">javascript react</span>
                                <span className="block text-center text-white sm:text-2xl text-[18px] font-bold"> 70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4e4e4e] sm:h-[170px] h-[140px] sm:w-[170px] w-[140px] rounded-full flex items-center justify-center">
                        <div
                            className="radial-progress text-[#cf1f1f] relative z-0"
                            style={{ "--value": "60", "--size": "100%", "--thickness": "10px" }}
                            aria-valuenow={70} role="progressbar"
                        >
                            <div className="bg-[#171a1d] sm:h-[152px] p-2 sm:p-0 h-[122px] sm:w-[152px] w-[122px] rounded-full flex flex-col items-center justify-center gap-2 relative z-10">
                                <span className="block text-center text-white sm:text-[18px]/[100%] text-[16px]/[100%]">javascript react</span>
                                <span className="block text-center text-white sm:text-2xl text-[18px] font-bold"> 70%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}