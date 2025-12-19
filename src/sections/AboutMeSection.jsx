import React from "react";

const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>

        {/* Content */}
        <div className="space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed">
          <p>
            I’m{" "}
            <span className="text-blue-400 font-semibold">
              Pavan Vignesh
            </span>
            , a curious and driven technologist passionate about solving
            real-world problems using Artificial Intelligence. I have authored
            a research paper on a{" "}
            <span className="text-blue-400 font-medium">
              Large Language Model (LLM)–based Nutrition Advisor
            </span>{" "}
            that delivers personalized recommendations for children by
            considering their{" "}
            <span className="text-blue-400">location</span> and{" "}
            <span className="text-blue-400">
              health conditions
            </span>
            , with a strong focus on interactive usability.
          </p>

          <p>
            I enjoy applying modern technologies to build meaningful,
            high-impact solutions. I thrive in competitive environments and
            actively participate in{" "}
            <span className="text-blue-400 font-medium">
              hackathons
            </span>
            , where I have earned multiple wins. I also regularly attend{" "}
            <span className="text-blue-400 font-medium">
              technical workshops
            </span>{" "}
            to broaden my skill set and stay aligned with emerging trends.
          </p>

          <p>
            Beyond coding, I enjoy collaborating with tech communities,
            exploring advancements in{" "}
            <span className="text-blue-400 font-medium">
              AI and Machine Learning
            </span>
            , and continuously refining my abilities to make a meaningful
            contribution to the technology ecosystem.
          </p>
        </div>

        {/* Subtle Divider */}
        <div className="mt-12 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
