import {Navbar} from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Technlogies from "../components/Technologies";
import {useEffect, useState} from "react";

export const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // Retrieve scroll position from localStorage
        const savedScrollPosition = localStorage.getItem("scrollPosition");
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition, 10));
        }

        // Save scroll position to localStorage on unmount
        const handleBeforeUnload = () => {
            localStorage.setItem("scrollPosition", window.scrollY);
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            localStorage.setItem("scrollPosition", window.scrollY);
        };
    }, []);
    return (
        <>
            <Navbar />
            <Hero />
            <Technlogies />
            <About />
            <Work />
            {/*<Experience />*/}
            <Contact  />
            <Footer />
        </>
    )
}