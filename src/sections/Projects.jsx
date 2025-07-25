import React from 'react';
import { ExternalLink, Github, Award, Calendar, MapPin } from 'lucide-react';

const ProjectsComponent = () => {
    const projects = [
        {
            title: "CoinPilot",
            subtitle: "Finance Tracker App",
            description: "A comprehensive financial management application built with MERN stack, featuring expense tracking, budget management, and financial insights to help users manage their money effectively.",
            tech: "MERN Stack",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            githubUrl: "https://github.com/Kuladeep-Reddy-C/CoinPilot-Frontend",
            liveUrl: "https://coinpilot-frontend.onrender.com/",
            category: "Full Stack",
            hasLive: true
        },
        {
            title: "TaskForge",
            subtitle: "Project Management Platform",
            description: "An innovative project management solution with intuitive task tracking, team collaboration features, and advanced analytics. Built for modern teams seeking efficient workflow management.",
            tech: "MERN Stack",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            githubUrl: "https://github.com/Kuladeep-Reddy-C/TaskForge-Frontend",
            liveUrl: "https://taskforge-frontend-fn9j.onrender.com/",
            category: "Full Stack",
            hasLive: true
        },
        {
            title: "Canteen Management System",
            subtitle: "Mobile Application",
            description: "A React Native mobile app streamlining canteen operations with order management, menu updates, and real-time notifications for both customers and staff.",
            tech: "React Native",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            githubUrl: "https://github.com/Kuladeep-Reddy-C/React-Native-Clerk-Auth",
            category: "Mobile",
            hasLive: false
        },
        {
            title: "Lift Door Safety System",
            subtitle: "IoT Solution",
            description: "An Arduino-based safety system ensuring elevator door security with sensor integration, emergency protocols, and real-time monitoring capabilities.",
            tech: "Arduino",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            githubUrl: "https://github.com/username/lift-safety-system",
            category: "IoT",
            hasLive: false
        },
        {
            title: "Luxury Car Showcase",
            subtitle: "Premium Vehicle Website",
            description: "An elegant frontend showcase for luxury vehicles featuring stunning visuals, smooth animations, and intuitive navigation designed during 2nd semester.",
            tech: "HTML/CSS/JS",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            githubUrl: "https://github.com/Kuladeep-Reddy-C/SEM-2-Project",
            liveUrl: "https://kuladeep-reddy-c.github.io/SEM-2-Project/new-home.html",
            category: "Frontend",
            hasLive: true
        },
        {
            title: "Smart Appointment Booking",
            subtitle: "Calendar Integration",
            description: "A seamless appointment booking system integrated with Google Calendar API, featuring automated scheduling, reminders, and conflict resolution.",
            tech: "Google Calendar API",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            githubUrl: "https://github.com/Kuladeep-Reddy-C/Appointment-Booking",
            liveUrl: "https://appointment-booking-1-3irb.onrender.com/",
            category: "Integration",
            hasLive: true
        },
        {
            title: "Influencer Performance Monitor",
            subtitle: "Analytics Dashboard",
            description: "A comprehensive analytics platform tracking influencer performance metrics, engagement rates, and campaign effectiveness across multiple social media platforms.",
            tech: "React & Analytics APIs",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            githubUrl: "https://github.com/Kuladeep-Reddy-C/TrendPulse",
            category: "Analytics",
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
                        <span className="text-green-400">Solutions</span>
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
                            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 group"
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
                                <div className="absolute top-4 right-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <h4 className="text-green-400 font-semibold mb-3">{project.subtitle}</h4>
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
                                            className="text-green-400 hover:text-green-300 transition-colors"
                                        >
                                            <Github size={18} />
                                        </a>
                                        {project.hasLive && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-green-400 hover:text-green-300 transition-colors"
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