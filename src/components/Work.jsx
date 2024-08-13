import React from "react";  
import proj1 from "../assets/proj1.png"
import proj2 from "../assets/proj2.png"
import proj3 from "../assets/proj3.png"
import proj4 from "../assets/proj4.png"

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
                                These are my latest projects for different clients
                            </p>
                        </article>
                            
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-6 xl:gap-8">
                    <a href="/"
                       className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-1 md:col-span-4 lg:col-span-3 md:h-80">
                        <img src={proj1} loading="lazy" alt=""
                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    </a>

                    <a href="/"
                       className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-1 md:col-span-4 lg:col-span-5 md:h-80">
                        <img src={proj2} loading="lazy" alt=""
                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    </a>

                    <a href="/"
                       className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-1 md:col-span-4 lg:col-span-5 md:h-80">
                        <img src={proj3} loading="lazy" alt=""
                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    </a>

                    <a href="/"
                       className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg col-span-1 md:col-span-4 lg:col-span-3 md:h-80">
                        <img src={proj4} loading="lazy" alt=""
                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Work