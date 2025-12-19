import React, { useState, useEffect } from "react";
import {
  Github,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const HackathonComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const hackathons = [
    {
      title: "HireVerse",
      subtitle: "AI Based Hiring System for HRs",
      event: "ABHISARGA'25, IIIT Sri City",
      date: "Feb 2025",
      description:
        "Developed an AI-powered hiring platform using ReactJS and Node.js with dynamic interview question generation using Gemini and LeetCode APIs.",
      tech: `React.js, Tailwind CSS, Node.js, Express.js, Google Gemini API, Speech-to-Text (STT), Text-to-Speech (TTS), Clerk`,
      award: "🏅 1st Runner Up",
      images: [
        "/tech/abhisarga/1.png",
        "/tech/abhisarga/2.png",
        "/tech/abhisarga/3.jpg",
      ],
      githubUrl: "https://github.com/VELURIPAVANVIGNESH/AI-MOCK-INTERVIEW",
      category: "AI / Hiring",
    },
    {
      title: "MediSphere",
      subtitle: "Smart Healthcare Platform",
      event: "Technova Hackathon",
      date: "Mar 2025",
      description:
        "Built a smart healthcare management platform using MERN stack and Clerk authentication with dashboards for doctors and patients.",
      tech: `MERN Stack, Clerk, AI Chat Assistant, Health Report Analysis, Appointment Scheduling, EHR Management, Emergency SOS`,
      award: "🏆 Top 3",
      images: [
        "/tech/medisphere/1.png",
        "/tech/medisphere/2.png",
        "/tech/medisphere/3.jpg",
      ],
      githubUrl: "https://github.com/VELURIPAVANVIGNESH/MediSphere",
      category: "Healthcare",
    },
    {
      title: "AI Mock Interview",
      subtitle: "Interview Preparation Platform",
      event: "SCALER Hackathon",
      date: "Mar 2025",
      description:
        "Built an AI-powered mock interview platform with real-time feedback and modern UI under strict time constraints.",
      tech: `React.js, Tailwind CSS, Node.js, Express.js, Google Gemini API, Speech-to-Text (STT), Text-to-Speech (TTS), Clerk`,

      award: "🥈 2nd Place",
      rank: null,
      images: [
        "/tech/scalar/1.jpg",
        "/tech/scalar/2.jpg",
        "/tech/scalar/3.jpg",
      ],
      githubUrl: "https://github.com/VELURIPAVANVIGNESH/AI-MOCK-INTERVIEW",
      category: "UI / AI",
    },
  ];

  // Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(
        (prev) =>
          (prev + 1) % hackathons[currentSlide].images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hackathons.length);
    setImageIndex(0);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + hackathons.length) % hackathons.length
    );
    setImageIndex(0);
  };

  const nextImage = () => {
    setImageIndex(
      (prev) =>
        (prev + 1) % hackathons[currentSlide].images.length
    );
  };

  const prevImage = () => {
    setImageIndex(
      (prev) =>
        (prev - 1 + hackathons[currentSlide].images.length) %
        hackathons[currentSlide].images.length
    );
  };

  const currentHackathon = hackathons[currentSlide];

  const rankColors = {
    "1st": "from-yellow-400 to-yellow-600",
    "Top 3": "from-purple-400 to-purple-600",
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Hackathon <span className="text-blue-400">Achievements</span>
          </h1>
          <p className="text-gray-400 max-w-4xl mx-auto">
            Demonstrating innovation, teamwork, and rapid problem-solving
            through competitive hackathons.
          </p>
        </div>

        <div className="relative">
          {/* Slide Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/80 text-blue-400 p-3 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/80 text-blue-400 p-3 rounded-full"
          >
            <ChevronRight />
          </button>

          <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
            {/* IMAGE SECTION */}
            <div className="relative w-full aspect-video bg-black overflow-hidden">
              {/* Blurred background (BOTTOM) */}
              <img
                src={currentHackathon.images[imageIndex]}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 z-0"
              />

              {/* Main image (MIDDLE) */}
              <img
                src={currentHackathon.images[imageIndex]}
                alt={currentHackathon.title}
                className="relative z-10 w-full h-full object-contain"
              />

              {/* Image arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/70 p-2 rounded-full"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/70 p-2 rounded-full"
              >
                <ChevronRight size={18} />
              </button>

              {/* AWARD BADGE */}
              <div className="absolute top-4 left-4 z-40 bg-black/70 backdrop-blur-md border border-white/20 text-blue-400 px-4 py-2 rounded-full text-sm">
                {currentHackathon.award}
              </div>

              {/* CATEGORY BADGE */}
              <div className="absolute top-4 right-4 z-40 bg-blue-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                {currentHackathon.category}
              </div>

              {/* RANK BADGE */}
              {currentHackathon.rank && (
                <div
                  className={`absolute bottom-4 left-4 z-50 bg-gradient-to-r ${
                    rankColors[currentHackathon.rank]
                  } text-black px-5 py-2 rounded-full text-sm font-bold shadow-lg`}
                >
                  🏆 {currentHackathon.rank}
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold">
                  {currentHackathon.title}
                </h2>
                <h3 className="text-blue-400 text-xl mb-4">
                  {currentHackathon.subtitle}
                </h3>

                <div className="flex justify-between mb-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <MapPin size={18} />
                    {currentHackathon.event}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={18} />
                    {currentHackathon.date}
                  </div>
                </div>

                <p className="text-gray-400">
                  {currentHackathon.description}
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Technology Stack
                  </h4>
                  <div className="bg-gray-800 px-4 py-2 rounded-lg text-blue-400">
                    {currentHackathon.tech}
                  </div>
                </div>

                <a
                  href={currentHackathon.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-blue-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                  <Github />
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* SLIDE DOTS */}
          <div className="flex justify-center mt-8 gap-3">
            {hackathons.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setImageIndex(0);
                }}
                className={`w-4 h-4 rounded-full ${
                  index === currentSlide
                    ? "bg-blue-400"
                    : "bg-gray-600"
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
