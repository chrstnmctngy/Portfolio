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
import BBOne from "../assets/ProjectImage/BB-1.png";
import BBTwo from "../assets/ProjectImage/BB-2.png";
import BBThree from "../assets/ProjectImage/BB-3.png";
import BBFour from "../assets/ProjectImage/BB-4.png";
import BBFive from "../assets/ProjectImage/BB-5.png";
import BBSix from "../assets/ProjectImage/BB-6.png";

function Work() {
  const projects = [
    {
      title: "Buying Buddy",
      year: "2025",
      desc: "A cross-platform mobile marketplace connecting car brokers with customers. Features include MVVM architecture, JWT authentication, advanced search with multi-parameter filtering, offer/negotiation workflows, push notifications, and OTA updates.",
      tech: ["React Native", "Expo", "TypeScript", "TanStack Query", "React Native Paper"],
      images: [BBOne, BBTwo, BBThree, BBFour, BBFive, BBSix],
      highlights: [
        "Cross-platform (iOS, Android, Web)",
        "MVVM Architecture",
        "Real-time Negotiations"
      ]
    },
    {
      title: "Automated Incident Detection and Assistance",
      year: "2024 – 2025",
      desc: "A mobile + web platform with AI-powered incident detection and automated reporting. Integrates real-time data processing and cloud storage for disaster response coordination.",
      tech: ["React Native", "React.js", "Django", "PostgreSQL"],
      images: [AIDAOne, AIDATwo, AIDAThree, AIDAFour, AIDAFive, AIDASix],
      highlights: [
        "AI-Powered Detection",
        "Real-time Reporting",
        "Cloud Storage (AWS S3)"
      ]
    },
    {
      title: "Lawod: A Digital Fishing Companion",
      year: "2023 – 2024",
      desc: "A mobile marketplace for fishermen with an ocean-themed UI. Designed in Figma, developed with Flutter & Firebase for real-time data sync.",
      tech: ["Flutter", "Firebase", "Figma"],
      images: [LawodOne, LawodTwo, LawodThree, LawodFour],
      highlights: [
        "Real-time Marketplace",
        "Custom Ocean UI",
        "Firebase Backend"
      ]
    },
    {
      title: "ChadaCucina",
      year: "2023",
      desc: "A responsive food website achieving 98% cross-device compatibility. Built with a focus on clean design and smooth user experience.",
      tech: ["HTML", "CSS", "PHP", "JavaScript"],
      images: [ChadaCucinaOne, ChadaCucinaTwo],
      highlights: [
        "98% Compatibility",
        "Responsive Design",
        "Clean UI/UX"
      ]
    }
  ];

  return (
    <section id="work" className="py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-mono text-neutral-500 mb-2 tracking-widest uppercase">
          Portfolio
        </p>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-16 transition-colors">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj, i) => (
            <ProjectCard key={i} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [index, setIndex] = useState(0);
  const hasImages = project.images.length > 0;

  useEffect(() => {
    if (!hasImages) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length, hasImages]);

  return (
    <div className="group bg-white dark:bg-neutral-800/50 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-neutral-700 transition-all duration-300">
      {hasImages ? (
        <div className="relative overflow-hidden">
          <img
            src={project.images[index]}
            alt={project.title}
            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 dark:from-neutral-900/80 to-transparent" />
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="h-60 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center">
          <span className="text-5xl font-bold text-gray-300 dark:text-neutral-700 font-mono transition-colors">
            {project.title.split(" ").map(w => w[0]).join("")}
          </span>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white transition-colors">{project.title}</h3>
          <span className="text-xs text-neutral-500 font-mono">{project.year}</span>
        </div>

        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 transition-colors">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md border border-gray-200 dark:border-neutral-700/50 font-mono transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {project.highlights && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-neutral-800 transition-colors">
            {project.highlights.map((h, i) => (
              <span key={i} className="text-xs text-neutral-500">
                {i > 0 && <span className="mr-2">·</span>}
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
