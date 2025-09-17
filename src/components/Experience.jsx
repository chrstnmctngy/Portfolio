import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer & Co-Founder",
      company: "Automated Incident Detection and Assistance (Start-Up)",
      year: "Apr 2024 – Aug 2025",
      details: [
        "Developed a disaster-ready app integrating AI-driven incident detection and reporting.",
        "Built features with React Native, React.js, Django, and PostgreSQL.",
        "Integrated AWS S3 for secure storage of media files.",
        "Deployed scalable apps on GoDaddy & Hostinger.",
        "Led debugging, optimizations, and technical strategy."
      ]
    },
    {
      role: "Chief Technology Officer",
      company: "Google Developer Groups on Campus – USTP",
      year: "Nov 2023 – Mar 2024",
      details: [
        "Directed the Technology Department and managed multiple projects.",
        "Conducted coding workshops and technical upskilling sessions."
      ]
    },
    {
      role: "General Secretary",
      company: "USTP Scholar Society",
      year: "Aug 2023 – Jul 2024",
      details: [
        "Managed official communications and event documentation.",
        "Coordinated academic and student events."
      ]
    },
    {
      role: "Information Technology Lead",
      company: "Google Developer Groups on Campus – USTP",
      year: "Aug 2022 – Jul 2023",
      details: [
        "Supervised IT operations and guided student developers.",
        "Delivered tech talks and promoted best practices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute left-4 sm:left-6 top-0 h-full w-1 bg-indigo-200 rounded-full"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-12 sm:pl-16 bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <span className="absolute left-0 sm:left-2 top-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow"></span>

              <h3 className="text-xl font-semibold text-indigo-700">{exp.role}</h3>
              <p className="text-gray-600 font-medium">
                {exp.company} <span className="text-sm text-gray-500">— {exp.year}</span>
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1 text-sm sm:text-base">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
