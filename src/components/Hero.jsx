import React from 'react'
import profilepic from "../assets/profilepic5.png"
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
    return (
        <div>
            <div className="bg-white max-w-[1200px] h-[80vh] mx-auto 
            flex flex-col-reverse sm:flex-row
            justify-center align-center">
                
                
                <div className="text-8xl">
                    Placeholder
                </div>
                
                {/*cool picture*/}
                <div className="my-auto">
                    <img className="w-[300px] sm:w-[500px] mx-auto h-auto" src={profilepic} alt="profile pic" />
                </div>
                
            </div>
        </div>
    )
}

export default Hero