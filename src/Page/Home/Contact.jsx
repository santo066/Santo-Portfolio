import TitleLine from "../Include/TitleLine";
import bg_img from '../../assets/imgi_12_5.jpg';

export default function Contact() {
    return (
        <div className="py-[100px] bg-center bg-cover bg-fixed relative"
            style={{ backgroundImage: `url(${bg_img})` }}
        >
            <div className="h-[100px] w-[100%] absolute top-0 left-0 bg-linear-to-t from-transparent to-[#171a1d]"></div>
            <div className="h-[100px] w-[100%] absolute bottom-0 left-0 bg-linear-to-t from-[#171a1d] to-transparent"></div>
            <div className="max-w-[900px] px-[20px]  mx-auto">
                <h2 className="text-center text-[38px] font-bold text-white">Contact Me</h2>
                <TitleLine></TitleLine>
                <form action="">
                    <div className="grid md:grid-cols-3 gap-6">
                        <input className="border-[1px] text-[16px] rounded-[5px] w-full text-white border-[#aaaaaa]  py-2 ps-[15px]" type="text" name="name" placeholder="Your Name" id="" />
                        <input className="border-[1px] text-[16px] rounded-[5px] w-full text-white border-[#aaaaaa]  py-2 ps-[15px]" type="text" name="name" placeholder="Your Name" id="" />
                        <input className="border-[1px] text-[16px] rounded-[5px] w-full text-white border-[#aaaaaa]  py-2 ps-[15px]" type="text" name="name" placeholder="Your Name" id="" />
                    </div>
                    <textarea name="message" className="p-[20px] rounded-[5px] text-white text-[16px] border border-[#aaaaaa] w-full mt-[20px] h-[200px]" placeholder="Your Message" id=""></textarea>
                    <div className="flex justify-center items-center mt-[20px]">
                        <input type="button" value="Submit" className="border-[#cf1f1f] border bg-[#cf1f1f] text-[16px]/[100%]  py-[10px] px-[25px]" />
                    </div>
                </form>

                <div className="flex flex-col gap-6 md:flex-row justify-between mt-[40px]">
                    <div className="flex flex-col items-center gap-2">
                        <h5 className="text-[16px]/[100%] font-bold text-white">Email Me</h5>
                        <p className="text-[#aaaaaa]">santo.cse.fp@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h5 className="text-[16px]/[100%] font-bold text-white">Call Me</h5>
                        <p className="text-[#aaaaaa]">01905667893</p>
                        <p className="text-[#aaaaaa]">01650129458</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h5 className="text-[16px]/[100%] font-bold text-white">Email Me</h5>
                        <p className="text-[#aaaaaa] text-center">Nikunja 2, Khilkhet, Dhaka, <br /> Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    )
}