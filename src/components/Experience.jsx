import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Mobile Application Developer",
      company: "Buying Buddy",
      year: "Oct 2025 - Present",
      desc: "React Native | Expo | TypeScript",
      details: [
        "Architected and developed a cross-platform mobile marketplace connecting car brokers with customers, supporting iOS, Android, and Web.",
        "Implemented MVVM architecture with clean separation of ViewModels, Services, and Repository layers for maintainable, scalable code.",
        "Built secure authentication system with JWT tokens, encrypted storage (Expo Secure Store), and automatic session management.",
        "Developed advanced car search with multi-parameter filtering (make, model, price, mileage, fuel type, etc.) and pagination.",
        "Integrated offer/negotiation workflow allowing users to create, counter, accept, and track deals.",
        "Implemented push notifications with device token management, foreground handling, and backend synchronization.",
        "Created OTA update system with Expo Updates and store version checking for seamless app updates.",
        "Optimized performance with TanStack Query caching, memoized components, skeleton loaders, and lazy loading.",
        "Designed polished UI with React Native Paper, custom animations (Moti/Reanimated), and haptic feedback."
      ]
    },
    {
      role: "Full Stack Developer & Co-Founder",
      company: "Automated Incident Detection and Assistance (Start-Up)",
      year: "Apr 2024 – Aug 2025",
      desc: "React Native | React.js | Django | PostgreSQL",
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
      desc: null,
      details: [
        "Directed the Technology Department and managed multiple projects.",
        "Conducted coding workshops and technical upskilling sessions."
      ]
    },
    {
      role: "General Secretary",
      company: "USTP Scholar Society",
      year: "Aug 2023 – Jul 2024",
      desc: null,
      details: [
        "Managed official communications and event documentation.",
        "Coordinated academic and student events."
      ]
    },
    {
      role: "Information Technology Lead",
      company: "Google Developer Groups on Campus – USTP",
      year: "Aug 2022 – Jul 2023",
      desc: null,
      details: [
        "Supervised IT operations and guided student developers.",
        "Delivered tech talks and promoted best practices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-mono text-neutral-500 mb-2 tracking-widest uppercase">
          Career
        </p>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-16 transition-colors">Experience</h2>

        <div className="max-w-4xl space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 border-l border-gray-200 dark:border-neutral-800 last:pb-0 group transition-colors"
            >
              <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-neutral-700 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-colors duration-300" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-white/90 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-sm text-neutral-500 font-mono shrink-0 whitespace-nowrap sm:ml-4">
                  {exp.year}
                </span>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1 transition-colors">{exp.company}</p>
              {exp.desc && (
                <p className="text-neutral-400 dark:text-neutral-600 text-xs font-mono mb-3 transition-colors">{exp.desc}</p>
              )}

              <ul className="space-y-1.5 mt-3">
                {exp.details.map((d, i) => (
                  <li
                    key={i}
                    className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-gray-300 dark:before:bg-neutral-700 before:rounded-full transition-colors"
                  >
                    {d}
                  </li>
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
