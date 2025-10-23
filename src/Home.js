import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="bg-white text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-300 ease-in-out">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <HeroSection />
        <AboutMeSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection darkMode={darkMode} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
