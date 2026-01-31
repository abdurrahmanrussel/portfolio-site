import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Achievements from './components/Achievements';
import SupplementaryLearning from './components/SupplementaryLearning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingChatbot from './components/FloatingChatbot';

function App() {
  // Initialize theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const root = document.documentElement;

    if (savedTheme === 'dark') {
      root.classList.add('dark');
    } else if (savedTheme === 'light') {
      root.classList.remove('dark');
    } else {
      // Default theme: dark
      localStorage.setItem('theme', 'dark');
      root.classList.add('dark');
    }
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <CompetitiveProgramming />
        <Achievements />
        <SupplementaryLearning />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Chatbot Overlay */}
      <FloatingChatbot />
    </div>
  );
}

export default App;
