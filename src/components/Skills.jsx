import React from "react";

function Skills() {
  const skills = {
    "Frontend": ["React.js", "Next.js", "React Native", "Flutter", "HTML", "CSS", "JavaScript"],
    "Backend": ["Django", "Node.js", "PHP"],
    "Database": ["PostgreSQL", "MySQL", "Firebase"],
    "Cloud & Deployment": ["AWS S3", "Hostinger", "GoDaddy"],
    "Design & Tools": ["Figma", "UI/UX Design", "Responsive Design", "Usability Testing", "Git/GitHub"]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-xl mb-4 text-indigo-600">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
