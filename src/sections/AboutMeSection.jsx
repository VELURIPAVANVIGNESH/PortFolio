import React from 'react';

const AboutMeSection = () => {
    return (
        <section id='about' className="px-6 py-16 bg-black text-white">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-lg md:text-3xl text-gray-300 leading-relaxed">
                    I'm <span className="text-green-400 font-semibold">Kuladeep Reddy Chappidi</span>, a dedicated and passionate web developer currently pursuing my B.Tech in Computer Science at <span className="font-semibold">Amrita College, Coimbatore</span>. My focus lies in building clean, modern web applications using the <span className="text-green-400">MERN stack</span> and beyond.
                </p>
                <p className="mt-4 text-lg md:text-3xl text-gray-300 leading-relaxed">
                    I have hands-on experience developing full-stack applications with <span className="text-green-400">authentication (Clerk)</span>, <span className="text-green-400">PDF generation</span>, and <span className="text-green-400">Google Calendar API integrations</span>. I'm currently working on projects like <strong>GeoGuide AI Travel Assistance</strong> and a feature-rich <strong>Finance Tracker</strong>.
                </p>
                <p className="mt-4 text-lg md:text-3xl text-gray-300 leading-relaxed">
                    When I'm not coding, you'll find me analyzing <span className="text-green-400">Formula 1</span> races, brainstorming product ideas, or learning about <span className="text-green-400">AI/ML</span>. I believe in constant learning and strive to push the boundaries of what I can build.
                </p>
            </div>
        </section>
    );
};

export default AboutMeSection;
