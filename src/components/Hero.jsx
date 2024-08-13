import React from 'react'
import profilepic from "../assets/profilepic5.png"
import {AiFillLinkedin, AiFillGithub, AiFillMail} from "react-icons/ai";
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
    return (
        <div id="home" className="h-3/4 md:h-[100vh]">
            <div className="my-7 sm:my-0 max-w-[1400px] h-[80vh] mx-auto 
            flex flex-col-reverse sm:flex-row
            justify-center align-center">
                
                {/*flex for the text*/}
                <div className="flex-col w-vw my-auto mx-auto px-2 lg:pl-0">
                    
                    <p className="md:text-4xl lg:text-5xl sm:text-4xl text-lg font-bold text-gray-200">
                        Hi! I am Ahmed Kehinde
                    </p>
                    
                    <div className="md:h-[240px] xl:h-auto w-[340px] md:w-auto">
                        <h1 className="lg:text-7xl md:text-6xl sm:text-6xl text-2xl font-bold md:py-6">
                            {/*Loops through the titles forever*/}
                            <TypeAnimation 
                                sequence={[
                                    "Consultant",
                                    1000,
                                    "Web Designer",
                                    1000,
                                    "Full Stack Dev",
                                    1000,
                                    
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={1}
                            />
                        </h1>
                    </div>
                    
                    <div className="sm:flex sm:justify-center sm:items-center">
                        <p className="md:text-5xl sm:text-4xl text-md font-bold text-gray-500"> 
                            With 2 years of experience
                        </p>
                    </div>
                    
                    {/*Links to github, linkedin and email*/}
                    {/*Changes icon size for mobile screens*/}
                    <div className="text-5xl flex flex-row justify-around md:justify-start md:gap-10 md:my-7 text-purple-600">
                        <AiFillGithub size={50} className="md:hidden"/>
                        <AiFillLinkedin size={50} className="md:hidden"/>
                        <AiFillMail size={50} className="md:hidden"/>
                    </div>
                    <div className="text-5xl flex flex-row justify-around md:justify-start md:gap-10 md:my-7 text-purple-600">
                        <AiFillGithub className="hidden md:block"/>
                        <AiFillLinkedin className="hidden md:block"/>
                        <AiFillMail className="hidden md:block"/>
                    </div>

                    {/*Button to CV*/}
                    <div className="w-full">
                        <div className="ml-[50px] md:ml-0  relative inline-flex group my-3">
                            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                             from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100
                            group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                
                            </div>
                            
                            <a href="/" title="Download CV" role="button"
                               className="w-[240px] md:w-[280px] h-[50px] md:h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-sm md:text-lg
                               font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                Download CV
                            </a>
                        </div>
                    </div>
                    
                </div>
                
           
                
                {/*cool picture*/}
                <div className="my-auto">
                    <img className="w-[200px] sm:w-[500px] mx-auto h-auto" src={profilepic} alt="profile pic" />
                </div>
                
            </div>
        </div>
    )
}

export default Hero