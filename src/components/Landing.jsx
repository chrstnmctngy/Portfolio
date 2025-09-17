import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Profile from "../assets/Profile.jpg";

function Landing() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-100 via-white to-indigo-100 px-6"
    >
      <div className="relative">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
          <img
            src={Profile}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg transition-transform transform hover:scale-105 hover:rotate-1"
          />
        </div>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-4">Hi, I’m Christian</h2>
      <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl">
        A Full Stack Developer with experience in building web and mobile applications using
        React, Django, and modern technologies.  
        I’m passionate about turning ideas into scalable, user-friendly solutions and
        constantly learning new ways to improve my craft.
      </p>
      <div className="flex justify-center space-x-6 mb-6 text-2xl text-gray-600">
        <a
          href="https://github.com/chrstnmctngy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/chrstnmctngy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/chrstnmctngy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition"
        >
          <FaFacebook />
        </a>
      </div>
      <a
        href="/Macatangay-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer shadow-md"
      >
        Download My Resume
      </a>
    </section>
  );
}

export default Landing;
