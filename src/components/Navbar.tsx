import { useState } from 'react'
import '../css/Navbar.css'
const Navbar= () =>{
    const  [toggle, setToggle] = useState(true);
    return <>
    <div className="fixed top-0 left-0 right-0 ">
        <div className="px-5 max-w-[1560px] mx-auto flex item-center justify-between pt-6 my-2">
            <div className="left flex gap-2 items-center font-bold text-white text-base">
                {/*logo*/}
                <div className="img">
                    <img src="https://i.imgur.com/ptlDXTs.png" alt="" />
                </div>
                sirlordluis
            </div>
            <div className="right flex items-center">
                <div className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${!toggle ? `right-[-100%] top-0 bottom-0` : `right-0 top-0 bottom-0`} backdrop-blur-sm bg-[#282C33]/30 md:static`}>
                    <a href="#"><li className='text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4'><span className='text-[#C778DD] font-medium'>#</span>home</li></a>
                    <a href="#"><li className='text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4'><span className='text-[#C778DD] font-medium'>#</span>blog</li></a>
                    <a href="#"><li className='text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4'><span className='text-[#C778DD] font-medium'>#</span>work</li></a>
                    <a href="#"><li className='text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4'><span className='text-[#C778DD] font-medium'>#</span>about-me</li></a>
                    <a href="#"><li className='text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4'><span className='text-[#C778DD] font-medium'>#</span>contact</li></a>
                    <div onClick={()=>setToggle(false)} className="close absolute block md:hidden right-3 top-3">
                        <img src="https://i.imgur.com/veezZ7o.png" alt="" />
                    </div>
                </div>
                {/*CLOSE&OPEN btns*/}
                <div onClick={()=>setToggle(true)}className="">
                    <div className="open block md:hidden w-8">
                        <div className="w-full h-[1px] my-2 rounded-r-3x1 bg-[#D9D9D9]"></div>
                        <div className="w-full h-[1px] my-2 rounded-r-3x1 bg-[#D9D9D9]"></div>
                        <div className="w-full h-[1px] my-2 rounded-r-3x1 bg-[#D9D9D9]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Navbar