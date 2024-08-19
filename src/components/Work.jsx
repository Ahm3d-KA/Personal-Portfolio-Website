import React from "react";  
import bouncepicture from "../assets/bouncepicture.jpg"
import mathspicture from "../assets/mentalmathspicture.jpg"
import archivepicture from "../assets/archivepicture.jpg"
import {Link} from "react-router-dom";



const Work = () => {
    return (
        <div id="work" className="pt-6 pb-12 max-w-[1200px] mx-auto">
            <div className="mx-auto px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-white">
                            My <span>Projects</span>
                        </h2>
                        <article className="prose prose-stone dark:prose-invert prose-sm md:prose-base lg:prose-lg">
                            <p className="">
                                These are my latest projects
                            </p>
                        </article>
                            
                    </div>

                </div>
               
                <div className="grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-6 xl:gap-8">
                    <Link to="/archive"
                       className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-1 md:col-span-4 lg:col-span-3 md:h-80">
                        <img src={archivepicture} loading="lazy" alt=""
                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    </Link>

                    <Link to="/bounce"
                       className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-1 md:col-span-4 lg:col-span-5 md:h-80">
                        <img src={bouncepicture} loading="lazy" alt=""
                             className="absolute inset-0 h-full w-full object-cover 
                             object-center transition duration-200 
                             group-hover:scale-110"/>
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    </Link>

                    <Link to="/mentalmaths"
                       className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-1 md:col-span-4 lg:col-span-5 md:h-80">
                        <img src={mathspicture} loading="lazy" alt=""
                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    </Link>

                    <Link to="/" 
                       className="group bg-gray-900 relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg col-span-1 md:col-span-4 lg:col-span-3 md:h-80">
                        {/*<img src="" loading="lazy" alt=""*/}
                        {/*     className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>*/}
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Work