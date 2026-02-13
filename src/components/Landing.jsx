import React from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import Profile from "../assets/Profile.jpg";

function Landing() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative bg-white dark:bg-neutral-950 px-6 overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden border-2 border-gray-200 dark:border-neutral-800 hover:border-gray-400 dark:hover:border-neutral-600 transition-colors duration-300">
            <img
              src={Profile}
              alt="Christian Macatangay"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-sm font-mono text-neutral-500 mb-4 tracking-widest uppercase">
          Full Stack Developer
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight transition-colors">
          Christian Macatangay
        </h1>

        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-xl mx-auto transition-colors">
          I build web and mobile applications with React, Django, and modern
          technologies. Focused on turning ideas into scalable, user-friendly
          solutions.
        </p>

        <div className="flex justify-center items-center gap-6 mb-10">
          <a
            href="https://github.com/chrstnmctngy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/chrstnmctngy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <span className="w-px h-5 bg-gray-300 dark:bg-neutral-800" />
          <a
            href="/Macatangay-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 border-b border-gray-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white pb-0.5"
          >
            Resume
          </a>
        </div>
      </div>

      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
        className="absolute bottom-10 cursor-pointer text-neutral-300 dark:text-neutral-600 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors animate-bounce"
      >
        <FaArrowDown size={16} />
      </Link>
    </section>
  );
}

export default Landing;
