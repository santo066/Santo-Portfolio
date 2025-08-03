import TitleLine from "../Include/TitleLine";

export default function Experience() {
    return (
        <div className="py-[80px] px-[20px] md:px-0">
            <div className="container-sm text-[#aaaaaa]">
                <h2 className="text-center text-[38px] font-bold text-white">Experience</h2>
                <TitleLine></TitleLine>

                {/* single expreance */}
                <div className="mb-10">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-2xl font-bold text-white">PointerFlow</h3>
                        <span className="md:text-2xl text-[16px] uppercase">JUN 2024 - DEC 2024</span>
                    </div>
                    <span className="text-[18px]">Frontend Developer</span>
                    <p className="mt-5 mb-2.5 text-[18px]">I am a highly skilled web developer with over 1 year of official experience in HTML, CSS, JavaScript, and React. I have knowledge of popular frameworks such as React, and Node and experience with REST APIs, Express Js, Node and Mongodb</p>
                    <p>Designed and developed dynamic and responsive websites using HTML, CSS, SCSS, JavaScript, Bootstrap, plugins and React Worked with REST APIs to retrieve and display data from databases I have contributed to multiple complete projects including Live Shopify theme development. My Team members in the role have a proven ability to deliver responsive and user-friendly web solutions, consistently meet project goals and client requirements, manage challenging projects, adapt to emerging technologies, and deliver high-quality results on live platforms.</p>
                </div>
                <div className="">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-2xl font-bold text-white">Softvence</h3>
                        <span className="md:text-2xl text-[16px] uppercase">DEC 2024 – PRESENT</span>
                    </div>
                    <span className="text-[18px]">Frontend Developer</span>
                    <p className="mt-5 mb-2.5 text-[18px]">Designed and developed dynamic and responsive websites using React, JavaScript, and Webflow for full-stack web development.Implemented high-quality animations using GSAP to enhance user experience and interactivity. Worked on multiple live projects, ensuring high-quality performance and user-friendly interfaces.</p>
                    <p>Built and maintained scalable web applications, integrating APIs and optimizing frontend performance.Collaborated with cross-functional teams to meet project requirements and deliver seamless web solutions.Adapted to emerging technologies, managed complex development tasks, and consistently delivered high-quality results on live platforms.</p>
                </div>
            </div>
        </div>
    )
}