import React from 'react';
import mockup from "../assets/websitemockup1.jpg"
import { FaArrowLeft } from "react-icons/fa";

const Project = ({ title = "Project Title", timePeriod = "Jun XX - Jul XX", link, secondaryLink, secondaryLinkTitle, technologiesUsed = ["Tailwind", "React"], about = "Talk about the project here", pictureLink }) => {
    return (
        <div>
            <div className={"text-gray-200 hover:text-gray-100"}>
                <a href="/">
                    <FaArrowLeft size={40} className={"absolute top-5 left-5"}/>
                </a>
            </div>
            <div
                className={"flex flex-col px-2 md:px-4 xl:px-0 gap-2 xl:gap-5 mx-auto my-8 mt-14 md:mt-8 xl:my-16 items-center justify-center"}>
                <article className={"prose dark:prose-invert stone prose-sm md:prose-base lg:prose-lg xl:prose-xl"}>
                    <h1 className="">{title}</h1>
                </article>
                <article
                    className={"prose xl:mb-6 dark:prose-invert stone prose-sm md:prose-base lg:prose-lg xl:prose-xl"}>
                    <h5 className="">{timePeriod}</h5>
                </article>
                <div className={"px-0"}>
                    <img className={"w-full object-contain"}
                         src={pictureLink}
                    />

                </div>
                <article className={"prose dark:prose-invert stone prose-sm md:prose-base lg:prose-lg xl:prose-xl"}>
                    <a href={link} target="_blank" className={"text-blue-200 hover:text-blue-50 underline"}>Link to demo
                        website</a>


                </article>
                <article className="prose dark:prose-invert stone prose-sm md:prose-base lg:prose-lg xl:prose-xl">
                    <a href={secondaryLink} target="_blank" className={"text-blue-200 hover:text-blue-50 underline"}>
                        {secondaryLinkTitle}
                    </a>
                </article>
                <div className="flex flex-col md:flex-row w-full xl:w-[1100px] gap-2 lg:gap-16">

                    <article className={"prose dark:prose-invert stone prose-sm md:prose-base lg:prose-lg xl:prose-xl"}>
                        <h3>Technologies</h3>
                        <ul>
                            {technologiesUsed.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                            {/*<li>React</li>*/}
                            {/*<li>.NET</li>*/}
                            {/*<li>Tailwind</li>*/}
                        </ul>
                    </article>
                    <article className={"prose dark:prose-invert stone prose-sm md:prose-base lg:prose-lg xl:prose-xl"}>
                        <h3>About the project</h3>
                        <p>
                            {about}
                        </p>
                        {/*<p>*/}
                        {/*    This project is an e-commerce shopping platform designed to provide users with a seamless online shopping experience. The website features a clean and modern user interface, allowing users to browse, search, and purchase products easily. The site includes a robust backend for handling inventory management, user authentication, and secure payment processing.*/}
                        {/*</p>*/}
                    </article>
                </div>

            </div>

        </div>
    );
};

export default Project;