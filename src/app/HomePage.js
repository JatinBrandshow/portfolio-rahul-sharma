import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
import News from "@/components/News";
import React from "react";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <News />
        </div>
    );
};

export default HomePage;
