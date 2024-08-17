import React from "react";


const Contact = () => {
    return (
        <div id="contact" className="flex justify-center py-10 h-full sm:h-[70vh]
        items-center">
            <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-0">

                        <div className="p-6 mx-4 bg-gray-800 border border-gray-700 rounded-xl flex flex-col
                          justify-around h-[450px]">

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
                                Contact <span>Me</span>
                            </h1>
                            <p className="text-normal text-lg text-gray-400 mt-2">
                                Let&apos;s connect on <div className="underline text-[#FF4B2B] hover:text-[#ff674d] inline">
                                <a target="_blank" rel="noreferrer" href="https://uk.linkedin.com/in/ahmedkehinde?trk=people-guest_people_search-card">
                                    LinkedIn
                                </a>
                            </div>

                            </p>
                            <hr/>

                            <p className="text-normal text-lg text-gray-400 mt-2">
                                or send me a message
                            </p>
                            {/*<span className={"hidden md:block"}>→</span> <span className={"md:hidden"}>↓</span>*/}
                            {/*<AiFillCaretRight size={50} className=""/>*/}


                            <div className="flex items-center mt-2 text-gray-400">
                                {/*<div className="ml-4 text-md tracking-wide font-semibold w-40">*/}
                                {/*    <p className="underline text-[#FF4B2B] hover:text-[#ff674d]">*/}
                                {/*        <a href="">*/}
                                {/*            Ahmed Kehinde*/}
                                {/*            */}
                                {/*        </a>*/}
                                {/*    </p>*/}
                                {/*</div>*/}

                            </div>

                        </div>
                        <form action="https://getform.io/f/bqonyknb" method="post"
                              className="p-4 flex flex-col justify-center max-w-[700px]">

                            <div className="flex flex-col">
                                <input type="name" name="name" id="name" placeholder="Full Name"
                                       className="w-100 mt-2 py-3 px-3 rounded-lg
                                       bg-gray-800 border border-gray-700 text-white"/>
                            </div>

                            <div className="flex flex-col mt-2">

                                <input type="email" name="email" id="email" placeholder="Email"
                                       className="w-100 mt-2 py-3 px-3 rounded-lg
                                       bg-gray-800 border border-gray-700 text-white"/>
                            </div>

                            <div className="flex flex-col mt-2">
                                <textarea name="message" id="message" placeholder="Your Message"
                                          className="w-100 mt-2 py-3 px-3 rounded-lg
                                       bg-gray-800 border border-gray-700 text-white"/>
                            </div>

                            {/*<button type="submit" className="bg-primary-color text-white py-3 px-6 rounded-lg mt-3">*/}
                            {/*    Let's work together*/}
                            {/*</button>*/}

                            <div className="mt-4 w-full p-0 self-center flex flex-col items-center justify-center">
                                <div className="  relative inline-flex group my-3">
                                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                             from-[#FF4B2B] to-[#6689A1] via-[#FF416C] rounded-xl blur-lg group-hover:opacity-100
                            group-hover:-inset-1 group-hover:duration-200 animate-tilt">

                                    </div>

                                    <a href="/" title="Download CV" role="button"
                                       className="w-[240px] md:w-full h-[50px] md:h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-sm md:text-lg
                               font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                        Get in Touch
                                    </a>
                                </div>
                            </div>

                        </form>
                    </div>

            </div>

        </div>
    )
}

export default Contact