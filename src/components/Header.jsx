import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);

        setTimeout(() => setIsLoaded(true), 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-black/60 backdrop-blur-md shadow-md' : 'bg-transparent'
                }`}
        >
            {/* Left: Logo */}
            <div
                className={`text-2xl font-extrabold tracking-wide text-white transition-all duration-700 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    }`}
            >
                Pavan Vignesh<span className="text-green-400"> V</span>
            </div>

            {/* Center: Social Icons */}
            <div
                className={`hidden md:flex gap-4 text-xl text-white transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                    }`}
            >
                <a href="https://github.com/VELURIPAVANVIGNESH" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/pavan-vignesh-75a171297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/pavan_vignesh/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
                    <FaInstagram />
                </a>
                <a href="https://leetcode.com/u/KULADEEP_REDDY_CHAPPIDI/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
                    <SiLeetcode />
                </a>
            </div>

            {/* Right: Nav Links */}
            <div
                className={`hidden md:flex gap-10 text-lg font-medium text-white transition-all duration-700 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
            >
                <a href="#home" className="hover:text-green-400 transition-colors duration-300">Home</a>
                <a href="#about" className="hover:text-green-400 transition-colors duration-300">About</a>
                <a href="#projects" className="hover:text-green-400 transition-colors duration-300">Projects</a>
                <a href="#contact" className="hover:text-green-400 transition-colors duration-300">Contact</a>
            </div>
        </nav>
    );
};

export default Header;
