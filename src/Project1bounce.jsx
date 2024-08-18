import Project from "./components/Project";
import portfoliopic from "./assets/bouncepicture.jpg"
import React from 'react';

export const Project1bounce = () => {
    return (
        <>
            <Project link={"https://www.figma.com/proto/LMl5eTI0yG8LYHlYfKs9kh/Shoes-Ecommerce-Website?node-id=108-966&starting-point-node-id=108%3A966&t=4WnN4wDzM99pB0H8-1"}  
                     pictureLink={portfoliopic} 
                     title={"Bounce: Online Shoe Store"} 
                     timePeriod={"Sep 23 - Oct 23"} 
                     technologiesUsed={["Figma"]}  
                     about={"I designed an e-commerce platform tailored for sneakerheads, offering a seamless shopping experience for exclusive and trending sneakers."} />
        
    </>
    );
}