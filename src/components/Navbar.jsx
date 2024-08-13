﻿import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => (
        setNav(!nav)
    )

    return (
        <div
            className="fixed top-0 z-10 bg-[#20242d] text-gray-400 h-[100px] w-full mx-auto flex justify-between items-center">

            <h1 className="text-2xl text-slate-100  lg:text-3xl font-bold primary-color ml-4 xl:ml-40">Ahmed K</h1>

            <ul className="hidden md:flex">

                <li className="p-2 lg:p-5"><a 
                    className="relative hover:text-gray-200 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    href="#home">Home</a></li>
                <li className="p-2 lg:p-5"><a
                    className="relative hover:text-gray-200 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    href="#about">About</a></li>
                <li className="p-2 lg:p-5"><a
                    className="relative hover:text-gray-200 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    href="#work">Work</a></li>
                <li className="p-2 lg:p-5"><a 
                    className="relative hover:text-gray-200 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" 
                    href="#experience">Experience</a></li>
                <li className="p-2 lg:p-5 pr-0 mr-4 xl:mr-40"><a 
                    className="relative hover:text-gray-200 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    href="#contact">Contact</a></li>
            </ul>

            <div onClick={handleNav} className="block mr-4 md:hidden">
                {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            </div>

            {/*Navbar for mobile screens*/}
            <div className={nav ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
                : "fixed left-[-100%]"}>
                <h1 className="text-2xl primary-color m-4">Ahmed K</h1>
                <ul className="pl-4 text-xl">
                    <li onClick={handleNav} className="p-2"><a className="
                    relative text-xl w-fit block after:block 
                    after:content-[''] after:absolute after:h-[3px] 
                    after:bg-black after:w-full 
                    after:scale-x-0 after:hover:scale-x-100 
                    after:transition after:duration-300 after:origin-center" href="#home">Home</a></li>
                    <li onClick={handleNav} className="p-2"><a href="#about">About</a></li>
                    <li onClick={handleNav} className="p-2"><a href="#work">Work</a></li>
                    <li onClick={handleNav} className="p-2"><a href="#experience">Experience</a></li>
                    <li onClick={handleNav} className="p-2"><a href="#contact">Contact</a></li>
                </ul>
                
            </div>


        </div>
    );
}