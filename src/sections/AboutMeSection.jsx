import React from 'react';

const AboutMeSection = () => {
    return (
        <section id='about' className="px-6 py-16 bg-black text-white">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-lg md:text-3xl text-gray-300 leading-relaxed">
                    I'm <span className="text-green-400 font-semibold">Pavan Vignesh</span>, a curious and driven technologist passionate about solving real-world problems through AI. I have authored a research paper on a <span className="text-green-400">Large Language Model (LLM)-based Nutrition Advisor</span> that provides personalized suggestions for kids, considering their <span className="text-green-400">location</span> and <span className="text-green-400">health condition</span>, with an emphasis on interactive usability.
                </p>
                <p className="mt-4 text-lg md:text-3xl text-gray-300 leading-relaxed">
                    My passion lies in applying cutting-edge technologies to build impactful solutions. I thrive in competitive environments and love participating in <span className="text-green-400">hackathons</span>, where I’ve had the privilege of winning several. I also actively seek opportunities to attend <span className="text-green-400">technical workshops</span> to expand my knowledge and stay on the pulse of innovation.
                </p>
                <p className="mt-4 text-lg md:text-3xl text-gray-300 leading-relaxed">
                    When I'm not coding or ideating on new projects, I enjoy engaging with communities, exploring advancements in <span className="text-green-400">AI/ML</span>, and refining my skills to contribute meaningfully to the tech world.
                </p>
            </div>
        </section>
    );
};

export default AboutMeSection;
