import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiCplusplus, SiCsharp} from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

const Technlogies = () => {
    return (
        <div className={"flex flex-col items-center justify-center w-full pb-24"}>
            
            <h3 className="text-2xl text-white md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-5">
                My
                <span> </span>
                <span
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold primary-text">
                                <b>
                                    Technologies
                                </b>
                            </span>
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                <div className="animate-float rounded-2xl border-[1px] bg-[#232325] p-4">
                    <RiReactjsLine className={"text-7xl text-white"}/>
                </div>
                <div className="animate-float delay-100 rounded-2xl border-[1px] bg-[#232325] p-4">
                    <RiTailwindCssFill className={"text-7xl text-white"}/>
                </div>
                <div className="animate-float delay-200 rounded-2xl border-[1px] bg-[#232325] p-4">
                    <BiLogoPostgresql className={"text-7xl text-white"}/>
                </div>
                <div className="animate-float delay-300 rounded-2xl border-[1px] bg-[#232325] p-4">
                    <SiCsharp className={"text-7xl text-white"}/>
                </div>
                <div className="animate-float delay-400 rounded-2xl border-[1px] bg-[#232325] p-4">
                    <SiCplusplus className={"text-7xl text-white"}/>
                </div>
                <div className="animate-float delay-500 rounded-2xl border-[1px] bg-[#232325] p-4">
                    <IoLogoJavascript className={"text-7xl text-white"}/>
                </div>
            </div>

        </div>
    )
}
export default Technlogies