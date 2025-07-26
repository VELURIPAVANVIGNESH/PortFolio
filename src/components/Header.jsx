import React, { useEffect, useState } from 'react';
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
            className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
                isScrolled ? 'bg-black/60 backdrop-blur-md shadow-md' : 'bg-transparent'
            }`}
        >
            {/* === Left: Logo and Status === */}
            <div className="flex flex-col items-start">
                <div
                    className={`text-2xl font-extrabold tracking-wide text-white transition-all duration-700 delay-300 ${
                        isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    }`}
                >
                </div>

                {/* === Glowing Dot and Status Text === */}
                <div className="flex items-center mt-1">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-sm text-blue-400 font-medium">Open to work</span>
                </div>
            </div>

            {/* === Right: Nav Links === */}
            <div
                className={`hidden md:flex gap-10 text-lg font-medium text-white transition-all duration-700 delay-500 ${
                    isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
            >
                <a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a>
                <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
                <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
            </div>
        </nav>
    );
};

export default Header;
