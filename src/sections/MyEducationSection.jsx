    import React, { useState, useEffect } from 'react';
    import { GraduationCap, Calendar, MapPin, Star, Award, BookOpen, Trophy } from 'lucide-react';

    const EducationTimeline = () => {
        const [visibleItems, setVisibleItems] = useState(new Set());

        const educationData = [
            {
                id: 1,
                year: "2020-2021",
                degree: "SSC",
                institution: "Sri Chaitanya Techno School",
                type: "Secondary School Certificate",
                score: "100.0%",
                scoreType: "Percentage",
                icon: <BookOpen className="w-5 h-5" />,
                description: "Completed secondary education with perfect score",
                achievement: "Perfect Score Achievement | Chatting Expert with Girls"
            },
            {
                id: 2,
                year: "2021-2023",
                degree: "Intermediate (PCM)",
                institution: "Sri Chaitanya Junior College",
                type: "BIEAP - Physics, Chemistry & Mathematics",
                score: "90.5%",
                scoreType: "Percentage",
                icon: <Award className="w-5 h-5" />,
                description: "Specialized in Physics, Chemistry & Mathematics stream",
                achievement: "JEE Main: 90.58%ile"
            },
            {
                id: 3,
                year: "2023-Present",
                degree: "B.Tech CSE",
                institution: "Amrita Vishwa Vidyapeetham",
                type: "Bachelor of Technology",
                score: "6.6 CPI",
                scoreType: "CGPA",
                icon: <GraduationCap className="w-5 h-5" />,
                description: "Pursuing Computer Science & Engineering with focus on modern technologies",
                achievement: "Winner In 1 National Level Hackathons"
            }
        ];

        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const id = parseInt(entry.target.dataset.id);
                            setVisibleItems(prev => new Set([...prev, id]));
                        }
                    });
                },
                { threshold: 0.1 }
            );

            const timelineItems = document.querySelectorAll('[data-timeline-item]');
            timelineItems.forEach(item => observer.observe(item));

            return () => observer.disconnect();
        }, []);

        return (
            <section className="h-screen bg-black text-white p-6 flex flex-col">
                <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-0 flex-shrink-0">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg">
                                <GraduationCap className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-5xl font-bold">
                                My Education
                            </h1>
                        </div>
                        <p className="text-gray-400 text-lg">
                            Academic journey from foundation to engineering excellence
                        </p>
                    </div>

                    {/* Education Cards - Horizontal Layout */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                            {educationData.map((item, index) => (
                                <div
                                    key={item.id}
                                    data-id={item.id}
                                    data-timeline-item
                                    className={`transform transition-all duration-700 delay-${index * 200} ${
                                        visibleItems.has(item.id)
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-8'
                                    }`}
                                >
                                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 transition-all duration-300 group relative overflow-hidden h-full">
                                        {/* Sunrise-like Liquid Fill Effect */}
                                        <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[30%] bg-gradient-to-t from-blue-500/40 via-emerald-500/20 to-transparent rounded-2xl transition-all duration-600 ease-in-out origin-bottom"></div>
                                        <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[20%] bg-gradient-to-t from-blue-500/20 via-emerald-500/10 to-transparent rounded-2xl transition-all duration-800 ease-in-out origin-bottom delay-100"></div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Year Badge */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full">
                                                    {item.icon}
                                                </div>
                                                <div className="flex items-center gap-2 text-blue-400 font-semibold">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{item.year}</span>
                                                </div>
                                            </div>

                                            {/* Degree Title */}
                                            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                                                {item.degree}
                                            </h2>

                                            {/* Institution */}
                                            <div className="flex items-center gap-2 text-gray-400 mb-3">
                                                <MapPin className="w-4 h-4 text-blue-500" />
                                                <span className="text-sm">{item.institution}</span>
                                            </div>

                                            {/* Type */}
                                            <div className="flex items-center gap-2 mb-3">
                                                <Star className="w-4 h-4 text-blue-500" />
                                                <span className="text-blue-400 font-medium text-sm">{item.type}</span>
                                            </div>

                                            {/* Score */}
                                            <div className="bg-gray-800/50 rounded-lg p-3 mb-3 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-300 text-sm">Score:</span>
                                                    <span className="text-xl font-bold text-blue-400">{item.score}</span>
                                                </div>
                                                <div className="text-xs text-gray-500">{item.scoreType}</div>
                                            </div>

                                            {/* Achievement */}
                                            {item.achievement && (
                                                <div className="bg-yellow-900/20 rounded-lg p-3 mb-3 border border-yellow-800/50 group-hover:border-blue-500/30 transition-colors">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <Trophy className="w-4 h-4 text-yellow-500" />
                                                        <span className="text-yellow-400 font-medium text-sm">Achievement</span>
                                                    </div>
                                                    <p className="text-yellow-300 text-xs">{item.achievement}</p>
                                                </div>
                                            )}

                                            {/* Description */}
                                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                                {item.description}
                                            </p>

                                            {/* Progress Bar */}
                                            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-1000 delay-${index * 300 + 500} ${
                                                        visibleItems.has(item.id) ? (item.id === 3 ? 'w-[75%]' : 'w-full') : 'w-0'
                                                    } ${item.id === 3 ? 'animate-pulse' : ''}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Grid - Bottom */}
                    <div className="grid grid-cols-4 gap-4 mt-8 flex-shrink-0">
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 group relative overflow-hidden text-center">
                            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[30%] bg-gradient-to-t from-blue-500/40 via-emerald-500/20 to-transparent rounded-xl transition-all duration-600 ease-in-out origin-bottom"></div>
                            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[20%] bg-gradient-to-t from-blue-500/20 via-emerald-500/10 to-transparent rounded-xl transition-all duration-800 ease-in-out origin-bottom delay-100"></div>
                            <div className="relative z-10">
                                <div className="text-3xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform">6.6</div>
                                <div className="text-gray-400 text-sm">Current CGPA</div>
                            </div>
                        </div>
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 group relative overflow-hidden text-center">
                            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[30%] bg-gradient-to-t from-blue-500/40 via-emerald-500/20 to-transparent rounded-xl transition-all duration-600 ease-in-out origin-bottom"></div>
                            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[20%] bg-gradient-to-t from-blue-500/20 via-emerald-500/10 to-transparent rounded-xl transition-all duration-800 ease-in-out origin-bottom delay-100"></div>
                            <div className="relative z-10">
                                <div className="text-3xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform">7</div>
                                <div className="text-gray-400 text-sm">Hacathons</div>
                            </div>
                        </div>
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 group relative overflow-hidden text-center">
                            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[30%] bg-gradient-to-t from-blue-500/40 via-emerald-500/20 to-transparent rounded-xl transition-all duration-600 ease-in-out origin-bottom"></div>
                            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[20%] bg-gradient-to-t from-blue-500/20 via-emerald-500/10 to-transparent rounded-xl transition-all duration-800 ease-in-out origin-bottom delay-100"></div>
                            <div className="relative z-10">
                                <div className="text-3xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform">90.58</div>
                                <div className="text-gray-400 text-sm">JEE Main %ile</div>
                            </div>
                        </div>
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 group relative overflow-hidden text-center">
                            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[30%] bg-gradient-to-t from-blue-500/40 via-emerald-500/20 to-transparent rounded-xl transition-all duration-600 ease-in-out origin-bottom"></div>
                            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[20%] bg-gradient-to-t from-blue-500/20 via-emerald-500/10 to-transparent rounded-xl transition-all duration-800 ease-in-out origin-bottom delay-100"></div>
                            <div className="relative z-10">
                                <div className="text-3xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform">CSE</div>
                                <div className="text-gray-400 text-sm">Specialization</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    export default EducationTimeline;