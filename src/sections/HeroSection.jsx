import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <header className="relative min-h-screen bg-black overflow-hidden" id="home">
      {/* Animated Background Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black transition-transform duration-1000 ease-out ${
          isLoaded ? "translate-x-0" : "translate-x-full"
        }`}
      />

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div
              className={`w-full lg:flex-1 lg:max-w-2xl lg:pr-12 text-center lg:text-left transition-all duration-1000 delay-700 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <span className="text-blue-500 font-bold text-sm sm:text-base lg:text-lg tracking-widest uppercase">
                MYSELF
              </span>

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
                Pavan Vignesh Veluri
              </h1>

              <h2 className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 min-h-[4rem]">
                <Typewriter
                  words={[
                    "Web Developer",
                    "LLM Engineer",
                    "Portrait Sketching",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h2>

              <div className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 space-y-3 max-w-2xl mx-auto lg:mx-0">
                <p>
                  A dedicated{" "}
                  <span className="text-blue-500 font-semibold">
                    developer
                  </span>{" "}
                  pursuing expertise in web development, full-stack systems, and
                  embedded solutions as a Computer Science and Engineering
                  undergraduate at Amrita Vishwa Vidyapeetham.
                </p>
                <p>
                  Specializing in{" "}
                  <span className="text-blue-500 font-semibold">
                    modern web technologies
                  </span>{" "}
                  like ReactJS and Node.js, and{" "}
                  <span className="text-blue-500 font-semibold">
                    AI/ML solutions
                  </span>{" "}
                  with projects in AI Mock Interview and performance monitoring.
                </p>
                <p className="hidden sm:block">
                  When not coding, I enjoy sketching{" "}
                  <span className="text-blue-500 font-semibold">
                    portrait art
                  </span>{" "}
                  with passion.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/myResume.pdf" download>
                  <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition transform hover:scale-105 shadow-lg">
                    My Resume
                  </button>
                </a>

                <a href="#projects">
                  <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition transform hover:scale-105 shadow-lg">
                    Projects
                  </button>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`w-full lg:flex-1 flex justify-center items-center transition-all duration-1000 delay-900 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="relative flex flex-col items-center">
                {/* PROFILE IMAGE FIX */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/30">
                  <img
                    src="/myImg.jpg"
                    alt="Pavan Vignesh"
                    className="w-full h-full object-cover object-[40%_50%]"
                  />
                </div>

                {/* Social Icons */}
                <div
                  className={`hidden md:flex gap-5 text-2xl text-white mt-6 transition-all duration-700 delay-500 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-4 opacity-0"
                  }`}
                >
                  <a
                    href="https://github.com/VELURIPAVANVIGNESH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pavan-vignesh-veluri-75a171297/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/pavan_vignesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </header>
  );
};

export default HeroSection;
