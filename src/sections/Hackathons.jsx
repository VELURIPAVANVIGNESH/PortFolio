import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const HackathonComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    const hackathons = [
        {
            title: "AI Based Hiring System for HRs",
            subtitle: "Hiring System with AI",
            position: "2",
            event: "ABHISARGA'25, IIIT Sri City",
            date: "Feb 2025",
            description: "Developed a AI powered Hiring software with ReactJS, Node.js. Integrated LeetCode based API and Gemini for dynamic question Generator",
            tech: "ReactJS, Node.js, Rest API",
            award: "🏅 1st Runner Up",
            images: [
                "/tech/abhisarga/1.png",
                "/tech/abhisarga/2.png",
                "/tech/abhisarga/3.jpg"
            ],
            githubUrl: "https://github.com/VELURIPAVANVIGNESH/AI-MOCK-INTERVIEW",
            category: "AI/Hiring"
        },
        {
            title: "MediSphere",
            subtitle: "Healthcare Management System",
            position: "Top 8",
            event: "Technova Hackathon",
            date: "Mar 2025",
            description: "Built a healthcare system using MERN stack and Clerk, with dashboards for doctors and patients. Secured Top 8 for authentication.",
            tech: "MERN Stack, Clerk",
            award: "🏆 Top 3",
            images: [
                "/tech/medisphere/1.png",
                "/tech/medisphere/2.png",
                "/tech/medisphere/3.jpg"
            ],
            githubUrl: "https://github.com/Kuladeep-Reddy-C/medisphere",
            category: "Healthcare"
        },
        {
            title: "Ai Mock Interview",
            subtitle: "Hospitality Platform",
            position: "2nd Place",
            event: "DevX mini-Hackathon",
            date: "Mar 2025",
            description: "Designed a resort booking site in 3 hours with ReactJS and Tailwind CSS, comparing past and present designs. Earned 2nd Place for UI design.",
            tech: "ReactJS, Tailwind CSS",
            award: "🥈 2nd Place",
            images: [
                "/tech/scalar/1.jpg",
                "/tech/scalar/2.jpg",
                "/tech/scalar/3.jpg"
            ],
            githubUrl: "https://github.com/username/resort-booking",
            category: "UI/UX"
        }
    ];

    // Auto-advance slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prev) => (prev + 1) % hackathons[currentSlide].images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentSlide, hackathons]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % hackathons.length);
        setImageIndex(0);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + hackathons.length) % hackathons.length);
        setImageIndex(0);
    };

    const nextImage = () => {
        setImageIndex((prev) => (prev + 1) % hackathons[currentSlide].images.length);
    };

    const prevImage = () => {
        setImageIndex((prev) => (prev - 1 + hackathons[currentSlide].images.length) % hackathons[currentSlide].images.length);
    };

    const currentHackathon = hackathons[currentSlide];

    return (
        <div className="min-h-screen bg-black text-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4">
                        <span className="text-white">Hackathon </span>
                        <span className="text-green-400">Achievements</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
                        Competing in hackathons has sharpened my problem-solving skills and ability to deliver under pressure. Here are my recent achievements showcasing innovation and excellence.
                    </p>
                </div>

                {/* Main Slideshow */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-green-400 p-3 rounded-full transition-all duration-300 hover:scale-110"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-green-400 p-3 rounded-full transition-all duration-300 hover:scale-110"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Main Card */}
                    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
                        {/* Image Slideshow Section */}
                        <div className="relative h-96 overflow-hidden">
                            {/* Image Navigation */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-300"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-300"
                            >
                                <ChevronRight size={20} />
                            </button>

                            {/* Images */}
                            <div className="relative h-full">
                                {currentHackathon.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${currentHackathon.title} - Image ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === imageIndex ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                            {/* Badges */}
                            <div className="absolute top-4 right-4 bg-green-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                                {currentHackathon.category}
                            </div>
                            <div className="absolute top-4 left-4 bg-black/70 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                                {currentHackathon.award}
                            </div>

                            {/* Image indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {currentHackathon.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setImageIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === imageIndex ? 'bg-green-400' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column - Main Info */}
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-3">{currentHackathon.title}</h2>
                                    <h3 className="text-xl text-green-400 font-semibold mb-4">{currentHackathon.subtitle}</h3>

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-3 sm:space-y-0">
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="text-green-400" size={18} />
                                            <span className="text-green-400 font-semibold">{currentHackathon.event}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-400">
                                            <Calendar size={18} />
                                            <span>{currentHackathon.date}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 leading-relaxed mb-6">{currentHackathon.description}</p>
                                </div>

                                {/* Right Column - Tech & Actions */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                                        <div className="bg-gray-800 px-4 py-2 rounded-lg mb-6">
                                            <span className="text-green-400">{currentHackathon.tech}</span>
                                        </div>
                                    </div>

                                    <div className="flex space-x-4">
                                        <a
                                            href={currentHackathon.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                            <span>View Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {hackathons.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentSlide(index);
                                    setImageIndex(0);
                                }}
                                className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-green-400' : 'bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HackathonComponent;