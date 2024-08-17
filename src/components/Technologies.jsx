import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiCplusplus, SiCsharp} from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

const Technlogies = () => {
    return (
        <div className={"flex flex-col items-center justify-center w-full pb-12 md:pb-24"}>
            
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
            <div className="grid grid-cols-2 md:flex md:flex-row md:w-9/12 gap-2 md:gap-4 lg:mt-4 w-full px-2 flex-wrap items-center justify-center mt-1 technologycards">
                {/*<div*/}
                {/*    className="animate-float techcard bg-[#232325] p-4 transition ease-in-out delay-75 hover:scale-125 hover:shadow-2xl">*/}
                {/*    <RiReactjsLine className={"text-7xl text-white"}/>*/}
                {/*</div>*/}
                <div className="animate-float delay-0  relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r
                             from-[#FF4B2B] to-[#6689A1] via-[#FF416C] rounded-xl blur-lg group-hover:opacity-100
                            group-hover:-inset-1 group-hover:duration-200 animate-tilt">

                    </div>

                    <div title="" role=""
                       className="w-full md:w-[158px] h-full relative inline-flex items-center justify-center px-8 py-4 text-sm md:text-lg
                               font-bold text-white transition-all duration-200 bg-[#232325] font-pj rounded-xl techcard
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <div className={"hover:scale-125"}>

                            <RiReactjsLine className={"text-7xl icon text-white hover:scale-125"} size={100}/>
                        </div>
                    </div>
                </div>
                <div className="animate-float delay-100  relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r
                             from-[#FF4B2B] to-[#6689A1] via-[#FF416C] rounded-xl blur-lg group-hover:opacity-100
                            group-hover:-inset-1 group-hover:duration-200 animate-tilt">

                    </div>

                    <div title="" role=""
                       className="w-full md:w-[158px] h-full relative inline-flex items-center justify-center px-8 py-4 text-sm md:text-lg
                               font-bold text-white transition-all duration-200 bg-[#232325] font-pj rounded-xl techcard
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <div className={"hover:scale-125"}>

                            <RiTailwindCssFill className={"text-7xl icon text-white hover:scale-125"} size={100}/>
                        </div>
                    </div>
                </div>

                <div className="animate-float xl:animate-nofloat  delay-200  relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r
                             from-[#FF4B2B] to-[#6689A1] via-[#FF416C] rounded-xl blur-lg group-hover:opacity-100
                            group-hover:-inset-1 group-hover:duration-200 animate-tilt">

                    </div>

                    <div title="" role=""
                       className="w-full md:w-[158px] h-full relative inline-flex items-center justify-center px-8 py-4 text-sm md:text-lg
                               font-bold text-white transition-all duration-200 bg-[#232325] font-pj rounded-xl techcard
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <div className={"hover:scale-125"}>

                            <BiLogoPostgresql className={"text-7xl icon text-white hover:scale-125"} size={100}/>
                        </div>
                    </div>
                </div>

                <div className="animate-float delay-300  relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r
                             from-[#FF4B2B] to-[#6689A1] via-[#FF416C] rounded-xl blur-lg group-hover:opacity-100
                            group-hover:-inset-1 group-hover:duration-200 animate-tilt">

                    </div>

                    <div title="" role=""
                       className="w-full md:w-[158px] h-full relative inline-flex items-center justify-center px-8 py-4 text-sm md:text-lg
                               font-bold text-white transition-all duration-200 bg-[#232325] font-pj rounded-xl techcard
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <div className={"hover:scale-125"}>

                            <IoLogoJavascript className={"text-7xl icon text-white hover:scale-125"} size={100}/>
                        </div>
                    </div>
                </div>
                <div className="animate-float delay-400  relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r
                             from-[#FF4B2B] to-[#6689A1] via-[#FF416C] rounded-xl blur-lg group-hover:opacity-100
                            group-hover:-inset-1 group-hover:duration-200 animate-tilt">

                    </div>

                    <div title="" role=""
                       className="w-full md:w-[158px] h-full relative inline-flex items-center justify-center px-8 py-4 text-sm md:text-lg
                               font-bold text-white transition-all duration-200 bg-[#232325] font-pj rounded-xl techcard
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <div className={"hover:scale-125"}>

                            <SiCsharp className={"text-7xl icon text-white hover:scale-125"} size={100}/>
                        </div>
                    </div>
                </div>
                <div className="animate-float delay-500  relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r
                             from-[#FF4B2B] to-[#6689A1] via-[#FF416C] rounded-xl blur-lg group-hover:opacity-100
                            group-hover:-inset-1 group-hover:duration-200 animate-tilt">

                    </div>

                    <div title="" role=""
                       className="w-full md:w-[158px] h-full relative inline-flex items-center justify-center px-8 py-4 text-sm md:text-lg
                               font-bold text-white transition-all duration-200 bg-[#232325] font-pj rounded-xl techcard
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <div className={"hover:scale-125"}>

                            <SiCplusplus className={"text-7xl icon text-white hover:scale-125"} size={100}/>
                        </div>
                    </div>
                </div>

                {/*<div className="animate-float delay-100 techcard bg-[#232325] p-4 ">*/}
                {/*    <RiTailwindCssFill className={"text-7xl text-white"}/>*/}
                {/*</div>*/}
                {/*<div className="animate-float delay-200 techcard bg-[#232325] p-4">*/}
                {/*    <BiLogoPostgresql className={"text-7xl text-white"}/>*/}
                {/*</div>*/}
                {/*<div className="animate-float delay-300 techcard bg-[#232325] p-4">*/}
                {/*    <SiCsharp className={"text-7xl text-white"}/>*/}
                {/*</div>*/}
                {/*<div className="animate-float delay-400 techcard bg-[#232325] p-4">*/}
                {/*    <SiCplusplus className={"text-7xl text-white"}/>*/}
                {/*</div>*/}
                {/*<div className="animate-float delay-500 techcard bg-[#232325] p-4">*/}
                {/*    <IoLogoJavascript className={"text-7xl text-white"}/>*/}
                {/*</div>*/}
            </div>


        </div>
    )
}
export default Technlogies