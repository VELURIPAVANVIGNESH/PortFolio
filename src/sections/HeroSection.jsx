import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 100);
    }, []);

    return (
        <header className="relative min-h-screen bg-black overflow-hidden" id="home">
            {/* Animated Background Overlay */}
            <div
                className={`absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black transition-transform duration-1000 ease-out ${isLoaded ? 'translate-x-0' : 'translate-x-full'
                    }`}
            />

            {/* Hero Content */}
            <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl mx-auto">
                    {/* Mobile/Tablet Layout (Stack vertically) */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                        {/* Left Content */}
                        <div
                            className={`w-full lg:flex-1 lg:max-w-2xl lg:pr-12 text-center lg:text-left transition-all duration-1000 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                                }`}
                        >
                            {/* MYSELF Label */}
                            <div className="mb-2 sm:mb-4">
                                <span className="text-green-500 font-bold text-sm sm:text-base lg:text-lg tracking-widest uppercase">
                                    MYSELF
                                </span>
                            </div>

                            {/* Name */}
                            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                                Pavan Vignesh
                            </h1>

                            {/* Typewriter Title */}
                            <h2 className="text-green-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 min-h-[3rem] sm:min-h-[4rem] lg:min-h-[5rem]">
                                <Typewriter
                                    words={['Web Developer', 'Portrait Sketching', 'ML Engineer', 'F1 Enthusiast']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </h2>

                            {/* Description */}
                            <div className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 space-y-2 max-w-2xl mx-auto lg:mx-0">
                                <p>
                                    A dedicated <span className="text-green-500 font-semibold">developer</span>{' '}
                                    pursuing expertise in web development, full-stack systems, and embedded solutions as a Computer Science and Engineering undergraduate at Amrita Vishwa Vidyapeetham.
                                </p>
                                <p>
                                    Specializing in{' '}
                                    <span className="text-green-500 font-semibold">modern web technologies</span> like ReactJS and Node.js, and{' '}
                                    <span className="text-green-500 font-semibold">AI/ML solutions</span> with projects in AI Mock Interview and performance monitoring.
                                </p>
                                <p className="hidden sm:block">
                                    When not coding, I enjoy analyzing the thrills of{' '}
                                    <span className="text-green-500 font-semibold">Formula 1</span> racing, blending my tech skills with a passion for motorsport data.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                                <a href="/myResume.pdf" download="pavan_vignesh_resume.pdf">
                                    <button className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                                        My Resume
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </a>

                                <a href="#projects">
                                    <button className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                                        Projects
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </a>

                            </div>
                        </div>

                        {/* Right Image */}
                        <div
                            className={`w-full lg:flex-1 flex justify-center items-center transition-all duration-1000 delay-900 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                                }`}
                        >
                            <div className="relative">
                                {/* Profile Image Container - Responsive sizes */}
                                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-2xl">
                                    <img
                                        src="/myImg.jpg"
                                        alt="Kuladeep Reddy C"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>

                                {/* Glowing Effect */}
                                {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 via-green-500/20 to-green-500/20 blur-xl animate-pulse"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Contact Button - Responsive */}
            <button
                className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 shadow-lg ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
            >
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.25 0-2.45-.2-3.57-.57L3 20l.57-5.43C3.2 13.45 3 12.25 3 11c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9z" />
                    <path d="M8.5 12.5l2 2 5-5" />
                </svg>
            </button>

            {/* Mobile Navigation Dots (Optional)
            <div className="lg:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div> */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black pointer-events-none" />
        </header>
    );
};

export default HeroSection;