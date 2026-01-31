import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaLightbulb } from 'react-icons/fa';

const floatingIconVariants = {
  float: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const About = () => (
  <section
    id="about"
    className="relative py-24 px-6 max-w-5xl mx-auto rounded-3xl shadow-lg bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
  >
    {/* Floating icons */}
    <motion.div
      variants={floatingIconVariants}
      animate="float"
      className="absolute top-12 left-10 text-blue-300 dark:text-blue-700 text-5xl opacity-30"
      aria-hidden="true"
    >
      <FaBrain />
    </motion.div>
    <motion.div
      variants={floatingIconVariants}
      animate="float"
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      className="absolute bottom-16 right-10 text-purple-300 dark:text-purple-700 text-5xl opacity-30"
      aria-hidden="true"
    >
      <FaLightbulb />
    </motion.div>
    <motion.div
      variants={floatingIconVariants}
      animate="float"
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-300 dark:text-green-700 text-6xl opacity-20"
      aria-hidden="true"
    >
      <FaCode />
    </motion.div>

    <motion.h3
      className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      About Me
    </motion.h3>

    <motion.p
      className="text-lg md:text-xl leading-relaxed text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
    >
      I’m a passionate AI & Full-Stack Engineer with a B.Sc. in Electrical & Computer Engineering from RUET, bridging cutting-edge technology and impactful solutions.
    </motion.p>

    <motion.p
      className="text-lg md:text-xl leading-relaxed text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
    >
      Skilled in{' '}
      <span className="font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-800 transition-colors cursor-pointer">
        AI/ML, NLP, RAG systems, LLaMA fine-tuning, Python, data analysis & visualization
      </span>{' '}
      and full-stack development with{' '}
      <span className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors cursor-pointer">
        React, Tailwind, Flask, FastAPI, Streamlit, n8n, Make, Zapier
      </span>
      , I love creating intelligent systems, automation workflows, and innovative software that solves real-world problems.
    </motion.p>

    <motion.p
      className="text-lg md:text-xl leading-relaxed text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
    >
      I value continuous learning, collaboration, and curiosity. My goal is to build projects that make a difference and inspire others through AI and technology.
    </motion.p>

    {/* Call to Action Button */}
    <motion.div
      className="mt-10 text-center relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
    >
      <a
        href="#projects"
        className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg"
      >
        Check Out My Projects
      </a>
    </motion.div>

    {/* Inspirational Quote */}
    <motion.blockquote
      className="mt-14 text-center italic text-gray-600 dark:text-gray-400 max-w-xl mx-auto relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 1 }}
    >
      “The best way to predict the future is to invent it.” — Alan Kay
    </motion.blockquote>
  </section>
);

export default About;
