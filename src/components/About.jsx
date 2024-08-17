import React from "react"
import aboutImg from "../assets/about4.jpeg"

const About = () => {
    return (
        
            
        <div id="about" className="py-10 pb-[200px] md:pb-10 text-white h-auto bg-[#232325]" >
            <div className="flex lg:flex-row flex-col-reverse items-center
        md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
    
                {/*About image*/}
                <div>
                    <div className="w-[400px] h-full relative top-[150px] md:static">
                        <img
                            alt={"man working at his desk"}
                            src={aboutImg}
                            className="object-cover bg-gray-700 md:rounded-xl h-[300]px
                        filter brightness-50 grayscale"
                        />
                    </div>
                </div>
    
                <div>
                    {/*<div className="p-2">*/}
                    {/*    <div className="text-gray-300 my-3">*/}
                    {/*        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">*/}
                    {/*            About <span> </span>*/}
                    {/*            <span className="primary-text">*/}
                    {/*                 Me*/}
                    {/*            </span>*/}
                    {/*        </h3>*/}
                    {/*        <p className="text-justify leading-7 w-11/12 mx-auto">*/}
                    {/*            I am a passionate full-stack web developer with 2 years of experience, specializing in*/}
                    {/*            .NET and React. My journey in software development has allowed me to build dynamic,*/}
                    {/*            responsive, and efficient web applications that deliver exceptional user experiences. I*/}
                    {/*            thrive on solving complex problems and have a strong foundation in both front-end and*/}
                    {/*            back-end development.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="lg:p-2">
                        <div className="lg:my-3">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-5">
                                About
                                <span> </span>
                                <span
                                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold primary-text">
                                <b>
                                    Me
                                </b>
                            </span>
                            </h3>
                            <article
                                className="prose dark:prose-invert prose-sm md:prose-base lg:prose-lg prose-stone">
                                <p className="hidden md:block">
                                    I am a passionate full-stack web developer with 2 years of experience,
                                    specializing
                                    in
                                    .NET and React. My journey in software development has allowed me to build
                                    dynamic,
                                    responsive, and efficient web applications that deliver exceptional user
                                    experiences. I
                                    thrive on solving complex problems and have a strong foundation in both
                                    front-end
                                    and
                                    back-end development.
                                </p>
                                <p className="md:hidden">
                                    I am a passionate full-stack web developer with 2 years of experience,
                                    specializing
                                    in
                                    .NET and React.
                                </p>
                            </article>
                        </div>
                    </div>
    
                    <div className="flex flex-col sm:flex-row mt-5 sm:mt-10 items-center gap-2 md:gap-5 h-[180px]  xl:h-[120px]">
    
                        {/*Number of projects*/}
                        <div className="bg-[#333333]/40 p-3 rounded-lg w-full h-full">
                            <div className="w-full flex flex-col items-center sm:hidden">
    
                                <h3 className="md:text-3xl lg:text-4xl text-xl font-semibold text-white">
                                    5
                                    <span>+</span>
                                </h3>
                                <p><span className="md:text-base text-xs">Projects</span></p>
                            </div>
                            <div className="w-full h-full hidden sm:block">
    
                                <h3 className="md:text-3xl lg:text-4xl text-xl font-semibold text-white">
                                    5
                                    <span>+</span>
                                </h3>
                                <p><span className="md:text-base text-xs">Projects</span></p>
                            </div>
                        </div>
    
    
                        {/*Years of experience*/}
                        <div className="bg-[#333333]/40 p-3 rounded-lg w-full h-full">
                            <div className="w-full flex flex-col items-center sm:hidden">
    
                                <h3 className="md:text-3xl lg:text-4xl text-xl font-semibold text-white">
                                    2
                                    <span>+</span>
                                </h3>
                                <p><span className="md:text-base text-xs">Years experience</span></p>
                            </div>
                            <div className="w-full hidden sm:block">
    
                                <h3 className="md:text-3xl lg:text-4xl text-xl font-semibold text-white">
                                    2
                                    <span>+</span>
                                </h3>
                                <p><span className="md:text-base text-xs">Years experience</span></p>
                            </div>
                        </div>
    
                        {/*Happy Clients*/}
                        <div className="bg-[#333333]/40 p-3 rounded-lg w-full h-full">
                            <div className="w-full flex flex-col items-center sm:hidden">
    
                                <h3 className="md:text-3xl lg:text-4xl text-xl font-semibold text-white">
                                    10
                                    <span>+</span>
                                </h3>
                                <p><span className="md:text-base text-xs">Happy clients</span></p>
                            </div>
                            <div className="w-full hidden sm:block">
    
                                <h3 className="md:text-3xl lg:text-4xl text-xl font-semibold text-white">
                                    10
                                    <span>+</span>
                                </h3>
                                <p><span className="md:text-base text-xs">Happy clients</span></p>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default About