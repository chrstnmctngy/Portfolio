import React, { useState, useEffect } from "react";
import AIDAOne from "../assets/ProjectImage/AIDA-1.png";
import AIDATwo from "../assets/ProjectImage/AIDA-2.png";
import AIDAThree from "../assets/ProjectImage/AIDA-3.png";
import AIDAFour from "../assets/ProjectImage/AIDA-4.png";
import AIDAFive from "../assets/ProjectImage/AIDA-5.png";
import AIDASix from "../assets/ProjectImage/AIDA-6.png";
import LawodOne from "../assets/ProjectImage/Lawod-1.png"; 
import LawodTwo from "../assets/ProjectImage/Lawod-2.png";
import LawodThree from "../assets/ProjectImage/Lawod-3.png";
import LawodFour from "../assets/ProjectImage/Lawod-4.png";
import ChadaCucinaOne from "../assets/ProjectImage/ChadaCucina-1.png";
import ChadaCucinaTwo from "../assets/ProjectImage/ChadaCucina-2.png";

function Work() {
  const projects = [
    {
      title: "Automated Incident Detection and Assistance",
      year: "2024 – 2025",
      desc: "A mobile + web platform with AI-powered incident detection and automated reporting. Built with React Native, React.js, Django, PostgreSQL.",
      tech: ["React Native", "React.js", "Django", "PostgreSQL"],
      images: [AIDAOne, AIDATwo, AIDAThree, AIDAFour, AIDAFive, AIDASix]
    },
    {
      title: "Lawod: A Digital Fishing Companion",
      year: "2023 – 2024",
      desc: "A mobile marketplace for fishermen with an ocean-themed UI. Designed in Figma, developed with Flutter & Firebase.",
      tech: ["Flutter", "Firebase", "Figma"],
      images: [LawodOne, LawodTwo, LawodThree, LawodFour]
    },
    {
      title: "ChadaCucina",
      year: "2023",
      desc: "A responsive food website developed with HTML, CSS, PHP, and JavaScript. Achieved 98% cross-device compatibility.",
      tech: ["HTML", "CSS", "PHP", "JavaScript"],
      images: [ChadaCucinaOne, ChadaCucinaTwo]
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="space-y-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.map((proj, i) => (
          <ProjectCard key={i} project={proj} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, reverse }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div
      className={`flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={project.images[index]}
          alt={project.title}
          className="w-full h-56 sm:h-64 md:h-80 object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-indigo-600">{project.title}</h3>
        <p className="text-xs sm:text-sm text-gray-500">{project.year}</p>
        <p className="text-gray-700 mt-4 text-sm sm:text-base">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs sm:text-sm bg-gray-100 rounded-full text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
