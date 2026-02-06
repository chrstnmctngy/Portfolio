import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/NavBar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-50 text-neutral-900 dark:bg-neutral-950 dark:text-white antialiased transition-colors duration-300">
        <Navbar />
        <Landing />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contact />
        <footer className="py-6 text-center text-neutral-400 dark:text-neutral-600 text-sm font-mono bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
          &copy; {new Date().getFullYear()} Christian Macatangay
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
