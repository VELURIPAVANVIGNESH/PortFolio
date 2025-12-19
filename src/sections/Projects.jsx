import React from 'react';
import { ExternalLink, Github, Award, Calendar, MapPin } from 'lucide-react';

const ProjectsComponent = () => {
    const projects = [
        {
    title: "HireVerse",
    subtitle: "AI-Powered Mock Interview Platform",
    description: "An AI-driven mock interview platform with role- and experience-based dynamic question generation for DSA, Aptitude, Verbal, and Behavioral rounds. Features include Speech-to-Text, Text-to-Speech, automated scoring, AI feedback, performance analytics, Clerk authentication, and subscription-based premium access with payment integration.",
    tech: "Full Stack + AI (MERN)",
    videoUrl: "/public/project1.mp4",
    githubUrl: "https://github.com/VELURIPAVANVIGNESH/AI-MOCK-INTERVIEW",
    liveUrl: "https://ai-mock-interview-qsvj.onrender.com",
    category: "Full Stack",
    hasLive: true
},
{
    title: "MediSphere",
    subtitle: "Smart Hospitalization Platform",
    description: "A smart healthcare platform enabling appointment booking, secure doctor–patient communication, and electronic health record (EHR) management. Includes AI-powered chat assistant, emergency SOS services, pharmacy orders, and automated health report analysis with trend visualization.",
    tech: "Full Stack + AI",
    videoUrl: "/public/project2.mp4",
    githubUrl: "https://github.com/VELURIPAVANVIGNESH/MediSphere",
    liveUrl: "https://medisphere-f3b4.onrender.com/",
    category: "Full Stack",
    hasLive: true
},
{
    title: "Anti-Theft Bag Security System",
    subtitle: "Smart Embedded Security System",
    description: "A smart luggage security system built using STM32F401, MPU6050 accelerometer-gyroscope, SW-420 vibration sensor, HC-05 Bluetooth module, and OLED display for real-time monitoring. Integrated a lightweight Decision Tree model to classify motion and vibration patterns, triggering Bluetooth alerts within 150ms upon detecting abnormal activity.",
    tech: "Embedded Systems + ML",
    videoUrl: "/public/project3.mp4",
    githubUrl: "https://github.com/VELURIPAVANVIGNESH/Anti-Theft-Bag-System",
    liveUrl: "",
    category: "Embedded / IoT",
    hasLive: false
},
{
    title: "GeoHealth",
    subtitle: "Hospital Search & Management System",
    description: "A high-performance hospital search and management system using R-Tree for geo-based range and nearest-neighbor queries. Implemented prefix-based hospital name and address search using Trie with autocomplete support, prioritized hospitals using MaxHeap based on ratings, and maintained recent search history using Stack.",
    tech: "DSA",
    videoUrl:"/public/project4.mp4",
    githubUrl: "https://github.com/VELURIPAVANVIGNESH/GeoHealth-3rd_SEM",
    liveUrl: "",
    category: "DSA",
    hasLive: false
}

    ];


    return (
        <div id='projects' className="min-h-screen bg-black text-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4">
                        <span className="text-white">Turning Problems into </span>
                        <span className="text-blue-400">Solutions</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
                        Instead of searching for cheap solutions, I focus on solving real problems I encounter daily. Every challenge gets an innovative twist, creating functional solutions that refine, solve, and execute them. Here are some of my recent projects.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group"
                        >
                            <div className="relative overflow-hidden">
                                <video
                                    src={project.videoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4 bg-blue-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <h4 className="text-blue-400 font-semibold mb-3">{project.subtitle}</h4>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                                        {project.tech}
                                    </span>
                                    <div className="flex space-x-2">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <Github size={18} />
                                        </a>
                                        {project.hasLive && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-blue-300 transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default ProjectsComponent;