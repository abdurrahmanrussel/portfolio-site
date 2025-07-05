import React from 'react';
import { experiences } from '../data/experiences';
import { motion } from 'framer-motion';

const Experience = () => (
  <section
    id="experience"
    className="py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
  >
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h3
        className="text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h3>

      <motion.p
        className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Roles and projects where I honed my skills, collaborated with talented teams, and delivered impactful solutions.
      </motion.p>

      <div className="relative border-l-2 border-blue-300 dark:border-blue-700 ml-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="mb-10 ml-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="absolute -left-3.5 flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white dark:ring-gray-800" />
            <h4 className="text-xl font-bold text-blue-800 dark:text-blue-300">
              {exp.role} <span className="font-medium text-gray-700 dark:text-gray-400">@ {exp.company}</span>
            </h4>
            <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              {exp.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
