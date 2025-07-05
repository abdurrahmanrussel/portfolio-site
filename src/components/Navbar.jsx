import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'supplementary-learning', label: 'Supplementary Learning' },
  { id: 'competitive-programming', label: 'Competitive Programming' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  );
  const [activeId, setActiveId] = useState('home');
  const [scrollLock, setScrollLock] = useState(false);

  // Init dark mode
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  // Scroll spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      if (scrollLock) return; // lock activeId temporarily
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [scrollLock]);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // close mobile menu on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (id) => {
    setOpen(false);
    setActiveId(id);
    setScrollLock(true);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => setScrollLock(false), 800); // unlock after scroll
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow transition-colors">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
        <a
          href="#home"
          className="font-bold text-xl text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300"
          onClick={() => handleLinkClick('home')}
        >
          Md. Abdur Rahman
        </a>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="text-xl text-blue-700 dark:text-blue-400"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-blue-700 dark:text-blue-400"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleLinkClick(id)}
                className={`text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors ${
                  activeId === id
                    ? 'underline underline-offset-4 decoration-blue-600 dark:decoration-blue-400'
                    : ''
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="text-xl text-blue-700 dark:text-blue-400"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </nav>

      {/* mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white dark:bg-gray-900 shadow">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleLinkClick(id)}
                className={`block py-1 text-lg text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors ${
                  activeId === id
                    ? 'underline underline-offset-4 decoration-blue-600 dark:decoration-blue-400'
                    : ''
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
