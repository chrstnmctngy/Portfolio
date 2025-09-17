import React from "react";
import Navbar from "./components/NavBar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="font-sans">
        <Navbar />
        <Landing />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contact />
        <footer className="py-6 text-center text-gray-500">
          © {new Date().getFullYear()} Christian’s Portfolio. All rights
          reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
