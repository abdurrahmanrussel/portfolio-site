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

function App() {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="px-4 md:px-8">
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
      <Footer />
    </>
  );
}

export default App;
