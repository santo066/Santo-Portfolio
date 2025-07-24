import TitleLine from "../Include/TitleLine";

export default function About() {
    return (
        <div className="sm:py-[100px] py-[60px] px-5 bg-[#171a1d]">
            <div className="max-w-[800px] mx-auto text-center">
                <h4 className="md:text-[32px]/[100%] text-[38px]/[100%] font-bold mb-5">About Me</h4>
                <TitleLine></TitleLine>
                <p>I am a website designer and developer from Dhaka, with a strong focus in Full Stack developer. I love to get new experiences and always learn from my surroundings. You can check it through portfolio section on this website. I looking forward to any opportunities and challenges.</p>
            </div>
        </div>
    )
}