import React from 'react';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

const Skills = () => (
  <section id="skills" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

      <motion.h3
        className="text-4xl lg:text-5xl font-extrabold mb-6 text-center tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Toolbox & Skills
      </motion.h3>

      <motion.p
        className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        A versatile set of technical skills that help me build impactful, scalable, and innovative solutions. Always learning. Always evolving.
      </motion.p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-xl p-8 border border-blue-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/10 dark:to-purple-900/10 scale-100 group-hover:scale-105 transition-transform duration-300 ease-out" />

            <h4 className="relative z-10 font-semibold text-xl lg:text-2xl mb-4 text-blue-700 dark:text-blue-300">
              {group.category}
            </h4>

            <ul className="relative z-10 flex flex-wrap gap-2">
              {group.items.map((skill, j) => (
                <motion.li
                  key={skill}
                  className="px-3 py-1 rounded-full border border-blue-600/40 dark:border-blue-400/50 text-sm lg:text-base text-blue-800 dark:text-blue-300 bg-blue-600/10 dark:bg-blue-400/10 backdrop-blur"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
