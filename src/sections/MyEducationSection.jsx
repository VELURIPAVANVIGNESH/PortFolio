import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Star,
  Award,
  BookOpen,
  Trophy,
} from "lucide-react";

const EducationTimeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  const educationData = [
    {
      id: 1,
      year: "2020 – 2021",
      degree: "Secondary School Certificate (SSC)",
      institution: "Sri Chaitanya Techno School",
      type: "Board of Secondary Education",
      score: "100%",
      scoreType: "Percentage",
      icon: <BookOpen className="w-5 h-5" />,
      description:
        "Completed secondary education with a perfect academic score, demonstrating strong foundational knowledge.",
      achievement: "Perfect Score (100%)",
    },
    {
      id: 2,
      year: "2021 – 2023",
      degree: "Intermediate (PCM)",
      institution: "Sri Chaitanya Junior College",
      type: "Physics, Chemistry & Mathematics",
      score: "90.5%",
      scoreType: "Percentage",
      icon: <Award className="w-5 h-5" />,
      description:
        "Focused on core science subjects with consistent academic performance and competitive exam preparation.",
      achievement: "JEE Main – 90.58 Percentile",
    },
    {
      id: 3,
      year: "2023 – Present",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Amrita Vishwa Vidyapeetham",
      type: "Undergraduate Program",
      score: "updating",
      scoreType: "Current CGPA",
      icon: <GraduationCap className="w-5 h-5" />,
      description:
        "Pursuing Computer Science with interests in Full Stack Development, AI systems, and problem solving.",
      achievement: "Winner in National-Level Hackathons",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.dataset.id);
            setVisibleItems((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll("[data-timeline-item]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500 rounded-lg">
              <GraduationCap className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Education</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl">
            A concise overview of my academic journey and key milestones.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              data-timeline-item
              className={`transition-all duration-700 ${
                visibleItems.has(item.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500 rounded-full text-black">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                    <Calendar className="w-4 h-4" />
                    {item.year}
                  </div>
                </div>

                {/* Content */}
                <h2 className="text-xl font-bold mb-2">{item.degree}</h2>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  {item.institution}
                </div>

                <div className="flex items-center gap-2 mb-4 text-blue-400 text-sm">
                  <Star className="w-4 h-4" />
                  {item.type}
                </div>

                {/* Score */}
                <div className="bg-gray-800 rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Score</span>
                    <span className="text-lg font-bold text-blue-400">
                      {item.score}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {item.scoreType}
                  </div>
                </div>

                {/* Achievement */}
                {item.achievement && (
                  <div className="bg-gray-800 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-yellow-400 text-sm font-medium">
                        Achievement
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {item.achievement}
                    </p>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Current CGPA", value: "6.6" },
            { label: "Hackathons", value: "3+" },
            { label: "JEE Main %ile", value: "90.58" },
            { label: "Specialization", value: "CSE" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center hover:border-blue-500/40 transition"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
