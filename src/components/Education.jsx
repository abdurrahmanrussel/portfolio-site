import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'B.Sc. in Electrical & Computer Engineering',
      institution: 'Rajshahi University of Engineering & Technology (RUET)',
      period: '2019 – Present',
    },
    {
      degree: 'Higher Secondary Certificate (HSC) — GPA: 5.00',
      institution: 'Shahid Bulbul Government College, Pabna',
      period: '2017 – 2019',
    },
    {
      degree: 'Secondary School Certificate (SSC) — GPA: 5.00',
      institution: 'Ataikula High School, Santhia, Pabna',
      period: '2015 – 2017',
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          className="text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h3>

        <motion.p
          className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          My academic journey has equipped me with the knowledge, discipline, and problem-solving skills to thrive in dynamic environments.
        </motion.p>

        <div className="relative border-l-2 border-blue-300 dark:border-blue-700 ml-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className="mb-8 ml-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-blue-600 rounded-full ring-4 ring-white dark:ring-gray-800 text-white text-sm">
                🎓
              </span>
              <h4 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                {edu.degree}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
