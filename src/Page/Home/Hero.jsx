import hero_img from "../../assets/img-22.png";
import Header from "../Include/Header"; // ⬅ Import the component
import TypedText from "../Shared/TypedText";

export default function Hero() {
    return (
        <div className="w-[99vw] h-[100vh] bg-cover bg-center flex flex-col relative" style={{ backgroundImage: `url(${hero_img})` }}>
            <Header />
            <div className="h-[70px] w-[100%] absolute bottom-0 left-0 bg-linear-to-t from-[#171a1d] to-transparent"></div>
            <div className="container-sm px-4 md:px-0">
                <div className="lg:ml-12 2xl:ml-0">
                    <span className="md:text-[18px]/[100%] text-[16px]/[100%] text-[#cf1f1f] font-bold">I Am Santo Mitro</span>
                    
                    {/* 🔥 Insert animated typing text here */}
                    <TypedText />

                    <div className="grid grid-cols-2 gap-x-3 md:flex md:gap-5">
                        <div className="md:pl-4 pl-2 border-l border-l-[#bbbbbb] py-2 flex flex-col gap-2">
                            <span className="md:text-[18px]/[115%] sm:text-[16px]/[100%] text-[16px]/[100%] font-black block">Address</span>
                            <span className="md:text-[18px]/[115%] sm:text-[16px]/[100%] text-[14px]/[100%] block">Dhaka, nikunja 2, Khilkhet</span>
                        </div>
                        <div className="md:pl-4 pl-2 border-l border-l-[#bbbbbb] py-2 flex flex-col gap-2">
                            <span className="md:text-[18px]/[115%] sm:text-[16px]/[100%] text-[16px]/[100%] font-black block">Number</span>
                            <span className="md:text-[18px]/[115%] sm:text-[16px]/[100%] text-[14px]/[100%] block">01650129458</span>
                        </div>
                        <div className="md:pl-4 pl-2 border-l border-l-[#bbbbbb] py-2 flex flex-col gap-2">
                            <span className="md:text-[18px]/[115%] sm:text-[16px]/[100%] text-[16px]/[100%] font-black block">Email</span>
                            <span className="md:text-[18px]/[115%] sm:text-[16px]/[100%] text-[14px]/[100%] block">santo.cse.fp@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
