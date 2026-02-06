import React from "react";

function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-mono text-neutral-500 mb-2 tracking-widest uppercase">
          Who I Am
        </p>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 transition-colors">About Me</h2>

        <div className="max-w-3xl space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
          <p>
            I'm Christian Macatangay, a Full Stack Developer and IT graduate
            with experience shipping{" "}
            <span className="text-neutral-900 dark:text-white font-medium">web and mobile applications</span>{" "}
            using React.js, React Native, Django, and Flutter.
          </p>
          <p>
            I enjoy taking ideas from concept to production — from clean
            interfaces to scalable backends. I've worked across{" "}
            <span className="text-neutral-900 dark:text-white font-medium">
              start-ups, academic projects, and leadership roles
            </span>
            , and I thrive in environments where I can learn fast and ship
            meaningful work.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
