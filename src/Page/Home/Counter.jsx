import bg_img from "../../assets/imgi_11_3.jpg"

export default function Counter() {
    return (
        <div className="py-[100px] bg-center bg-fixed relative bg-cover"
            style={{ backgroundImage: `url(${bg_img})` }}
        >
            <div className="h-full w-full absolute left-0 right-0 top-0 bottom-0 bg-[#00000010] z-0"></div>
            <div className="h-[70px] w-[100%] absolute top-0 left-0 bg-linear-to-t from-transparent to-[#171a1d]"></div>
            <div className="h-[70px] w-[100%] absolute bottom-0 left-0 bg-linear-to-t from-[#171a1d] to-transparent"></div>

            <div className="container-sm mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between gap-6 md:px-[40px]">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="text-4xl font-bold">8240</h2>
                        <span className="text-[14px] uppercase text-[#aaaaaa] font-semibold">Hours of Works</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="text-4xl font-bold">30</h2>
                        <span className="text-[14px] uppercase text-[#aaaaaa] font-semibold">Projects Done</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="text-4xl font-bold">7</h2>
                        <span className="text-[14px] uppercase text-[#aaaaaa] font-semibold">Tools</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="text-4xl font-bold">25</h2>
                        <span className="text-[14px] uppercase text-[#aaaaaa] font-semibold">Total skill</span>
                    </div>
                </div>
            </div>
        </div>
    )
}