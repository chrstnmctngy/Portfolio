import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm font-mono text-neutral-500 mb-2 tracking-widest uppercase">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 transition-colors">Get in Touch</h2>

        <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-md mx-auto leading-relaxed transition-colors">
          I'm open to new opportunities, collaborations, or just a conversation
          about tech. Feel free to reach out.
        </p>

        <a
          href="mailto:cmacatangay3433@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200"
        >
          <FaEnvelope size={14} />
          cmacatangay3433@gmail.com
        </a>

        <div className="flex justify-center items-center gap-6 mt-10 text-neutral-400 dark:text-neutral-500">
          <a
            href="https://github.com/chrstnmctngy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/chrstnmctngy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
