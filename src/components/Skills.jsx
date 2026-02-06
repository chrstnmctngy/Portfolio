import React from "react";

function Skills() {
  const skills = {
    Frontend: [
      "React.js",
      "Next.js",
      "React Native",
      "Expo",
      "Flutter",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    Backend: ["Django", "Node.js", "PHP"],
    Database: ["PostgreSQL", "MySQL", "Firebase"],
    "Cloud & DevOps": ["AWS S3", "Expo Updates (OTA)", "Hostinger", "GoDaddy"],
    "Libraries & Tools": [
      "TanStack Query",
      "React Native Paper",
      "Moti / Reanimated",
      "Git / GitHub",
    ],
    "Design & UX": [
      "Figma",
      "UI/UX Design",
      "Responsive Design",
      "Usability Testing",
    ],
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-mono text-neutral-500 mb-2 tracking-widest uppercase">
          What I Work With
        </p>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-16 transition-colors">Tech Stack</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-6 bg-white dark:bg-neutral-800/50 border border-gray-200 dark:border-neutral-800 rounded-xl hover:border-gray-300 dark:hover:border-neutral-700 transition-colors duration-300"
            >
              <h3 className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-4 tracking-wide uppercase">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-sm rounded-lg border border-gray-200 dark:border-neutral-700/50 hover:border-gray-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
