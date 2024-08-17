import React, {useState, useEffect, useCallback} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-scroll"
export const Navbar = () => {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = useCallback(() => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // if scrolling down, hide the navbar
                setShow(false);
            } else {
                // if scrolling up, show the navbar
                setShow(true);
            }

            // remember the current page location for the next move
            setLastScrollY(window.scrollY);
        }
    }, [lastScrollY]);
    

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [controlNavbar]);
    
    const [nav, setNav] = useState(false)

    const handleNav = () => (
        setNav(!nav)
    )

    return (
        <div>
        <nav
            
            className={`hidden md:block fixed top-0 z-10 bg-[#20242d] text-gray-400 w-full mx-auto 
            transition-transform duration-300 
            transform ${show ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex justify-between items-center">
                <Link to="home" smooth={true} duration={500}>
                <span
                    className="text-2xl font-bold hover:bg-gradient-to-r 
                    hover:from-[#FF4B2B] hover:via-[#FF416C] hover:to-[#6689A1] text-transparent 
                    bg-clip-text hover:bg-300% hover:animate-gradient hover:brightness-125 transition ease-in-out
                    cursor-pointer  lg:text-3xl ml-4 xl:ml-40">
                  Ahmed K
                </span>
                </Link>
                {/*<Link to="home" smooth={true} duration={500}>*/}
                {/*    <h1 className="text-2xl text-slate-100 cursor-pointer  lg:text-3xl font-bold primary-color ml-4 xl:ml-40 hover:brightness-125 transition ease-in-out duration-500 ">Ahmed*/}
                {/*        K</h1>*/}
                {/*</Link>*/}

                <ul className="hidden md:flex">

                    <li className="p-2 lg:p-3 lg:py-4 xl:p-5"><Link to="home" smooth={true} duration={500}
                                                                    className="relative hover:text-gray-200 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                                                                   >Home</Link></li>
                    <li className="p-2 lg:p-3 lg:py-4 xl:p-5"><Link to="about" smooth={true} duration={500}
                                                                    className="relative hover:text-gray-200 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                                                                    >About</Link></li>

                    <li className="p-2 lg:p-3 lg:py-4 xl:p-5"><Link to="work" smooth={true} duration={500}
                                                                    className="relative hover:text-gray-200 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                                                                   >Work</Link></li>
                    <li className="p-2 lg:p-3 lg:py-4 xl:p-5"><Link to="experience" smooth={true} duration={500}
                                                                    className="relative hover:text-gray-200 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                                                                    >Experience</Link></li>
                    <li className="p-2 lg:p-3 lg:py-4 xl:p-5 pr-0 mr-4 xl:mr-40"><Link to="contact" smooth={true}
                                                                                       duration={500}
                                                                                       className="relative hover:text-gray-200 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                                                                                       >Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>
            <nav
                className="fixed top-0 z-10 bg-[#20242d] text-gray-400 h-[100px] w-full mx-auto flex justify-between items-center md:hidden">
                <h1 className="text-2xl text-slate-100  lg:text-3xl font-bold primary-color ml-4 xl:ml-40">Ahmed K</h1>
                <div onClick={handleNav} className="block mr-4 md:hidden">
                    {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
                </div>

                {/*Navbar for mobile screens*/}
                <div className={nav ? "z-5 fixed h-[100px] left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
                    : "fixed left-[-100%]"}>
                    <h1 className="text-2xl primary-color m-4">Ahmed K</h1>
                    <div className="h-[800px] bg-[#202121]">


                        <ul className="pl-4 text-xl bg-[#202121]">
                            <li onClick={handleNav} className="p-2"><Link to="home">
                                Home
                            </Link></li>
                            <li onClick={handleNav} className="p-2"><Link to="about" 
                                                                          >
                                About
                            </Link></li>
                            <li onClick={handleNav} className="p-2"><Link to="work">
                                Work
                            </Link></li>
                            <li onClick={handleNav} className="p-2"><Link to="experience">
                                Experience
                            </Link></li>
                            <li onClick={handleNav} className="p-2"><Link to="contact">
                                Contact
                            </Link></li>
                            
                        </ul>
                    </div>

                </div>


            </nav>
        </div>
    );
}