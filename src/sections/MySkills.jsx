import React from 'react';

const SkillsComponent = () => {
    const skills = [
        {
            category: "Web Development",
            color: "from-green-500 to-green-600",
            technologies: [
                { img: "/tech/icons8-javascript-48.png" },
                { img: "/tech/icons8-react-24.png" },
                { img: "/tech/icons8-tailwindcss-48.png" },
                { img: "/tech/icons8-css-48.png" },
                { img: "/tech/icons8-html5-48.png" },
                { img: "/tech/icons8-typescript-24.png" }
            ]
        },
        {
            category: "App Development",
            color: "from-green-400 to-green-500",
            technologies: [
                { img: "/tech/icons8-flutter-24.png" },
                { img: "/tech/icons8-expo-50.png" },
                { img: "/tech/icons8-react-24.png" }
            ]
        },
        {
            category: "Tools",
            color: "from-green-600 to-green-700",
            technologies: [
                { img: "/tech/icons8-visual-studio-48.png" },
                { img: "/tech/icons8-postman-api-64.png" },
                { img: "https://play-lh.googleusercontent.com/SlDiGnB8poCDoYsnl4KbtP8Qr9f8vnKM7stOakYb1GvGnJ2Qcf-iDayZxBht4wtV9Z0=w480-h960-rw" }, // Assuming you download this
                { img: "data:image/jpeg;base64,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" }, // Assuming you download this
                { img: "https://images.seeklogo.com/logo-png/35/1/jupyter-logo-png_seeklogo-354673.png" } // Assuming you download this
            ]
        },
        {
            category: "Deployment Tools",
            color: "from-green-500 to-green-700",
            technologies: [
                { img: "data:image/png;base64,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" }, // Assuming you download this
                { img: "https://avatars.githubusercontent.com/u/7892489?s=200&v=4" }, // Assuming you download this
                { img: "https://media.licdn.com/dms/image/v2/D4E0BAQGGDoFoqHtOvA/company-logo_200_200/company-logo_200_200/0/1702595267620/renderco_logo?e=2147483647&v=beta&t=ZYrxKUyruOEupgw5Lr5amgwgBCJq8VXH8r05Qr5CeQc" }, // Assuming you download this
            ]
        }
    ];

    const narutoQuotes = [
        "I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!",
        "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be!",
        "Hard work is what makes dreams come true!",
        "The pain of being alone is completely out of this world, isn't it? I don't know why, but I understand your feelings so much, it actually hurts."
    ];

    const randomQuote = narutoQuotes[Math.floor(Math.random() * narutoQuotes.length)];

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-green-400 mb-4">MY SKILLS</h1>
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 border border-green-500/30">
                        <p className="text-green-300 text-lg italic font-medium">
                            "{randomQuote}"
                        </p>
                        <p className="text-green-400 mt-2 font-semibold">- Naruto Uzumaki</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left Side - Uniqueness */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-green-500/30 h-full">
                            <h2 className="text-2xl font-bold text-green-400 mb-3">What Makes Me Unique</h2>
                            <div className="space-y-2 text-gray-300 text-lg">
                                <p>I blend creativity with technical skills to solve challenges innovatively.</p>
                                <p>Self-motivated, I adapt quickly to new tech and deliver impactful solutions.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Skills Grid */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex items-center mb-3">
                                    <h3 className="text-lg font-bold text-white">{skill.category}</h3>
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    {skill.technologies.map((tech, techIndex) => (
                                        <div
                                            key={techIndex}
                                            className="flex items-center justify-center p-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-200"
                                        >
                                            <img src={tech.img} alt={`${skill.category} tech ${techIndex}`} className="w-6 h-6" />
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 h-1 bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${skill.color} transform -translate-x-full hover:translate-x-0 transition-transform duration-700`}
                                        style={{ animation: `slideIn 2s ease-out ${index * 0.2}s forwards` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                        <div className="text-2xl font-bold text-green-400 mb-1">2+</div>
                        <div className="text-gray-300 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                        <div className="text-2xl font-bold text-green-400 mb-1">10+</div>
                        <div className="text-gray-300 text-sm">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                        <div className="text-2xl font-bold text-green-400 mb-1">20+</div>
                        <div className="text-gray-300 text-sm">Technologies Mastered</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                        <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                        <div className="text-gray-300 text-sm">Dedication</div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
        </div>
    );
};

export default SkillsComponent;