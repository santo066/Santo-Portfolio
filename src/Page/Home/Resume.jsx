import TitleLine from "../Include/TitleLine";

export default function Resume() {
    return (
        <div className="py-[100px] px-[20px] sm:px-[30px] lg:px-0">
            <div className="container-sm">
                <h2 className="text-center text-[38px] font-bold">What I Do</h2>
                <TitleLine></TitleLine>

                <div className="flex md:flex-row flex-col gap-12 items-start justify-between">
                    <div className="md:max-w-[50%] w-full">
                        <div className="max-w-[100%] border-l border-[#aaaaaa] md:pl-10 pl-5 relative pt-[60px] pb-10">
                            <div className="flex items-center rounded-l-4xl top-0 absolute left-[-20px] bg-linear-60 from-[#5f5e5e] to-transparent gap-2 pr-[40px]">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#cf1f1f] flex items-center justify-center"><span>1</span></div>
                                <div><span>2023 (1st january - 30th august)</span></div>
                            </div>
                            <h4 className="mb-2 font-bold text-2xl/[100%]">Fullstack Web Development</h4>
                            <span className="text-[#cf1f1f] ">Programming Hero</span>
                            <p className="mt-4 text-[18px]/[150%] text-[#aaaaaa]">From here I learned front end development, back end development html5, css3, react js, javascript, node js, mongodb, tailwindcss, bootstrap, AWS, RESTful API, express js, axios, firebase, JWT, git, google scarching</p>
                        </div>
                        <div className="max-w-[100%] border-l border-[#aaaaaa] md:pl-10 pl-5 relative pt-[60px] pb-10">
                            <div className="flex items-center rounded-l-4xl top-0 absolute left-[-20px] bg-linear-60 from-[#5f5e5e] to-transparent gap-2 pr-[40px]">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#cf1f1f] flex items-center justify-center"><span>2</span></div>
                                <div><span>2022 (1st July - 30th December)</span></div>
                            </div>
                            <h4 className="mb-2 font-bold text-2xl/[100%]">PHP With Laravel Framework</h4>
                            <span className="text-[#cf1f1f] ">Bangladesh Institute of Information Technology and Management</span>
                            <p className="mt-4 text-[18px]/[150%] text-[#aaaaaa]">From here I learned front end development, back end development html5, css3, PHP, Laravel Framework, bootstrap, google scarching, etc</p>
                        </div>
                        <div className="max-w-[100%] border-l border-[#aaaaaa] md:pl-10 pl-5 relative pt-[60px] pb-10">
                            <div className="flex items-center rounded-l-4xl top-0 absolute left-[-20px] bg-linear-60 from-[#5f5e5e] to-transparent gap-2 pr-[40px]">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#cf1f1f] flex items-center justify-center"><span>3</span></div>
                                <div><span>2022 (1st january - 30th june)</span></div>
                            </div>
                            <h4 className="mb-2 font-bold text-2xl/[100%]">Graphic Design</h4>
                            <span className="text-[#cf1f1f] ">Creative it institute</span>
                            <p className="mt-4 text-[18px]/[150%] text-[#aaaaaa]">From here I learned adobe photoshop, adobe illustrator,figma design,UI-UX etc</p>
                        </div>
                    </div>
                    <div className="md:max-w-[50%] w-full">
                        <div className="max-w-[100%] border-l border-[#aaaaaa] md:pl-10 pl-5 relative pt-[60px] pb-10">
                            <div className="flex items-center rounded-l-4xl top-0 absolute left-[-20px] bg-linear-60 from-[#5f5e5e] to-transparent gap-2 pr-[40px]">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#cf1f1f] flex items-center justify-center"><span>1</span></div>
                                <div><span>2023 - now</span></div>
                            </div>
                            <h4 className="mb-2 font-bold text-2xl/[100%]">BSC in CSE (Running)</h4>
                            <span className="text-[#cf1f1f] ">Bangladesh University of Business and Technology</span>
                            <p className="mt-4 text-[18px]/[150%] text-[#aaaaaa] hidden">From here I learned front end development, back end development html5, css3, react js, javascript, node js, mongodb, tailwindcss, bootstrap, AWS, RESTful API, express js, axios, firebase, JWT, git, google scarching</p>
                        </div>
                        <div className="max-w-[100%] border-l border-[#aaaaaa] md:pl-10 pl-5 relative pt-[60px] pb-10">
                            <div className="flex items-center rounded-l-4xl top-0 absolute left-[-20px] bg-linear-60 from-[#5f5e5e] to-transparent gap-2 pr-[40px]">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#cf1f1f] flex items-center justify-center"><span>2</span></div>
                                <div><span>2018 - 2022</span></div>
                            </div>
                            <h4 className="mb-2 font-bold text-2xl/[100%]">Diploma in Computer Science (cgpa:3.81)</h4>
                            <span className="text-[#cf1f1f] ">Grassroot college of technology</span>
                            <p className="mt-4 text-[18px]/[150%] text-[#aaaaaa] hidden">From here I learned front end development, back end development html5, css3, PHP, Laravel Framework, bootstrap, google scarching, etc</p>
                        </div>
                        <div className="max-w-[100%] border-l border-[#aaaaaa] md:pl-10 pl-5 relative pt-[60px] pb-10">
                            <div className="flex items-center rounded-l-4xl top-0 absolute left-[-20px] bg-linear-60 from-[#5f5e5e] to-transparent gap-2 pr-[40px]">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#cf1f1f] flex items-center justify-center"><span>3</span></div>
                                <div><span>2012 - 2018</span></div>
                            </div>
                            <h4 className="mb-2 font-bold text-2xl/[100%]">SSC in science (cgpa:3.93)</h4>
                            <span className="text-[#cf1f1f] ">Kanaipur High School</span>
                            <p className="mt-4 text-[18px]/[150%] text-[#aaaaaa] hidden">From here I learned adobe photoshop, adobe illustrator,figma design,UI-UX etc</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}