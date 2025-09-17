import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <p className="text-gray-600 mb-6">
        I’m always open to discussing new opportunities, collaborations, or exciting projects.  
        Feel free to reach out!
      </p>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-gray-600 text-xl" />
          <span className="text-gray-700">cmacatangay3433@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-gray-600 text-xl" />
          <span className="text-gray-700">+63 930 669 9589</span>
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-8 text-2xl text-gray-600">
        <a href="https://github.com/chrstnmctngy" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/chrstnmctngy" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.facebook.com/chrstnmctngy" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </div>
    </section>
  );
}

export default Contact;
